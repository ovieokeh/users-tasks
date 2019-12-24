/* eslint-disable no-undef */
require('./usersController.test') // so that it runs first

const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('..')

chai.should()
chai.use(chaiHttp)

describe('Tasks Service', () => {
  describe('Post', () => {
    it('should enforce a numeric userId', done => {
      chai
        .request(app)
        .post('/tasks')
        .send({ description: 'random task', userId: 'a' })
        .end((err, res) => {
          res.should.have.status(422)
          res.body.errors[0].userId.should.eql('the userId must be numeric')
          done()
        })
    })

    it('should enforce a description field', done => {
      chai
        .request(app)
        .post('/tasks')
        .send({ userId: 4 })
        .end((err, res) => {
          res.should.have.status(422)
          res.body.errors[0].description.should.eql(
            'the task requires a description'
          )
          done()
        })
    })

    it('should enforce a minimum length of 5 characters for the description field', done => {
      chai
        .request(app)
        .post('/tasks')
        .send({ description: 'Sa', userId: 4 })
        .end((err, res) => {
          res.should.have.status(422)
          res.body.errors[0].description.should.eql(
            'the task description must contain at least 5 characters'
          )
          done()
        })
    })

    it('should create a task successfully', done => {
      chai
        .request(app)
        .post('/tasks')
        .send({ description: 'random task', userId: 4 })
        .end((err, res) => {
          res.should.have.status(201)
          res.body.message.should.eql('task created successfully')
          done()
        })
    })
  })

  describe('Update', () => {
    it('should enforce numeric taskIds', done => {
      chai
        .request(app)
        .put('/tasks/a')
        .send({ state: 'done' })
        .end((err, res) => {
          res.should.have.status(422)
          res.body.errors[0].should.have.property(
            'taskId',
            'the taskId param must be numeric'
          )
          done()
        })
    })

    it('should enforce the state field', done => {
      chai
        .request(app)
        .put('/tasks/1')
        .send({ someOtherField: 'done' })
        .end((err, res) => {
          res.should.have.status(422)
          res.body.errors[0].should.have.property(
            'state',
            'the task requires a new state'
          )
          done()
        })
    })

    it('should enforce the correct state value', done => {
      chai
        .request(app)
        .put('/tasks/1')
        .send({ state: 'invalid state' })
        .end((err, res) => {
          res.should.have.status(422)
          res.body.errors[0].should.have.property(
            'state',
            'the state must be either "done" or "not done"'
          )
          done()
        })
    })

    it('should update a task successfully', done => {
      chai
        .request(app)
        .put('/tasks/1')
        .send({ state: 'done' })
        .end((err, res) => {
          res.should.have.status(200)
          res.body.message.should.eql('task updated successfully')
          done()
        })
    })
  })

  describe('Delete', () => {
    it('should enforce numeric taskIds', done => {
      chai
        .request(app)
        .delete('/tasks/a')
        .end((err, res) => {
          res.should.have.status(422)
          res.body.errors[0].should.have.property(
            'taskId',
            'the taskId param must be numeric'
          )
          done()
        })
    })

    it('should delete a task successfully', done => {
      chai
        .request(app)
        .delete('/tasks/5')
        .end((err, res) => {
          res.should.have.status(204)
          done()
        })
    })
  })

  describe('List', () => {
    it('should enforce numeric taskIds', done => {
      chai
        .request(app)
        .get('/users/a/tasks')
        .end((err, res) => {
          res.should.have.status(422)
          res.body.errors[0].should.have.property(
            'userId',
            'the userId param must be numeric'
          )
          done()
        })
    })

    it("should list a user's tasks successfully", done => {
      chai
        .request(app)
        .get('/users/1/tasks')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.an('array')
          res.body.length.should.eql(2)
          done()
        })
    })
  })
})

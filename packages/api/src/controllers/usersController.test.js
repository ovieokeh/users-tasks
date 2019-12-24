/* eslint-disable no-undef */
const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('..')

chai.should()
chai.use(chaiHttp)

describe('User Service', () => {
  describe('List', () => {
    it('should get all users successfully', done => {
      chai
        .request(app)
        .get('/api/users')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('array')
          res.body.length.should.be.eql(5) // I seeded 5 contacts
          done()
        })
    })
  })

  describe('Update', () => {
    it('should enforce numeric userIds', done => {
      chai
        .request(app)
        .put('/api/users/a')
        .send({ updatedName: 'John Doe' })
        .end((err, res) => {
          res.should.have.status(422)
          res.body.errors[0].should.have.property(
            'userId',
            'the userId param must be numeric'
          )
          done()
        })
    })

    it('should enforce the updatedName field', done => {
      chai
        .request(app)
        .put('/api/users/1')
        .send({ otherField: 'data' })
        .end((err, res) => {
          res.should.have.status(422)
          res.body.errors[0].should.have.property(
            'updatedName',
            'the updated name must be provided'
          )
          done()
        })
    })

    it('should enforce a minimum length of 2 for the updatedName field', done => {
      chai
        .request(app)
        .put('/api/users/1')
        .send({ updatedName: 'B' })
        .end((err, res) => {
          res.should.have.status(422)
          res.body.errors[0].should.have.property(
            'updatedName',
            'the updated name must contain at least 2 characters'
          )
          done()
        })
    })

    it("should update a user's name successfully", done => {
      chai
        .request(app)
        .put('/api/users/1')
        .send({ updatedName: 'Bon Jovi' })
        .end((err, res) => {
          res.should.have.status(200)
          res.body.message.should.eql('user name updated successfully')
          done()
        })
    })
  })

  describe('Delete', () => {
    it('should enforce numeric userIds', done => {
      chai
        .request(app)
        .delete('/api/users/a')
        .end((err, res) => {
          res.should.have.status(422)
          res.body.errors[0].should.have.property(
            'userId',
            'the userId param must be numeric'
          )
          done()
        })
    })

    it('should delete a user successfully', done => {
      chai
        .request(app)
        .delete('/api/users/5')
        .end((err, res) => {
          res.should.have.status(204)
          done()
        })
    })
  })
})

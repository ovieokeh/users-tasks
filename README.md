# user-task-api

This API is built using Express. It exposes 7 external endpoints for managing user and task data.

### Running the api

To run the api, you have to install the dependencies first
`yarn install` or `npm install`

You also need a .env file for the api to read sensitive information from. Follow the instructions in the `.env.example` file to set one up.

After completing both steps above, you can now run the api by running
`yarn dev` or `npm run dev` (development mode)
`yarn start` or `npm start` (production mode)

This will expose the running api on port 3000 if you do not set a custom port in the .env file.

### Running the tests

To run the tests, you will have to create a separate database to avoid corrupting production data. After creating the database, update the `.env` file with the appropriate credentials.

You can now run
`yarn test` or `npm test`

### Endpoints

The api exposes 7 external endpoints for managing two types of data

#### 1. User Data

GET /users - Returns an array of all users

PUT /users/:userId - Updates a user's name.
Requires an `updatedName` property in the request body

DELETE /users/:userId - Deletes a single user

#### 2. Tasks Data

POST /tasks - Creates a new task. Requires `description` and `userId` properties in the request body

GET /users/:userId/tasks - Returns all tasks owned by the specified user

PUT /tasks/:taskId - Updates a task's status. Accepts only "done" and "not done"

DELETE /tasks/:taskId - Deletes a single task

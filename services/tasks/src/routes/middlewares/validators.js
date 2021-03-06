const { body, param, validationResult } = require('express-validator')

// rules
const taskCreateRules = [
  body('userId', 'the task requires a userId').exists(),
  body('userId', 'the userId must be numeric').isNumeric(),
  body('description', 'the task requires a description').exists(),
  body(
    'description',
    'the task description must contain at least 5 characters'
  ).isLength({ min: 5 })
]

const tasksUserRules = [
  param('userId', 'the userId param must be numeric').isNumeric()
]

const taskUpdateRules = [
  param('taskId', 'the taskId param must be numeric').isNumeric(),
  body('state', 'the task requires a new state').exists(),
  body('state', 'the state must be either "done" or "not done"').isIn([
    'done',
    'not done'
  ])
]

const tasksDeleteRules = [
  param('taskId', 'the taskId param must be numeric').isNumeric()
]

// validator function
const validate = (req, res, next) => {
  const errors = validationResult(req)

  if (errors.isEmpty()) {
    return next()
  }

  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  return res.status(422).json({
    errors: extractedErrors
  })
}

module.exports = {
  taskCreateRules,
  tasksUserRules,
  taskUpdateRules,
  tasksDeleteRules,
  validate
}

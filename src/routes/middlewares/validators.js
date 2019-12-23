const { body, param, validationResult } = require('express-validator')

// rules
const userUpdateRules = [
  param('userId', 'the userId param must be numeric').isNumeric(),
  body('updatedName', 'the updated name must be provided').exists(),
  body(
    'updatedName',
    'the updated name must contain at least 2 characters'
  ).isLength({ min: 2 })
]

const userDeleteRules = [
  param('userId', 'the userId param must be numeric').isNumeric()
]

const taskCreateRules = [
  body('userId', 'the task requires a userId').exists(),
  body('userId', 'the userId must be numeric').isNumeric(),
  body('description', 'the task requires a description').exists(),
  body(
    'description',
    'the task description must contain at least 5 characters'
  ).isLength({ min: 5 })
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
  userUpdateRules,
  userDeleteRules,
  taskCreateRules,
  validate
}

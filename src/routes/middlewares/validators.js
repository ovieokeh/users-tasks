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
  validate
}

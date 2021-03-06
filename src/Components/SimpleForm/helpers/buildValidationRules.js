
export const buildValidationRules = (validationRules) => {
  return Object.entries(validationRules)
    .reduce((accum, [field, rule]) =>{
      accum[field] = rule.validations
      return accum;
    }, {})
}

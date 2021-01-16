
export const buildFieldValidationMessages = (fieldName, message) => {
  message = message || {}
  return Object.entries(message)
    .reduce((accum, [validationRule, validationMessage]) => {
      if (!validationRule || !validationMessage) return accum;
      accum[`${validationRule}.${fieldName}`] = validationMessage
      return accum;
    }, {})
}

export const buildFormValidationMessages = (validationRules) => {
  return Object.entries(validationRules)
    .reduce((accum, [fieldName, others]) =>{
      const { message } = others;
      if (!message) return accum;
      const composedMessage = buildFieldValidationMessages(fieldName, message)
      return { ...accum, ...composedMessage };
    }, {})
}


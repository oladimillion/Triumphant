
export const buildValidationMessage = (fieldName, customMessages) => {
  customMessages = customMessages || {}
  return Object.entries(customMessages)
    .reduce((accum, [validationRule, validationMessage]) => {
      if (!validationRule || !validationMessage) return accum;
      accum[`${validationRule}.${fieldName}`] = validationMessage
      return accum;
    }, {})
}

export const buildValidationMessages = (validationRules) => {
  return Object.entries(validationRules)
    .reduce((accum, [fieldName, others]) =>{
      const { customMessages } = others;
      if (!customMessages) return accum;
      return { ...accum, ...buildValidationMessage(fieldName, customMessages) };
    }, {})
}


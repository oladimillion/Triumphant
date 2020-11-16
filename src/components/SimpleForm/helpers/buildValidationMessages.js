
export const buildFieldValidationMessages = (fieldName, customMessages) => {
  customMessages = customMessages || {}
  return Object.entries(customMessages)
    .reduce((accum, [validationRule, validationMessage]) => {
      if (!validationRule || !validationMessage) return accum;
      accum[`${validationRule}.${fieldName}`] = validationMessage
      return accum;
    }, {})
}

export const buildFormValidationMessages = (validationRules) => {
  return Object.entries(validationRules)
    .reduce((accum, [fieldName, others]) =>{
      const { customMessages } = others;
      if (!customMessages) return accum;
      return { ...accum, ...buildFieldValidationMessages(fieldName, customMessages) };
    }, {})
}


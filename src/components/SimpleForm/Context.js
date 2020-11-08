import React from 'react'

export const FormContext = React.createContext({
  setFieldValue: () => {},
  setFieldError: () => {},
  setSubmitting: () => {},
  onChange: () => {},
  validateForm: () => {},
  validateField: () => {},
  submitting: false,
  values: {},
  errors: {},
})

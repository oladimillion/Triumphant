import React from 'react'
import { FormContext } from '../Context'

export const useFormContext = (fieldName) => {
  return React.useContext(FormContext)
}

import { isNumber } from '../helpers/isNumber'

export const getPath = (fieldName) => {
  return fieldName.split('.').map((part) => {
    if (isNumber(part)) return '*' 
    return part
  }).join('.')
}

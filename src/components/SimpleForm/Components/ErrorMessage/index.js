import React from 'react'
import PropTypes from 'prop-types'
import { Text } from '../Text'

export const ErrorMessage = ({ children }) =>  (
  <Text as='small' color='#9f3a38'>{children}</Text>
)

ErrorMessage.propTypes = {
  children: PropTypes.any
}

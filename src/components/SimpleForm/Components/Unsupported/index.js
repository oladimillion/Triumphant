import React from 'react'
import PropTypes from 'prop-types'
import { Text } from '../Text'

export const Unsupported = ({ type }) =>  (
  <Text as='div'>Field Type <b>{type}</b> not supported</Text>
)

Unsupported.propTypes = {
  type: PropTypes.string.isRequired
}

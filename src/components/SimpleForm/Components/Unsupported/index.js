import React from 'react'
import { Text } from '../Text'

export const UnsupportedField = ({ type }) =>  (
  <Text as='div'>Field Type <b>{type}</b> not supported</Text>
)

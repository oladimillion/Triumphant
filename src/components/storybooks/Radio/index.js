import React from 'react'
import styled from 'styled-components'
import { Form, Radio as UIRadio } from 'semantic-ui-react'

export const Radio = styled(UIRadio)``
Radio.displayName = 'Radio'
Radio.defaultProps = {
  toggle: true,
}

const RadioContext = React.createContext({
  value: null,
  onChange: () => {},
})

const RadioComponent = (props) => {
  const { 
    children,
    onChange, 
    name, 
    disabled, 
    value: fieldValue, 
    ...rest
  } = props

  const [value, setValue] = React.useState(fieldValue)

  return (
    <RadioContext.Provider 
      value={{
        value,
        name,
        disabled,
        setValue,
        onChange: (value) => {
          setValue(value)
          onChange({
            target: {
              name: props.name,
              value,
            }
          })
        }
      }}
    >
      <Form {...rest} >
        {children}
      </Form>
    </RadioContext.Provider>
  )
}

RadioComponent.defaultProps = {
  onChange: () => {},
  children: null,
  value: null,
  name: null,
}

const RadioComponentItem = (props) => {
  const { as: Component } = props
  const { value, name, onChange, disabled } = React.useContext(RadioContext)
  const { value: fieldValue, label, ...rest } = props
  const dataProps = {
    checked: fieldValue === value,
    onChange: () => onChange(fieldValue),
    label,
    name,
    disabled,
  }
  return (
    <Form.Field {...rest}>
      {
        Component ? 
          <Component {...dataProps} /> :
          <UIRadio {...dataProps} />
      }
    </Form.Field>
  )
}

RadioComponentItem.defaultProps = {
  value: null,
  label: null,
  name: null,
  as: null,
}

export const RadioArray = RadioComponent

RadioArray.Item = RadioComponentItem

RadioArray.propTypes = {}

RadioArray.displayName = 'RadioArray'


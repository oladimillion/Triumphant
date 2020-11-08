import React from 'react'
import styled from 'styled-components'
import hoistNonReactStatics from 'hoist-non-react-statics';
import { layout, space } from 'styled-system'
import { Button as UIButton } from 'semantic-ui-react'

const ButtonComponent = (props) => {
  const { children, ...rest } = props
  return <UIButton {...rest}>{children}</UIButton>
}

export const Button = styled(ButtonComponent)(
  space,
  layout,
)

Button.displayName = 'Button'

Button.propTypes = { 
  ...space.propTypes,
  ...layout.propTypes,
}

hoistNonReactStatics(Button, UIButton)

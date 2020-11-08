import styled from 'styled-components'
import hoistNonReactStatics from 'hoist-non-react-statics';
import { Radio as UIRadio } from 'semantic-ui-react'
import PropTypes from 'prop-types'

export const Radio = styled(UIRadio).attrs(() => ({
  className: 'Radio',
}))``

Radio.displayName = 'Radio'

Radio.defaultProps = {
  toggle: true,
}
Radio.propTypes = {
  toggle: PropTypes.bool,
}

hoistNonReactStatics(Radio, UIRadio)



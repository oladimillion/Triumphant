import PropTypes from 'prop-types'
import styled from 'styled-components'
import { layout, space } from 'styled-system'
import { Input as SemantiUIInput } from 'semantic-ui-react'

export const TextInput = styled(SemantiUIInput)(
  space,
  layout,
)

TextInput.displayName = 'TextInput'

TextInput.defaultProps = {
  width: '100%',
}

TextInput.propTypes = { 
  ...space.propTypes,
  ...layout.propTypes,
  error: PropTypes.boolean,
}

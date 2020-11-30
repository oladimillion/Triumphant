import styled from 'styled-components'
import { layout, space, typography, color } from 'styled-system'

export const Text = styled.div.attrs((props) => ({
  className: 'Text',
  as: props.as
}))`
  ${space};
  ${layout};
  ${color};
  ${typography};
`

Text.displayName = 'Text'

Text.propTypes = { 
  ...space.propTypes,
  ...layout.propTypes,
  ...color.propTypes,
  ...typography.propTypes
}

Text.defaultProps = {
  as: 'p'
}


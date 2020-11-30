import styled from 'styled-components'
import { layout, space, flexbox } from 'styled-system'

export const FlexBox = styled.div.attrs(() => ({
  className: 'FlexBox',
}))`
  ${space};
  ${layout};
  ${flexbox};
`

FlexBox.displayName = 'FlexBox'

FlexBox.propTypes = { 
  ...space.propTypes,
  ...layout.propTypes,
  ...flexbox.propTypes,
}

FlexBox.defaultProps = {
  display: 'flex',
}


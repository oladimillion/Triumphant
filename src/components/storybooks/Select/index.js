import PropTypes from 'prop-types'
import styled from 'styled-components'
import { layout, space } from 'styled-system'
import { Select as UISelect } from 'semantic-ui-react'

export const Select = styled(UISelect)(
  {
    width: '100%',
  },
  space,
  layout,
)

Select.displayName = 'Select'

Select.defaultProps = {
  options: [],
  search: true,
}

Select.propTypes = { 
  ...space.propTypes,
  ...layout.propTypes,
  error: PropTypes.boolean,
}

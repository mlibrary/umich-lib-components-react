import React from 'react'
import PropTypes from 'prop-types';
import styled from '@emotion/styled'
import {
  LINK_STYLES
} from '@umich-lib/styles'

const StyledLink = styled('a')(props => LINK_STYLES[props.kind])

export default function Link({ children, ...other }) {
  return (
    <StyledLink {...other}>
      {children}
    </StyledLink>
  )
}

Link.propTypes = {
  kind: PropTypes.oneOf([
    "default",
    "subtle",
    "light",
    "special",
    "list",
    "list-medium",
    "list-strong",
    "description"
  ]),
  children: PropTypes.node.isRequired,
  as: PropTypes.node,
};

Link.defaultProps = {
  kind: 'default',
  as: 'a'
};
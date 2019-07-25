import React, { Component } from 'react';
import { ExpandableContext } from './expandable'
import {
  Button
} from '@umich-lib/core'

const cleanList = (list) => {
  return list.filter(x => (x ? true : false)).join(' ').trim()
}

class ExpandableButton extends Component {
  render() {
    const { context } = this.props

    if (context.disabled) {
      return null
    }

    return (
      <Button {...this.props} onClick={() => context.toggleExpanded()}>
        {context.expanded ? (
          cleanList(['Show fewer', this.props.name])
        ) : (
          cleanList(['Show all', this.props.count, this.props.name])
        )}
      </Button>
    )
  }
}

export default props => (
  <ExpandableContext.Consumer>
    {context => <ExpandableButton {...props} context={context}/>}
  </ExpandableContext.Consumer>
)
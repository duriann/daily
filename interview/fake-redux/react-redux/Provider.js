import React from 'react'
import PropTypes from 'prop-types'

export class Provider extends React.Component{

  static childContextTypes = {
    store: PropTypes.object
  }

  constructor(props,context) {
    super(props,context)
    this.store = props.store
  }

  getChildContext(){
    return {
      store: this.store
    }
  }

  render() {
    return this.props.children
  }
}
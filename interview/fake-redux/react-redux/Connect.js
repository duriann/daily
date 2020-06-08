import React, { Component } from "react";
import PropTypes from "prop-types";

export function connect(mapStateToProps, mapDispatchToProps) {
  return function (C) {
    return class extends Component {
      componentDidMount() {
        this.context.store.subscribe(this.handleChange.bind(this));
      }

      handleChange() {
        this.forceUpdate();
      }
      static contextTypes = {
        store: PropTypes.object,
      };

      render() {
        console.log('this.context.store.dispatch',this.context.store.dispatch);
        console.log(mapDispatchToProps(this.context.store.dispatch));
        return (
          <C
            {...this.props}
            {...mapDispatchToProps(this.context.store.dispatch)}
            {...mapStateToProps(this.context.store.getState())}
          />
        );
      }
    };
  };
}

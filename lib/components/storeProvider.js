//example of a store provider that receives a component and
//wraps it up in a generic container component
//also known as Higher Order Component (HOC)

import React from 'react';
import PropTypes from 'prop-types';

const storeProvider = (extraProps) => (Component) => {

  return class extends React.Component {

    static displayName = `${Component.name}Container`;
    static contextTypes = {
      store: PropTypes.object,
    };

    render() {
      return <Component
       {...this.props}
       {...extraProps(this.context.store, this.props)}
        store={this.context.store} />;
    }
  };

};

export default storeProvider;

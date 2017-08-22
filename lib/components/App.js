import React from 'react';
import PropTypes from 'prop-types';

import ArticleList from './ArticleList';
import SearchBar from './SearchBar';

class App extends React.Component {

    static childContextTypes = {
      store: PropTypes.object,
    }

    getChildContext() {
      return {
        store: this.props.store
      };
    }

    state = this.props.store.getState();

    render() {
        return (
          <div>
            <SearchBar />
            <ArticleList
              articles={this.state.articles}
              store={this.props.store}
            />
          </div>
        );
    }
}

export default App;

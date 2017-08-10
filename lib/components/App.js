import React from 'react';
import axios from 'axios';

import DataApi from 'state-api';
import ArticleList from './ArticleList';

//import { data } from '../testData';
//const api = new DataApi(data);

class App extends React.Component {

    state = {
      articles: this.props.initialData.articles,
      authors: this.props.initialData.authors,
    }

    //fetch the data from the server when component is mounted
    // async componentDidMount() {
    //   const resp = await axios.get('/data');
    //   const api = new DataApi(resp.data);
    //
    //   //set the state accordingly
    //   this.setState(() => {
    //     return {
    //       articles: api.getArticles(),
    //       authors: api.getAuthors(),
    //     }
    //   });
    // }

    //functions
    articleActions = {
        lookupAuthor: (authorId) => this.state.authors[authorId],
    };

    render() {      
        return (
            <ArticleList
                articles={this.state.articles}
                articleActions={this.articleActions}
            />
        );
    }
}

export default App;

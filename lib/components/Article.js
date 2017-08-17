import React from 'react';
import PropTypes from 'prop-types';
import storeProvider from './storeProvider';

//styling using plain JS object
//example of global styles
const styles = {
    article: {
        paddingBottom: 10,
        borderBottomStyle: 'solid',
        borderBottomColor: '#aaa',
        borderBottomWidth: 1,
        marginBottom: 10,
    },
    title: {
        fontWeight: 'bold',
    },
    date: {
        fontSize: '0.85em',
        color: '#888',
    },
    author: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    body: {
        paddingLeft: 20,
    }
};

//a sample global function
const dateDisplay = (dateString) => new Date(dateString).toDateString();

//example of a pure presentational component. The store & logic etc.
//are handled by it's HOC 'storeProvider'
const Article = (props) => {
    const { article, author } = props;
    return (
        <div style={styles.article}>
            <div style={styles.title}>{article.title}</div>
            <div style={styles.date}>{dateDisplay(article.date)}</div>
            <div style={styles.author}>
                <a href={author.website}>
                    {author.firstName} {author.lastName}
                </a>
            </div>
            <div style={styles.body}>{article.body}</div>
        </div>
    );
};

//proptype validation
Article.propTypes = {
  article: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  })
};

function extraProps(store, originalProps) {
  return {
    author: store.lookupAuthor(originalProps.article.authorId),
  };
}

//functional programming trick to have the storeProvider return another function
export default storeProvider(extraProps)(Article);

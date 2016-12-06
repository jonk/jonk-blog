import React, {PropTypes, Component} from 'react';
import BlogPost from './BlogPost';

//maybe refactor this to do on change
export default class Blog extends Component {
    render() {
        return (
            this.props.isLoading === true 
            ?  <p> Loading </p>
            : <div> {getPosts(this.props.blogPosts)} </div>  
        )
    }
}

//helper function
function getPosts(posts) {
    return posts.map(function(post) {
        return <BlogPost key={post._id} content={post.content} title={post.title} />
    });
}

Blog.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    blogPosts: PropTypes.array.isRequired
}
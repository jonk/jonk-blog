var React = require('react');
var PropTypes = React.PropTypes;
var BlogPost = require('./BlogPost');

function getPosts(posts) {
    return posts.map(function(post) {
        return <BlogPost key={post._id} content={post.content} title={post.title} />
    });
}

function Blog(props) {
    return (props.isLoading === true 
        ?  <p> tee hee </p>
        : <div> {getPosts(props.blogPosts)} </div>  
    )
}

Blog.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    blogPosts: PropTypes.array.isRequired
}

module.exports = Blog;
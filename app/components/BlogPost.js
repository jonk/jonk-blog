var React = require('react');
var PropTypes = React.PropTypes;

function BlogPost(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
}

BlogPost.propTypes = {
    content: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

module.exports = BlogPost;
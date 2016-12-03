import React, {PropTypes, Component} from 'react';

export default class BlogPost extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <p>{this.props.content}</p>
            </div>
        )
    }
}

BlogPost.propTypes = {
    content: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}
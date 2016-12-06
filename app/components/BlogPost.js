import React, {PropTypes, Component} from 'react';

export default class BlogPost extends Component {
    render() {
        const blogHeader = {
            color: "#93291b",
            fontFamily: "Helvetica Neue",
            fontSize: 36,
            paddingBottom: 10,
            marginLeft: 5
        };
        const blogParagraph = {
            fontFamily: "Verdana",
            marginBottom: 15,
            marginLeft: 20,
            color: "#666"
        }
        return (
            <div>
                <h3 style={blogHeader}>{this.props.title}</h3>
                <p style={blogParagraph} dangerouslySetInnerHTML={{__html: this.props.content }} />
            </div>
        )
    }
}

BlogPost.propTypes = {
    content: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

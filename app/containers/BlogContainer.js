import React from 'react';
import Axios from 'axios';
import Blog from '../components/Blog';
import cosmicHelpers from '../utils/cosmicHelpers';

var BlogContainer = React.createClass({
    getInitialState: function() {
        return {
            isLoading: true,
            blogPosts: []
        }    
    },
    componentDidMount: function() {
        cosmicHelpers.getBlogPosts()
            .then(function(blogPosts) {
                this.setState({
                    isLoading: false,
                    blogPosts: blogPosts,
                })
            }.bind(this));
    },
    render: function() {
        return (
            <Blog 
                isLoading={this.state.isLoading}
                blogPosts={this.state.blogPosts} />
        )
    }
})

module.exports = BlogContainer;
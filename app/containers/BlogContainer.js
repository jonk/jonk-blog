import React, {Component} from 'react';
import Axios from 'axios';
import Blog from '../components/Blog';
import cosmicHelpers from '../utils/cosmicHelpers';

export default class BlogContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            blogPosts: []
        };
    }

    componentDidMount() {
        cosmicHelpers.getBlogPosts()
            .then(function(blogPosts) {
                this.setState({
                    isLoading: false,
                    blogPosts: blogPosts,
                })
            }.bind(this));
    }

    render() {
        return (
            <Blog 
                isLoading={this.state.isLoading}
                blogPosts={this.state.blogPosts} />
        )
    }
}
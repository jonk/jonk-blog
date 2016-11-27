var React = require('react');
var BlogTitle = require('./BlogTitle');
var Bio = require('./Bio');
var BlogPost = require('./BlogPost');

function Blog(props) {
    return (
        <div>
            <BlogTitle />
            <Bio />
            <BlogPost />
        </div>
    )
}

module.exports = Blog;
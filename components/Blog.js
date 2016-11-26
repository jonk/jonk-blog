var React = require('react');
var jonImage = require('../styles').jonImage;

function Blog(props) {
    return (
        <div className="container">
            <div className="row" >
                <div className="col-sm-12 text-center"><h1>Jonks Blog!</h1></div>
            </div>
            <div className="row">
                <div className="col-sm-1">
                    <img src="https://avatars3.githubusercontent.com/u/1980266?v=3&s=460" style={jonImage}></img>
                </div>
                <div className="col-sm-10 col-sm-offset-1">
                    <h3>A blog post!</h3>
                </div>
            </div>
        </div>

    )
}

module.exports = Blog;
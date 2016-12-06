import React, {Component} from 'react';

export default class Title extends Component {
    render() {
        const titleStyle = {
           color: "#333333",
           fontFamily: "Helvetica Neue",
           fontSize: 64,
           fontWeight: "normal",
           margin: "10 0 54",
           textAlign: "center"
        };
        return (
            <div>
                <h1 style={titleStyle}>Jonk Blog</h1>
            </div>
        )
    }
}
import React from 'react';
import Title from './Title';

function Main(props) {
    return (
        <div className="main-container">
            <Title />
            {props.children}
        </div>
    )
}

export default Main;
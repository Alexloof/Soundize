import React, { Component } from 'react';
import { Link } from 'react-router';

import Nav from "./Nav";

class App extends Component {
    
    render() {
        return (
            <div>
                <Nav/>
                {this.props.children}
            </div>
        );
    }
}

export default App;
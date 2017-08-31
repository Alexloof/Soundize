import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <a href="https://accounts.spotify.com/authorize?client_id=8d7cb1d087644280982de543cbb92989&redirect_uri=http://localhost:8080/hem&response_type=token&state=123" 
                    className="button">Login</a>

            </div>
        );
    }
}

export default Login;
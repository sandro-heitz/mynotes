
import React, { Component } from 'react';
import HeaderPanel from './HeaderPanel';
import ImagePanel from './ImagePanel';
import NotesPanel from './notes/NotesPanel';

class MySigninApp extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-4 col-md-4">
                        <div className="form-login" style={{marginTop: '50px'}}>
                            <h2>Welcome back ...</h2>
                            <div className="form-group" style={{marginTop: '30px'}}>
                            <input type="text" id="userName" autoFocus={true} className="form-control input-sm chat-input" placeholder="Anwendername" />
                            </div>
                            <div className="form-group">
                            <input type="password" id="userPassword" className="form-control input-sm chat-input" placeholder="Passwort" />
                            </div>
                            <div className="wrapper">
                                <span className="form-group">
                                    <a href="#" className="btn btn-primary btn-md">Login</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
    }
}

export default MySigninApp;

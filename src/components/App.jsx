import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Login from './Login/Login';
import Signup from './SignUp/Signup';
import "./App.css"

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Routes>

                        <Route path='/login' element={<Login/>}/>
                        <Route path='/register' element={<Signup/>}/>

                    </Routes>
                </Router>
            </div>
        );
    }
}

export default App;

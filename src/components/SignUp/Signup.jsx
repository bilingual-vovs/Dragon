import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './signup.css'

class Signup extends Component {
    render() {
        return (
            <div className='signup'>
                <h2>Раді бачити</h2>
                <input type="email" placeholder="Ім'я" />
                <br/>
                <input type="email" placeholder="Пошта" />
                <br/>
                <input type="password" placeholder="Пароль" />
                <br/>
                <button>
                    <Link className='link'>Доеднатися</Link>
                </button>
                <br/>
                <button>
                    <Link to="/login" className='link'>Я маю аккаунт</Link>
                </button>
            </div>
        );
    }
}

export default Signup;

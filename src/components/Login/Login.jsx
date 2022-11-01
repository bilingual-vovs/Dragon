import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './login.css'
import icon from './icon.png'

class Login extends Component {
    render() {
        return (
            <div className='login'>
                <img src={icon} alt="" />
                <h2>Вітаємо знову</h2>
                <input type="email" placeholder="Ім'я чи пошта" />
                <br/>
                <input type="password" placeholder="Пароль" />
                <br/>
                <button>
                    <Link className='link'>Увійти</Link>
                </button>
                <br/>
                <button>
                    <Link to="/register" className='link'>Доеднатися</Link>
                </button>
            </div>
        );
    }
}

export default Login;

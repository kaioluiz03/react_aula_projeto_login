import React from 'react';
import Image from './image/thumb-news.png'
import './Login.css';

export default function Login(){

    return(
        <div className='container'>

            <div>
                <img alt='imagem de conexão' src={ Image } />
            </div>

            <form className='form'>
                <div className='title-login'>
                    <h3>Member Login</h3>
                </div>
                
                <div className='usuario'>
                    <input type='email' name='username' placeholder='Email' />
                </div>

                <div className='senha'>
                    <input type='password' name='senha' placeholder='Password' />
                </div>

                <button className='botao'>LOGIN</button>

                <div>        
                    <p><a href='https://github.com/kaioluiz03/react_primeiro_projeto.git' target='_blank' rel="noreferrer">Forgot your password and/or email?</a></p>
                </div>

                <div className='linkCriate-acc'>
                    <p><a href='https://github.com/kaioluiz03/react_primeiro_projeto.git' target='_blank' rel="noreferrer">Create your account</a></p>
                </div>
            </form>

        </div>
    );
}
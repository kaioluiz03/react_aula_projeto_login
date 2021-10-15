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
                <div>
                    <h3>Member Login</h3>
                </div>
                
                <div className='usuario'>
                    <input type='text ' name='username' placeholder='Nome do Usuário' />
                </div>

                <div className='senha'>
                    <input type='password' name='senha' placeholder='Senha' />
                </div>

                <button className='botao'>Login</button>

                <p>Esqueceu sua senha? <a href='https://github.com/kaioluiz03/react_primeiro_projeto.git' target='_blank' rel="noreferrer">Click aqui!</a></p>
            </form>

        </div>
    );
}
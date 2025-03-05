import React from 'react';
import './LoginForm.css';


const LoginFormComponent = ()=>{
    return(
        <div className='wrapper'>
            <form action="">
                <h1>Login</h1>
                <div className='input-box'>
                    <input type='text' placeholder='username' required/>

                </div>
                <div className='input-box'>
                    <input type='password' placeholder='password' required/>

                </div>
                <div className='remember-forgot'>
                    <label><input type='checkbox'/>remember me</label>
                    <a href='#'>bhul gaya soo bhul gaya</a>
                </div>

                <button type='submit'>Login</button>

                <div className='register-link'>
                    <p> don't have an account?<a href='#'>register</a></p>
                </div>
            </form>
        </div>
    )
}


export default LoginFormComponent; 
import React from 'react'
import './loginForm.css'

export default function LoginForm() {
    return  (
        <>
        <div className='wrapper'>
        <div className="board">
            <h1>Board.</h1>
        </div>
        <div className="wrapper2">
        <div className="signin">
            <h1>Sign In</h1>
            <p>Sign in to your account</p>
            <div className="box">
                <p>Email address</p>
                <input type="text" placeholder='johndoe@gmail.com' />
                <p>Password</p>
                <input type="password" placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;' />
                <a href="">Forget password?</a>
                <button>Sign in</button>
            </div>
        </div>
        </div>
        </div>
        </>
    )
}
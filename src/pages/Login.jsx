import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Auth from '../utils/auth'

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [hasAccount, setHasAccount] = useState(true)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const changeUsername = (event) => {
        setUsername(event.target.value)
    }

    const changePassword = (event) => {
        setPassword(event.target.value)
    }

    const submit = async () => {
        if (username && password) {
            let response
            try {
                if (hasAccount) {
                    response = await fetch(`https://frozen-stream-47038-dfe3b82454fa.herokuapp.com/user/login`, {
                        method: 'POST',
                        body: JSON.stringify({ username: username, password: password }),
                        headers: { 'Content-Type': 'application/json' }
                    })
                } else {
                    response = await fetch(`https://frozen-stream-47038-dfe3b82454fa.herokuapp.com/user`, {
                        method: 'POST',
                        body: JSON.stringify({ username: username, password: password }),
                        headers: { 'Content-Type': 'application/json' }
                    })
                }
                if (response.ok) {
                    const userData = await response.json()
                    Auth.login(userData.token)
                    navigate('/Home')
                }
                if (!response.ok) {
                    if (response.status >= 400 && response.status < 500) {
                        console.clear()
                        throw new Error('Some error msg here');
                    } else if (response.status >= 500 && response.status < 600) {
                        console.clear()
                        throw new Error('Some other error msg here');
                    }
                }
            } catch (err) {
                if (hasAccount) {
                    setError('Username or password is incorrect.')
                } else {
                    setError('That username or password has already been taken.')
                }
            }
        }
    }

    const toggleHasAccount = () => {
        setHasAccount(!hasAccount)
        setError('')
    }

    return (
        <>
            <h1 style={{ color: 'black' }}>{hasAccount ? 'Log In' : 'Create Account'}</h1>
            <button style={{ color: 'blue', border: 'none', backgroundColor: 'lightgreen' }} onClick={toggleHasAccount}>{hasAccount ? "Don't have an account?" : "Already have an account?"}</button>
            <h2>Username: </h2>
            <input value={username} onChange={changeUsername} onKeyDown={(event) => { if (event.code === 'Enter') { submit() } }}></input>
            <h2>Password: </h2>
            <input type={hasAccount ? 'password' : 'text'} value={password} onChange={changePassword} onKeyDown={(event) => { if (event.code === 'Enter') { submit() } }}></input>
            <p style={{ color: 'red' }}>{error}</p>
            <button onClick={submit}>{hasAccount ? 'Log In' : 'Create Account'}</button>
        </>
    )
}

export default Login
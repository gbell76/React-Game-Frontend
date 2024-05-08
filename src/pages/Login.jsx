import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
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

    const submit = async() => {
        if(username && password){
            try{
                let response
                if(hasAccount){
                    response = await fetch(`http://localhost:5000/user/login`, {
                        method: 'POST',
                        body: JSON.stringify({username: username, password: password}),
                        headers: {'Content-Type': 'application/json'}
                    })
                }else{
                    response = await fetch(`http://localhost:5000/user`, {
                        method: 'POST',
                        body: JSON.stringify({username: username, password: password}),
                        headers: {'Content-Type': 'application/json'}
                    })
                } 
                if(response.ok){
                    const userData = await response.json()
                    Auth.login(userData.token)
                    navigate('/Home')
                }
            }catch(err){
                console.error(err)
                if(hasAccount){
                    setError('Username or password is incorrect.')
                }else{
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
            <h1 style={{color: 'black'}}>{hasAccount ? 'Log In' : 'Create Account'}</h1>
            <button style={{color: 'blue', border: 'none', backgroundColor: 'lightgreen'}} onClick={toggleHasAccount}>{hasAccount ? "Don't have an account?" : "Already have an account?"}</button>
            <h2>Username: </h2>
            <input value={username} onChange={changeUsername}></input>
            <h2>Password: </h2>
            <input value={password} onChange={changePassword}></input>
            <p style={{color: 'red'}}>{error}</p>
            <button onClick={submit}>{hasAccount ? 'Log In' : 'Create Account'}</button>
        </>
    )
}

export default Login
import {useEffect} from 'react'
import Auth from '../utils/auth'
import Hex from '../components/Hex'

const FreeForAll = () => {

    useEffect(() => {
        Auth.checkLoggedIn()
    }, [])

    return <>
        <p>Not yet implimented</p>
    </>
}

export default FreeForAll
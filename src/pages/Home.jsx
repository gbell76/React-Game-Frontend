import { useState, useEffect } from 'react'
import Auth from '../utils/auth'


const Home = () => {

    useEffect(() => {
        Auth.checkLoggedIn()
    }, [])

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2>About Bot Battle</h2>
                <p style={{width: '50%', textIndent: '5%'}}>Bot Battle is a simple multiplayer game where 2-4 players battle each other with robots with customized stats in a turn based fashion on a hex based grid. Each bot has health, damage, range, and movement which can be customized and a set 2 actions per turn. Challenge is 1v1, Free For All (FFA) is a 3 player game, and Mayhem is a 4 person free for all!</p>
            </div>
        </>
    )
}

export default Home
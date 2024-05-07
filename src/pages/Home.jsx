import { useState, useEffect } from 'react'
import Auth from '../utils/auth'
import Hex from '../components/Hex'


const Home = () => {

    useEffect(() => {
        Auth.checkLoggedIn()
    }, [])

    const rows = 7
    const columns = 5
    const columnArray = []

    const [playerOneCoordinates, setPlayerOneCoordinates] = useState([6, 2])
    const [playerTwoCoordinates, setPlayerTwoCoordinates] = useState([0, 2])
    const [playerOneActive, setPlayerOneActive] = useState(true)
    const [remainingMoves, setRemainingMoves] = useState(2)
    const [playerOneStats, setPlayerOneStats] = useState({ move: 1, range: 1, damage: 1, health: 1 })
    const [playerOneRemainingStatPoints, setPlayerOneRemainingStatPoints] = useState(5)
    const [playerTwoStats, setPlayerTwoStats] = useState({ move: 1, range: 1, damage: 1, health: 1 })
    const [playerTwoRemainingStatPoints, setPlayerTwoRemainingStatPoints] = useState(5)

    for (let i = 0; i < rows; i++) {
        const rowArray = []
        for (let j = 0; j < columns; j++) {
            const coordinates = [i, j]
            rowArray.push({ coordinates, contains: JSON.stringify(playerOneCoordinates) === JSON.stringify(coordinates) ? 'player one' : JSON.stringify(playerTwoCoordinates) === JSON.stringify(coordinates) ? 'player two' : '' })
        }
        columnArray.push(rowArray)
    }

    return (
        <>
            {playerOneRemainingStatPoints > 0 ?
                <section>
                    <h2>Player 1</h2>
                    <p>{'Remaining stat points: ' + playerOneRemainingStatPoints}</p>
                    <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                        <p>{'Health: ' + playerOneStats.health}</p>
                        <button onClick={() => {setPlayerOneStats({health: playerOneStats.health + 1, range: playerOneStats.range, damage: playerOneStats.damage, move: playerOneStats.move}); setPlayerOneRemainingStatPoints(playerOneRemainingStatPoints - 1)}}>+</button>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                        <p>{'Damage: ' + playerOneStats.damage}</p>
                        <button onClick={() => {setPlayerOneStats({health: playerOneStats.health, range: playerOneStats.range, damage: playerOneStats.damage + 1, move: playerOneStats.move}); setPlayerOneRemainingStatPoints(playerOneRemainingStatPoints - 1)}}>+</button>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                        <p>{'Move: ' + playerOneStats.move}</p>
                        <button onClick={() => {setPlayerOneStats({health: playerOneStats.health, range: playerOneStats.range, damage: playerOneStats.damage, move: playerOneStats.move + 1}); setPlayerOneRemainingStatPoints(playerOneRemainingStatPoints - 1)}}>+</button>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                        <p>{'Range: ' + playerOneStats.range}</p>
                        <button onClick={() => {setPlayerOneStats({health: playerOneStats.health, range: playerOneStats.range + 1, damage: playerOneStats.damage, move: playerOneStats.move}); setPlayerOneRemainingStatPoints(playerOneRemainingStatPoints - 1)}}>+</button>
                    </div>
                </section> :
                playerTwoRemainingStatPoints > 0 ?
                    <section>
                        <h2>Player 2</h2>
                        <p>{'Remaining stat points: ' + playerTwoRemainingStatPoints}</p>
                        <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                            <p>{'Health: ' + playerTwoStats.health}</p>
                            <button onClick={() => {setPlayerTwoStats({health: playerTwoStats.health + 1, range: playerTwoStats.range, damage: playerTwoStats.damage, move: playerTwoStats.move}); setPlayerTwoRemainingStatPoints(playerTwoRemainingStatPoints - 1)}}>+</button>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                            <p>{'Damage: ' + playerTwoStats.damage}</p>
                            <button onClick={() => {setPlayerTwoStats({health: playerTwoStats.health, range: playerTwoStats.range, damage: playerTwoStats.damage + 1, move: playerTwoStats.move}); setPlayerTwoRemainingStatPoints(playerTwoRemainingStatPoints - 1)}}>+</button>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                            <p>{'Move: ' + playerTwoStats.move}</p>
                            <button onClick={() => {setPlayerTwoStats({health: playerTwoStats.health, range: playerTwoStats.range, damage: playerTwoStats.damage, move: playerTwoStats.move + 1}); setPlayerTwoRemainingStatPoints(playerTwoRemainingStatPoints - 1)}}>+</button>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                            <p>{'Range: ' + playerTwoStats.range}</p>
                            <button onClick={() => {setPlayerTwoStats({health: playerTwoStats.health, range: playerTwoStats.range + 1, damage: playerTwoStats.damage, move: playerTwoStats.move}); setPlayerTwoRemainingStatPoints(playerTwoRemainingStatPoints - 1)}}>+</button>
                        </div>
                    </section> :
                    playerOneStats.health > 0 && playerTwoStats.health > 0?
                    <section>
                        <h2>{playerOneActive ? "Player 1's turn" : "Player 2's Turn"}</h2>
                        <p>Player 2 starts on top</p>
                        {columnArray.map((i) =>
                            <div key={i[0].coordinates} style={{ display: 'flex', flexDirection: 'row', marginLeft: i[0].coordinates[0] % 2 === 0 ? '0px' : '26.5px' }}>
                                {i.map((j) => <Hex coordinates={j.coordinates} contains={j.contains} playerOneCoordinates={playerOneCoordinates} setPlayerOneCoordinates={setPlayerOneCoordinates} playerTwoCoordinates={playerTwoCoordinates} setPlayerTwoCoordinates={setPlayerTwoCoordinates} remainingMoves={remainingMoves} setRemainingMoves={setRemainingMoves} playerOneActive={playerOneActive} setPlayerOneActive={setPlayerOneActive} playerOneStats={playerOneStats} playerTwoStats={playerTwoStats} setPlayerOneStats={setPlayerOneStats} setPlayerTwoStats={setPlayerTwoStats} key={j.coordinates} />)}
                            </div>
                        )}
                        <p>Player one starts on bottom</p>
                    </section> :
                    <h2>{playerOneStats.health > 0? 'Player 1 wins!' : 'Player 2 wins!'}</h2>
            }
        </>
    )
}

export default Home
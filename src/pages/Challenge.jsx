import { useState, useEffect } from 'react'
import Auth from '../utils/auth'
import Hex from '../components/Hex'
import playerOne from '../assets/avatar.jpg'
import playerTwo from '../assets/avatar2.png'


const Challenge = () => {

    useEffect(() => {
        Auth.checkLoggedIn()
    }, [])

    const rows = parseInt(localStorage.getItem('rows'))
    const columns = parseInt(localStorage.getItem('columns'))
    const columnArray = []

    const [playerOneCoordinates, setPlayerOneCoordinates] = useState([parseInt(localStorage.getItem('rows')) - 1, Math.floor(parseInt(localStorage.getItem('columns')) / 2)])
    const [playerTwoCoordinates, setPlayerTwoCoordinates] = useState([0, Math.floor(parseInt(localStorage.getItem('columns')) / 2)])
    const [playerOneActive, setPlayerOneActive] = useState(1)
    const [remainingMoves, setRemainingMoves] = useState(parseInt(localStorage.getItem('actionPoints')))
    const [playerOneStats, setPlayerOneStats] = useState({ move: 1, range: 1, damage: 1, health: 1 })
    const [playerOneRemainingStatPoints, setPlayerOneRemainingStatPoints] = useState(parseInt(localStorage.getItem('statPoints')))
    const [playerTwoStats, setPlayerTwoStats] = useState({ move: 1, range: 1, damage: 1, health: 1 })
    const [playerTwoRemainingStatPoints, setPlayerTwoRemainingStatPoints] = useState(parseInt(localStorage.getItem('statPoints')))
    const [message, setMessage] = useState('')
    const [hover, setHover] = useState('Hovering over: ')
    const numOfPlayers = 2

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
                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                        <p>{'Health: ' + playerOneStats.health}</p>
                        <div>
                            <button onClick={() => { setPlayerOneStats({ health: playerOneStats.health + 1, range: playerOneStats.range, damage: playerOneStats.damage, move: playerOneStats.move }); setPlayerOneRemainingStatPoints(playerOneRemainingStatPoints - 1) }}>+</button>
                            <button onClick={() => { if (playerOneStats.health > 1) { setPlayerOneStats({ health: playerOneStats.health - 1, range: playerOneStats.range, damage: playerOneStats.damage, move: playerOneStats.move }); setPlayerOneRemainingStatPoints(playerOneRemainingStatPoints + 1) } }}>-</button>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                        <p>{'Damage: ' + playerOneStats.damage}</p>
                        <div>
                            <button onClick={() => { setPlayerOneStats({ health: playerOneStats.health, range: playerOneStats.range, damage: playerOneStats.damage + 1, move: playerOneStats.move }); setPlayerOneRemainingStatPoints(playerOneRemainingStatPoints - 1) }}>+</button>
                            <button onClick={() => { if (playerOneStats.damage > 1) { setPlayerOneStats({ health: playerOneStats.health, range: playerOneStats.range, damage: playerOneStats.damage - 1, move: playerOneStats.move }); setPlayerOneRemainingStatPoints(playerOneRemainingStatPoints + 1) } }}>-</button>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                        <p>{'Move: ' + playerOneStats.move}</p>
                        <div>
                            <button onClick={() => { setPlayerOneStats({ health: playerOneStats.health, range: playerOneStats.range, damage: playerOneStats.damage, move: playerOneStats.move + 1 }); setPlayerOneRemainingStatPoints(playerOneRemainingStatPoints - 1) }}>+</button>
                            <button onClick={() => { if (playerOneStats.move > 1) { setPlayerOneStats({ health: playerOneStats.health, range: playerOneStats.range, damage: playerOneStats.damage, move: playerOneStats.move - 1}); setPlayerOneRemainingStatPoints(playerOneRemainingStatPoints + 1) } }}>-</button>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                        <p>{'Range: ' + playerOneStats.range}</p>
                        <div>
                            <button onClick={() => { setPlayerOneStats({ health: playerOneStats.health, range: playerOneStats.range + 1, damage: playerOneStats.damage, move: playerOneStats.move }); setPlayerOneRemainingStatPoints(playerOneRemainingStatPoints - 1) }}>+</button>
                            <button onClick={() => { if (playerOneStats.range > 1) { setPlayerOneStats({ health: playerOneStats.health, range: playerOneStats.range - 1, damage: playerOneStats.damage, move: playerOneStats.move }); setPlayerOneRemainingStatPoints(playerOneRemainingStatPoints + 1) } }}>-</button>
                        </div>
                    </div>
                    <img src={playerOne} style={{ width: '240px', height: 'auto' }}></img>
                </section> :
                playerTwoRemainingStatPoints > 0 ?
                    <section>
                        <h2>Player 2</h2>
                        <p>{'Remaining stat points: ' + playerTwoRemainingStatPoints}</p>
                        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                            <p>{'Health: ' + playerTwoStats.health}</p>
                            <div>
                                <button onClick={() => { setPlayerTwoStats({ health: playerTwoStats.health + 1, range: playerTwoStats.range, damage: playerTwoStats.damage, move: playerTwoStats.move }); setPlayerTwoRemainingStatPoints(playerTwoRemainingStatPoints - 1) }}>+</button>
                                <button onClick={() => { if (playerTwoStats.health > 1) { setPlayerTwoStats({ health: playerTwoStats.health - 1, range: playerTwoStats.range, damage: playerTwoStats.damage, move: playerTwoStats.move }); setPlayerTwoRemainingStatPoints(playerTwoRemainingStatPoints + 1) } }}>-</button>
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                            <p>{'Damage: ' + playerTwoStats.damage}</p>
                            <div>
                                <button onClick={() => { setPlayerTwoStats({ health: playerTwoStats.health, range: playerTwoStats.range, damage: playerTwoStats.damage + 1, move: playerTwoStats.move }); setPlayerTwoRemainingStatPoints(playerTwoRemainingStatPoints - 1) }}>+</button>
                                <button onClick={() => { if (playerTwoStats.damage > 1) { setPlayerTwoStats({ health: playerTwoStats.health, range: playerTwoStats.range, damage: playerTwoStats.damage - 1, move: playerTwoStats.move }); setPlayerTwoRemainingStatPoints(playerTwoRemainingStatPoints + 1) } }}>-</button>
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                            <p>{'Move: ' + playerTwoStats.move}</p>
                            <div>
                                <button onClick={() => { setPlayerTwoStats({ health: playerTwoStats.health, range: playerTwoStats.range, damage: playerTwoStats.damage, move: playerTwoStats.move + 1 }); setPlayerTwoRemainingStatPoints(playerTwoRemainingStatPoints - 1) }}>+</button>
                                <button onClick={() => { if (playerTwoStats.move > 1) { setPlayerTwoStats({ health: playerTwoStats.health, range: playerTwoStats.range, damage: playerTwoStats.damage, move: playerTwoStats.move - 1 }); setPlayerTwoRemainingStatPoints(playerTwoRemainingStatPoints + 1) } }}>-</button>
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                            <p>{'Range: ' + playerTwoStats.range}</p>
                            <div>
                                <button onClick={() => { setPlayerTwoStats({ health: playerTwoStats.health, range: playerTwoStats.range + 1, damage: playerTwoStats.damage, move: playerTwoStats.move }); setPlayerTwoRemainingStatPoints(playerTwoRemainingStatPoints - 1) }}>+</button>
                                <button onClick={() => { if (playerTwoStats.range > 1) { setPlayerTwoStats({ health: playerTwoStats.health, range: playerTwoStats.range - 1, damage: playerTwoStats.damage, move: playerTwoStats.move }); setPlayerTwoRemainingStatPoints(playerTwoRemainingStatPoints + 1) } }}>-</button>
                            </div>
                        </div>
                        <img src={playerTwo} style={{ width: '240px', height: 'auto' }}></img>
                    </section> :
                    playerOneStats.health > 0 && playerTwoStats.health > 0 ?
                        <section>
                            <h2>{playerOneActive === 1 ? "Player 1's turn" : "Player 2's turn"}</h2>
                            <p>{hover}</p>
                            {columnArray.map((i) =>
                                <div key={i[0].coordinates} style={{ display: 'flex', flexDirection: 'row', marginLeft: i[0].coordinates[0] % 2 === 0 ? '0px' : '26.5px' }}>
                                    {i.map((j) => <Hex coordinates={j.coordinates} contains={j.contains} numOfPlayers={numOfPlayers} setMessage={setMessage} setHover={setHover} playerOneCoordinates={playerOneCoordinates} setPlayerOneCoordinates={setPlayerOneCoordinates} playerTwoCoordinates={playerTwoCoordinates} setPlayerTwoCoordinates={setPlayerTwoCoordinates} remainingMoves={remainingMoves} setRemainingMoves={setRemainingMoves} playerOneActive={playerOneActive} setPlayerOneActive={setPlayerOneActive} playerOneStats={playerOneStats} playerTwoStats={playerTwoStats} setPlayerOneStats={setPlayerOneStats} setPlayerTwoStats={setPlayerTwoStats} key={j.coordinates} />)}
                                </div>
                            )}
                            <p>{message}</p>
                        </section> :
                        <section>
                            <h2>{playerOneStats.health > 0 ? 'Player 1 wins!' : 'Player 2 wins!'}</h2>
                            <button onClick={() => { setPlayerOneCoordinates([parseInt(localStorage.getItem('rows')) - 1, Math.floor(parseInt(localStorage.getItem('columns')) / 2)]); setPlayerTwoCoordinates([0, Math.floor(parseInt(localStorage.getItem('columns')) / 2)]); setPlayerOneActive(1); setRemainingMoves(parseInt(localStorage.getItem('actionPoints'))); setPlayerOneStats({ move: 1, range: 1, damage: 1, health: 1 }); setPlayerOneRemainingStatPoints(parseInt(localStorage.getItem('statPoints'))); setPlayerTwoStats({ move: 1, range: 1, damage: 1, health: 1 }); setPlayerTwoRemainingStatPoints(parseInt(localStorage.getItem('statPoints'))); setMessage(''); setHover('Hovering over: ') }}>Play Again</button>
                        </section>
            }
        </>
    )
}

export default Challenge
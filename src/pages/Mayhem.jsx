import { useState, useEffect } from 'react'
import Auth from '../utils/auth'
import Hex from '../components/Hex'
import playerOne from '../assets/avatar.jpg'
import playerTwo from '../assets/avatar2.png'
import playerThree from '../assets/avatar3.png'
import playerFour from '../assets/avatar4.jpg'


const Mayhem = () => {

    useEffect(() => {
        Auth.checkLoggedIn()
    }, [])

    const rows = parseInt(localStorage.getItem('rows'))
    const columns = parseInt(localStorage.getItem('columns'))
    const columnArray = []

    const [playerOneCoordinates, setPlayerOneCoordinates] = useState([parseInt(localStorage.getItem('rows')) - 1, 0])
    const [playerTwoCoordinates, setPlayerTwoCoordinates] = useState([0, 0])
    const [playerThreeCoordinates, setPlayerThreeCoordinates] = useState([0, parseInt(localStorage.getItem('columns')) - 1])
    const [playerFourCoordinates, setPlayerFourCoordinates] = useState([parseInt(localStorage.getItem('rows')) - 1, parseInt(localStorage.getItem('columns')) - 1])
    const [playerOneActive, setPlayerOneActive] = useState(1)
    const [remainingMoves, setRemainingMoves] = useState(parseInt(localStorage.getItem('actionPoints')))
    const [playerOneStats, setPlayerOneStats] = useState({ move: 1, range: 1, damage: 1, health: 1 })
    const [playerOneRemainingStatPoints, setPlayerOneRemainingStatPoints] = useState(parseInt(localStorage.getItem('statPoints')))
    const [playerTwoStats, setPlayerTwoStats] = useState({ move: 1, range: 1, damage: 1, health: 1 })
    const [playerTwoRemainingStatPoints, setPlayerTwoRemainingStatPoints] = useState(parseInt(localStorage.getItem('statPoints')))
    const [playerThreeStats, setPlayerThreeStats] = useState({ move: 1, range: 1, damage: 1, health: 1 })
    const [playerThreeRemainingStatPoints, setPlayerThreeRemainingStatPoints] = useState(parseInt(localStorage.getItem('statPoints')))
    const [playerFourStats, setPlayerFourStats] = useState({ move: 1, range: 1, damage: 1, health: 1 })
    const [playerFourRemainingStatPoints, setPlayerFourRemainingStatPoints] = useState(parseInt(localStorage.getItem('statPoints')))
    const [message, setMessage] = useState('')
    const [hover, setHover] = useState('Hovering over: ')
    const numOfPlayers = 4

    for (let i = 0; i < rows; i++) {
        const rowArray = []
        for (let j = 0; j < columns; j++) {
            const coordinates = [i, j]
            rowArray.push({ coordinates, contains: JSON.stringify(playerOneCoordinates) === JSON.stringify(coordinates) ? 'player one' : JSON.stringify(playerTwoCoordinates) === JSON.stringify(coordinates) ? 'player two' : JSON.stringify(playerThreeCoordinates) === JSON.stringify(coordinates) ? 'player three' : JSON.stringify(playerFourCoordinates) === JSON.stringify(coordinates) ? 'player four' : '' })
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
                            <button onClick={() => { if (playerOneStats.move > 1) { setPlayerOneStats({ health: playerOneStats.health, range: playerOneStats.range, damage: playerOneStats.damage, move: playerOneStats.move - 1 }); setPlayerOneRemainingStatPoints(playerOneRemainingStatPoints + 1) } }}>-</button>
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
                    playerThreeRemainingStatPoints > 0 ?
                        <section>
                            <h2>Player 3</h2>
                            <p>{'Remaining stat points: ' + playerThreeRemainingStatPoints}</p>
                            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                <p>{'Health: ' + playerThreeStats.health}</p>
                                <div>
                                    <button onClick={() => { setPlayerThreeStats({ health: playerThreeStats.health + 1, range: playerThreeStats.range, damage: playerThreeStats.damage, move: playerThreeStats.move }); setPlayerThreeRemainingStatPoints(playerThreeRemainingStatPoints - 1) }}>+</button>
                                    <button onClick={() => { if (playerThreeStats.health > 1) { setPlayerThreeStats({ health: playerThreeStats.health - 1, range: playerThreeStats.range, damage: playerThreeStats.damage, move: playerThreeStats.move }); setPlayerThreeRemainingStatPoints(playerThreeRemainingStatPoints + 1) } }}>-</button>
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                <p>{'Damage: ' + playerThreeStats.damage}</p>
                                <div>
                                    <button onClick={() => { setPlayerThreeStats({ health: playerThreeStats.health, range: playerThreeStats.range, damage: playerThreeStats.damage + 1, move: playerThreeStats.move }); setPlayerThreeRemainingStatPoints(playerThreeRemainingStatPoints - 1) }}>+</button>
                                    <button onClick={() => { if (playerThreeStats.damage > 1) { setPlayerThreeStats({ health: playerThreeStats.health, range: playerThreeStats.range, damage: playerThreeStats.damage - 1, move: playerThreeStats.move }); setPlayerThreeRemainingStatPoints(playerThreeRemainingStatPoints + 1) } }}>-</button>
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                <p>{'Move: ' + playerThreeStats.move}</p>
                                <div>
                                    <button onClick={() => { setPlayerThreeStats({ health: playerThreeStats.health, range: playerThreeStats.range, damage: playerThreeStats.damage, move: playerThreeStats.move + 1 }); setPlayerThreeRemainingStatPoints(playerThreeRemainingStatPoints - 1) }}>+</button>
                                    <button onClick={() => { if (playerThreeStats.move > 1) { setPlayerThreeStats({ health: playerThreeStats.health, range: playerThreeStats.range, damage: playerThreeStats.damage, move: playerThreeStats.move - 1 }); setPlayerThreeRemainingStatPoints(playerThreeRemainingStatPoints + 1) } }}>-</button>
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                <p>{'Range: ' + playerThreeStats.range}</p>
                                <div>
                                    <button onClick={() => { setPlayerThreeStats({ health: playerThreeStats.health, range: playerThreeStats.range + 1, damage: playerThreeStats.damage, move: playerThreeStats.move }); setPlayerThreeRemainingStatPoints(playerThreeRemainingStatPoints - 1) }}>+</button>
                                    <button onClick={() => { if (playerThreeStats.range > 1) { setPlayerThreeStats({ health: playerThreeStats.health, range: playerThreeStats.range - 1, damage: playerThreeStats.damage, move: playerThreeStats.move }); setPlayerThreeRemainingStatPoints(playerThreeRemainingStatPoints + 1) } }}>-</button>
                                </div>
                            </div>
                            <img src={playerThree} style={{ width: '240px', height: 'auto' }}></img>
                        </section> :
                        playerFourRemainingStatPoints > 0 ?
                            <section>
                                <h2>Player 4</h2>
                                <p>{'Remaining stat points: ' + playerFourRemainingStatPoints}</p>
                                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                    <p>{'Health: ' + playerFourStats.health}</p>
                                    <div>
                                        <button onClick={() => { setPlayerFourStats({ health: playerFourStats.health + 1, range: playerFourStats.range, damage: playerFourStats.damage, move: playerFourStats.move }); setPlayerFourRemainingStatPoints(playerFourRemainingStatPoints - 1) }}>+</button>
                                        <button onClick={() => { if (playerFourStats.health > 1) { setPlayerFourStats({ health: playerFourStats.health - 1, range: playerFourStats.range, damage: playerFourStats.damage, move: playerFourStats.move }); setPlayerFourRemainingStatPoints(playerFourRemainingStatPoints + 1) } }}>-</button>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                    <p>{'Damage: ' + playerFourStats.damage}</p>
                                    <div>
                                        <button onClick={() => { setPlayerFourStats({ health: playerFourStats.health, range: playerFourStats.range, damage: playerFourStats.damage + 1, move: playerFourStats.move }); setPlayerFourRemainingStatPoints(playerFourRemainingStatPoints - 1) }}>+</button>
                                        <button onClick={() => { if (playerFourStats.damage > 1) { setPlayerFourStats({ health: playerFourStats.health, range: playerFourStats.range, damage: playerFourStats.damage - 1, move: playerFourStats.move }); setPlayerFourRemainingStatPoints(playerFourRemainingStatPoints + 1) } }}>-</button>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                    <p>{'Move: ' + playerFourStats.move}</p>
                                    <div>
                                        <button onClick={() => { setPlayerFourStats({ health: playerFourStats.health, range: playerFourStats.range, damage: playerFourStats.damage, move: playerFourStats.move + 1 }); setPlayerFourRemainingStatPoints(playerFourRemainingStatPoints - 1) }}>+</button>
                                        <button onClick={() => { if (playerFourStats.move > 1) { setPlayerFourStats({ health: playerFourStats.health, range: playerFourStats.range, damage: playerFourStats.damage, move: playerFourStats.move - 1 }); setPlayerFourRemainingStatPoints(playerFourRemainingStatPoints + 1) } }}>-</button>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                    <p>{'Range: ' + playerFourStats.range}</p>
                                    <div>
                                        <button onClick={() => { setPlayerFourStats({ health: playerFourStats.health, range: playerFourStats.range + 1, damage: playerFourStats.damage, move: playerFourStats.move }); setPlayerFourRemainingStatPoints(playerFourRemainingStatPoints - 1) }}>+</button>
                                        <button onClick={() => { if (playerFourStats.range > 1) { setPlayerFourStats({ health: playerFourStats.health, range: playerFourStats.range - 1, damage: playerFourStats.damage, move: playerFourStats.move }); setPlayerFourRemainingStatPoints(playerFourRemainingStatPoints + 1) } }}>-</button>
                                    </div>
                                </div>
                                <img src={playerFour} style={{ width: '240px', height: 'auto' }}></img>
                            </section> :
                            (playerOneStats.health > 0 && playerTwoStats.health > 0) || (playerOneStats.health > 0 && playerThreeStats.health > 0) || (playerOneStats.health > 0 && playerFourStats.health > 0) || (playerTwoStats.health > 0 && playerThreeStats.health > 0) || (playerTwoStats.health > 0 && playerFourStats.health > 0) || (playerThreeStats.health > 0 && playerFourStats.health > 0) ?
                                <section>
                                    <h2>{playerOneActive === 1 ? "Player 1's turn" : playerOneActive === 2 ? "Player 2's turn" : playerOneActive === 3 ? "Player 3's turn" : "Player 4's turn"}</h2>
                                    <p>{hover}</p>
                                    {columnArray.map((i) =>
                                        <div key={i[0].coordinates} style={{ display: 'flex', flexDirection: 'row', marginLeft: i[0].coordinates[0] % 2 === 0 ? '0px' : '26.5px' }}>
                                            {i.map((j) => <Hex coordinates={j.coordinates} contains={j.contains} numOfPlayers={numOfPlayers} setMessage={setMessage} setHover={setHover} playerOneCoordinates={playerOneCoordinates} setPlayerOneCoordinates={setPlayerOneCoordinates} playerTwoCoordinates={playerTwoCoordinates} setPlayerTwoCoordinates={setPlayerTwoCoordinates} playerThreeCoordinates={playerThreeCoordinates} setPlayerThreeCoordinates={setPlayerThreeCoordinates} playerFourCoordinates={playerFourCoordinates} setPlayerFourCoordinates={setPlayerFourCoordinates} remainingMoves={remainingMoves} setRemainingMoves={setRemainingMoves} playerOneActive={playerOneActive} setPlayerOneActive={setPlayerOneActive} playerOneStats={playerOneStats} playerTwoStats={playerTwoStats} playerThreeStats={playerThreeStats} playerFourStats={playerFourStats} setPlayerOneStats={setPlayerOneStats} setPlayerTwoStats={setPlayerTwoStats} setPlayerThreeStats={setPlayerThreeStats} setPlayerFourStats={setPlayerFourStats} key={j.coordinates} />)}
                                        </div>
                                    )}
                                    <p>{message}</p>
                                </section> :
                                <section>
                                    <h2>{playerOneStats.health > 0 ? 'Player 1 wins!' : playerTwoStats.health > 0 ? 'Player 2 wins!' : playerThreeStats.health > 0 ? 'Player 3 wins!' : 'Player 4 wins!'}</h2>
                                    <button onClick={() => { setPlayerOneCoordinates([parseInt(localStorage.getItem('rows')) - 1, 0]); setPlayerTwoCoordinates([0, 0]); setPlayerThreeCoordinates([0, parseInt(localStorage.getItem('columns')) - 1]); setPlayerFourCoordinates([parseInt(localStorage.getItem('rows')) - 1, parseInt(localStorage.getItem('columns')) - 1]); setPlayerOneActive(1); setRemainingMoves(parseInt(localStorage.getItem('actionPoints'))); setPlayerOneStats({ move: 1, range: 1, damage: 1, health: 1 }); setPlayerOneRemainingStatPoints(parseInt(localStorage.getItem('statPoints'))); setPlayerTwoStats({ move: 1, range: 1, damage: 1, health: 1 }); setPlayerTwoRemainingStatPoints(parseInt(localStorage.getItem('statPoints'))); setPlayerThreeStats({ move: 1, range: 1, damage: 1, health: 1 }); setPlayerThreeRemainingStatPoints(parseInt(localStorage.getItem('statPoints'))); setPlayerFourStats({ move: 1, range: 1, damage: 1, health: 1 }); setPlayerFourRemainingStatPoints(parseInt(localStorage.getItem('statPoints'))); setMessage(''); setHover('Hovering over: ') }}>Play Again</button>
                                </section>
            }
        </>
    )
}

export default Mayhem
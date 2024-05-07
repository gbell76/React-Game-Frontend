import { useState, useEffect } from 'react'
import Auth from '../utils/auth'
import Hex from '../components/Hex'


const Mayhem = () => {

    useEffect(() => {
        Auth.checkLoggedIn()
    }, [])

    // const rows = 7
    // const columns = 5
    // const columnArray = []

    // const [playerOneCoordinates, setPlayerOneCoordinates] = useState([])
    // const [playerTwoCoordinates, setPlayerTwoCoordinates] = useState([])
    // const [playerThreeCoordinates, setPlayerThreeCoordinates] = useState([])
    // const [playerFourCoordinates, setPlayerFourCoordinates] = useState([])
    // const [playerOneActive, setPlayerOneActive] = useState(1)
    // const [numOfPlayers, setNumOfPlayers] = useState(4)
    // const [remainingMoves, setRemainingMoves] = useState(2)
    // const [playerOneStats, setPlayerOneStats] = useState({ move: 1, range: 1, damage: 1, health: 1 })
    // const [playerOneRemainingStatPoints, setPlayerOneRemainingStatPoints] = useState(5)
    // const [playerTwoStats, setPlayerTwoStats] = useState({ move: 1, range: 1, damage: 1, health: 1 })
    // const [playerTwoRemainingStatPoints, setPlayerTwoRemainingStatPoints] = useState(5)
    // const [playerThreeStats, setPlayerThreeStats] = useState({ move: 1, range: 1, damage: 1, health: 1 })
    // const [playerThreeRemainingStatPoints, setPlayerThreeRemainingStatPoints] = useState(5)
    // const [playerFourStats, setPlayerFourStats] = useState({ move: 1, range: 1, damage: 1, health: 1 })
    // const [playerFourRemainingStatPoints, setPlayerFourRemainingStatPoints] = useState(5)
    // const [message, setMessage] = useState('')

    // for (let i = 0; i < rows; i++) {
    //     const rowArray = []
    //     for (let j = 0; j < columns; j++) {
    //         const coordinates = [i, j]
    //         rowArray.push({ coordinates, contains: JSON.stringify(playerOneCoordinates) === JSON.stringify(coordinates) ? 'player one' : JSON.stringify(playerTwoCoordinates) === JSON.stringify(coordinates) ? 'player two' : JSON.stringify(playerThreeCoordinates) === JSON.stringify(coordinates) ? 'player three' : JSON.stringify(playerFourCoordinates) === JSON.stringify(coordinates) ? 'player four' : '' })
    //     }
    //     columnArray.push(rowArray)
    // }

    // return (
    //     <>
    //         {
    //             playerOneRemainingStatPoints > 0 ?
    //                 <section>
    //                     <h2>Player 1</h2>
    //                     <p>{'Remaining stat points: ' + playerOneRemainingStatPoints}</p>
    //                     <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
    //                         <p>{'Health: ' + playerOneStats.health}</p>
    //                         <button onClick={() => { setPlayerOneStats({ health: playerOneStats.health + 1, range: playerOneStats.range, damage: playerOneStats.damage, move: playerOneStats.move }); setPlayerOneRemainingStatPoints(playerOneRemainingStatPoints - 1) }}>+</button>
    //                     </div>
    //                     <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
    //                         <p>{'Damage: ' + playerOneStats.damage}</p>
    //                         <button onClick={() => { setPlayerOneStats({ health: playerOneStats.health, range: playerOneStats.range, damage: playerOneStats.damage + 1, move: playerOneStats.move }); setPlayerOneRemainingStatPoints(playerOneRemainingStatPoints - 1) }}>+</button>
    //                     </div>
    //                     <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
    //                         <p>{'Move: ' + playerOneStats.move}</p>
    //                         <button onClick={() => { setPlayerOneStats({ health: playerOneStats.health, range: playerOneStats.range, damage: playerOneStats.damage, move: playerOneStats.move + 1 }); setPlayerOneRemainingStatPoints(playerOneRemainingStatPoints - 1) }}>+</button>
    //                     </div>
    //                     <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
    //                         <p>{'Range: ' + playerOneStats.range}</p>
    //                         <button onClick={() => { setPlayerOneStats({ health: playerOneStats.health, range: playerOneStats.range + 1, damage: playerOneStats.damage, move: playerOneStats.move }); setPlayerOneRemainingStatPoints(playerOneRemainingStatPoints - 1) }}>+</button>
    //                     </div>
    //                 </section> :
    //                 playerTwoRemainingStatPoints > 0 ?
    //                     <section>
    //                         <h2>Player 2</h2>
    //                         <p>{'Remaining stat points: ' + playerTwoRemainingStatPoints}</p>
    //                         <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
    //                             <p>{'Health: ' + playerTwoStats.health}</p>
    //                             <button onClick={() => { setPlayerTwoStats({ health: playerTwoStats.health + 1, range: playerTwoStats.range, damage: playerTwoStats.damage, move: playerTwoStats.move }); setPlayerTwoRemainingStatPoints(playerTwoRemainingStatPoints - 1) }}>+</button>
    //                         </div>
    //                         <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
    //                             <p>{'Damage: ' + playerTwoStats.damage}</p>
    //                             <button onClick={() => { setPlayerTwoStats({ health: playerTwoStats.health, range: playerTwoStats.range, damage: playerTwoStats.damage + 1, move: playerTwoStats.move }); setPlayerTwoRemainingStatPoints(playerTwoRemainingStatPoints - 1) }}>+</button>
    //                         </div>
    //                         <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
    //                             <p>{'Move: ' + playerTwoStats.move}</p>
    //                             <button onClick={() => { setPlayerTwoStats({ health: playerTwoStats.health, range: playerTwoStats.range, damage: playerTwoStats.damage, move: playerTwoStats.move + 1 }); setPlayerTwoRemainingStatPoints(playerTwoRemainingStatPoints - 1) }}>+</button>
    //                         </div>
    //                         <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
    //                             <p>{'Range: ' + playerTwoStats.range}</p>
    //                             <button onClick={() => { setPlayerTwoStats({ health: playerTwoStats.health, range: playerTwoStats.range + 1, damage: playerTwoStats.damage, move: playerTwoStats.move }); setPlayerTwoRemainingStatPoints(playerTwoRemainingStatPoints - 1) }}>+</button>
    //                         </div>
    //                     </section> :
    //                     numOfPlayers > 2 && playerThreeRemainingStatPoints > 0 ?
    //                         <section>
    //                             <h2>Player 3</h2>
    //                             <p>{'Remaining stat points: ' + playerThreeRemainingStatPoints}</p>
    //                             <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
    //                                 <p>{'Health: ' + playerThreeStats.health}</p>
    //                                 <button onClick={() => { setPlayerThreeStats({ health: playerThreeStats.health + 1, range: playerThreeStats.range, damage: playerThreeStats.damage, move: playerThreeStats.move }); setPlayerThreeRemainingStatPoints(playerThreeRemainingStatPoints - 1) }}>+</button>
    //                             </div>
    //                             <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
    //                                 <p>{'Damage: ' + playerThreeStats.damage}</p>
    //                                 <button onClick={() => { setPlayerThreeStats({ health: playerThreeStats.health, range: playerThreeStats.range, damage: playerThreeStats.damage + 1, move: playerThreeStats.move }); setPlayerThreeRemainingStatPoints(playerThreeRemainingStatPoints - 1) }}>+</button>
    //                             </div>
    //                             <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
    //                                 <p>{'Move: ' + playerThreeStats.move}</p>
    //                                 <button onClick={() => { setPlayerThreeStats({ health: playerThreeStats.health, range: playerThreeStats.range, damage: playerThreeStats.damage, move: playerThreeStats.move + 1 }); setPlayerThreeRemainingStatPoints(playerThreeRemainingStatPoints - 1) }}>+</button>
    //                             </div>
    //                             <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
    //                                 <p>{'Range: ' + playerThreeStats.range}</p>
    //                                 <button onClick={() => { setPlayerThreeStats({ health: playerThreeStats.health, range: playerThreeStats.range + 1, damage: playerThreeStats.damage, move: playerThreeStats.move }); setPlayerThreeRemainingStatPoints(playerThreeRemainingStatPoints - 1) }}>+</button>
    //                             </div>
    //                         </section> :
    //                         numOfPlayers === 4 && playerFourRemainingStatPoints > 0 ?
    //                             <section>
    //                                 <h2>Player 4</h2>
    //                                 <p>{'Remaining stat points: ' + playerFourRemainingStatPoints}</p>
    //                                 <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
    //                                     <p>{'Health: ' + playerFourStats.health}</p>
    //                                     <button onClick={() => { setPlayerFourStats({ health: playerFourStats.health + 1, range: playerFourStats.range, damage: playerFourStats.damage, move: playerFourStats.move }); setPlayerFourRemainingStatPoints(playerFourRemainingStatPoints - 1) }}>+</button>
    //                                 </div>
    //                                 <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
    //                                     <p>{'Damage: ' + playerFourStats.damage}</p>
    //                                     <button onClick={() => { setPlayerFourStats({ health: playerFourStats.health, range: playerFourStats.range, damage: playerFourStats.damage + 1, move: playerFourStats.move }); setPlayerFourRemainingStatPoints(playerFourRemainingStatPoints - 1) }}>+</button>
    //                                 </div>
    //                                 <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
    //                                     <p>{'Move: ' + playerFourStats.move}</p>
    //                                     <button onClick={() => { setPlayerFourStats({ health: playerFourStats.health, range: playerFourStats.range, damage: playerFourStats.damage, move: playerFourStats.move + 1 }); setPlayerFourRemainingStatPoints(playerFourRemainingStatPoints - 1) }}>+</button>
    //                                 </div>
    //                                 <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
    //                                     <p>{'Range: ' + playerFourStats.range}</p>
    //                                     <button onClick={() => { setPlayerFourStats({ health: playerFourStats.health, range: playerFourStats.range + 1, damage: playerFourStats.damage, move: playerFourStats.move }); setPlayerFourRemainingStatPoints(playerFourRemainingStatPoints - 1) }}>+</button>
    //                                 </div>
    //                             </section> :
    //                             <section>
    //                                 <h2>{playerOneActive === 1 ? "Player 1's turn" : playerOneActive === 2 ? "Player 2's turn" : playerOneActive === 3 ? "Player 3's turn" : "Player 4's turn"}</h2>
    //                                 {columnArray.map((i) =>
    //                                     <div key={i[0].coordinates} style={{ display: 'flex', flexDirection: 'row', marginLeft: i[0].coordinates[0] % 2 === 0 ? '0px' : '26.5px' }}>
    //                                         {i.map((j) => <Hex coordinates={j.coordinates} contains={j.contains} numOfPlayer={numOfPlayers} playerOneCoordinates={playerOneCoordinates} setPlayerOneCoordinates={setPlayerOneCoordinates} playerTwoCoordinates={playerTwoCoordinates} setPlayerTwoCoordinates={setPlayerTwoCoordinates} playerThreeCoordinates={playerThreeCoordinates} setPlayerThreeCoordinates={setPlayerThreeCoordinates} playerFourCoordinates={playerFourCoordinates} setPlayerFourCoordinates={setPlayerFourCoordinates} remainingMoves={remainingMoves} setRemainingMoves={setRemainingMoves} playerOneActive={playerOneActive} setPlayerOneActive={setPlayerOneActive} playerOneStats={playerOneStats} playerTwoStats={playerTwoStats} playerThreeStats={playerThreeStats} playerFourStats={playerFourStats} setPlayerOneStats={setPlayerOneStats} setPlayerTwoStats={setPlayerTwoStats} setPlayerThreeStats={setPlayerThreeStats} setPlayerFourStats={setPlayerFourStats} setMessage={setMessage} key={j.coordinates} />)}
    //                                     </div>
    //                                 )}
    //                                 <p>{message}</p>
    //                             </section>

    //         }
    //     </>
    // )
    return (
        <>
            <p>Not yet implimented</p>
        </>
    )
}

export default Mayhem
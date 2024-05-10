import playerOne from '../assets/avatar.jpg'
import playerTwo from '../assets/avatar2.png'
import playerThree from '../assets/avatar3.png'
import playerFour from '../assets/avatar4.jpg'
import { useEffect } from 'react'

const Hex = (props) => {

    let image = ''

    if (props.contains === 'player one') {
        image = playerOne
    } else if (props.contains === 'player two') {
        image = playerTwo
    } else if (props.contains === 'player three') {
        image = playerThree
    } else if (props.contains === 'player four') {
        image = playerFour
    }

    useEffect(() => {
        if (props.playerOneActive === 1 && props.playerOneStats.health <= 0) {
            props.setPlayerOneActive((props.playerOneActive % props.numOfPlayers) + 1)
        }
        if (props.playerOneActive === 2 && props.playerTwoStats.health <= 0) {
            props.setPlayerOneActive((props.playerOneActive % props.numOfPlayers) + 1)
        }
        if (props.playerOneActive === 3 && props.playerThreeStats.health <= 0) {
            props.setPlayerOneActive((props.playerOneActive % props.numOfPlayers) + 1)
        }
        if (props.playerOneActive === 4 && props.playerFourStats.health <= 0) {
            props.setPlayerOneActive((props.playerOneActive % props.numOfPlayers) + 1)
        }
    }, [props.playerOneActive])

    useEffect(() => {
        if (props.remainingMoves === 0) {
            props.setPlayerOneActive((props.playerOneActive % props.numOfPlayers) + 1)
            props.setRemainingMoves(parseInt(localStorage.getItem('actionPoints')))
        }
    }, [props.remainingMoves])

    useEffect(() => {
        if (props.playerOneStats.health < 1) {
            props.setPlayerOneCoordinates([-1, -1])
            props.setMessage("Player 1's robot has been destroyed!")
        }
    }, [props.playerOneStats])

    useEffect(() => {
        if (props.playerTwoStats.health < 1) {
            props.setPlayerTwoCoordinates([-1, -1])
            props.setMessage("Player 2's robot has been destroyed!")
        }
    }, [props.playerTwoStats])

    useEffect(() => {
        if (props.numOfPlayers > 2) {
            if (props.playerThreeStats.health < 1) {
                props.setPlayerThreeCoordinates([-1, -1])
                props.setMessage("Player 3's robot has been destroyed!")
            }
        }
    }, [props.playerThreeStats])

    useEffect(() => {
        if (props.numOfPlayers > 3) {
            if (props.playerFourStats.health < 1) {
                props.setPlayerFourCoordinates([-1, -1])
                props.setMessage("Player 4's robot has been destroyed!")
            }
        }
    }, [props.playerFourStats])

    const log = () => {
        if (props.playerOneActive === 1 && props.playerOneStats.health > 0) {
            if (props.remainingMoves > 0) {
                if (props.contains === '') {
                    let distance = Math.abs(props.coordinates[1] - props.playerOneCoordinates[1]) + Math.floor(Math.abs(props.coordinates[0] - props.playerOneCoordinates[0]) / 2)
                    if (props.playerOneCoordinates[0] % 2 === 0 && props.coordinates[0] % 2 === 1 && props.coordinates[1] > props.playerOneCoordinates[1]) {
                        distance++
                    } else if (props.playerOneCoordinates[0] % 2 === 1 && props.coordinates[0] % 2 === 0 && props.coordinates[1] < props.playerOneCoordinates[1]) {
                        distance++
                    }
                    if (Math.abs(props.coordinates[0] - props.playerOneCoordinates[0]) > props.playerOneStats.move) {
                        distance = Math.abs(props.coordinates[0] - props.playerOneCoordinates[0])
                    }
                    if (distance <= props.playerOneStats.move) {
                        props.setPlayerOneCoordinates(props.coordinates)
                        props.setRemainingMoves(props.remainingMoves - 1)
                        props.setMessage('')
                    } else {
                        props.setMessage('Not enough movement')
                    }
                } else if (props.contains === 'player two') {
                    let distance = Math.abs(props.coordinates[1] - props.playerOneCoordinates[1]) + Math.floor(Math.abs(props.coordinates[0] - props.playerOneCoordinates[0]) / 2)
                    if (props.playerOneCoordinates[0] % 2 === 0 && props.coordinates[0] % 2 === 1 && props.coordinates[1] > props.playerOneCoordinates[1]) {
                        distance++
                    } else if (props.playerOneCoordinates[0] % 2 === 1 && props.coordinates[0] % 2 === 0 && props.coordinates[1] < props.playerOneCoordinates[1]) {
                        distance++
                    }
                    if (Math.abs(props.coordinates[0] - props.playerOneCoordinates[0]) > props.playerOneStats.range) {
                        distance = Math.abs(props.coordinates[0] - props.playerOneCoordinates[0])
                    }
                    if (distance <= props.playerOneStats.range) {
                        props.setMessage('Player 2 has been hit!')
                        props.setPlayerTwoStats({ health: props.playerTwoStats.health - props.playerOneStats.damage, range: props.playerTwoStats.range, damage: props.playerTwoStats.damage, move: props.playerTwoStats.move })
                        props.setRemainingMoves(props.remainingMoves - 1)
                    } else {
                        props.setMessage('Out of range')
                    }
                } else if (props.contains === 'player three') {
                    let distance = Math.abs(props.coordinates[1] - props.playerOneCoordinates[1]) + Math.floor(Math.abs(props.coordinates[0] - props.playerOneCoordinates[0]) / 2)
                    if (props.playerOneCoordinates[0] % 2 === 0 && props.coordinates[0] % 2 === 1 && props.coordinates[1] > props.playerOneCoordinates[1]) {
                        distance++
                    } else if (props.playerOneCoordinates[0] % 2 === 1 && props.coordinates[0] % 2 === 0 && props.coordinates[1] < props.playerOneCoordinates[1]) {
                        distance++
                    }
                    if (Math.abs(props.coordinates[0] - props.playerOneCoordinates[0]) > props.playerOneStats.range) {
                        distance = Math.abs(props.coordinates[0] - props.playerOneCoordinates[0])
                    }
                    if (distance <= props.playerOneStats.range) {
                        props.setMessage('Player 3 has been hit!')
                        props.setPlayerThreeStats({ health: props.playerThreeStats.health - props.playerOneStats.damage, range: props.playerThreeStats.range, damage: props.playerThreeStats.damage, move: props.playerThreeStats.move })
                        props.setRemainingMoves(props.remainingMoves - 1)
                    } else {
                        props.setMessage('Out of range')
                    }
                } else if (props.contains === 'player four') {
                    let distance = Math.abs(props.coordinates[1] - props.playerOneCoordinates[1]) + Math.floor(Math.abs(props.coordinates[0] - props.playerOneCoordinates[0]) / 2)
                    if (props.playerOneCoordinates[0] % 2 === 0 && props.coordinates[0] % 2 === 1 && props.coordinates[1] > props.playerOneCoordinates[1]) {
                        distance++
                    } else if (props.playerOneCoordinates[0] % 2 === 1 && props.coordinates[0] % 2 === 0 && props.coordinates[1] < props.playerOneCoordinates[1]) {
                        distance++
                    }
                    if (Math.abs(props.coordinates[0] - props.playerOneCoordinates[0]) > props.playerOneStats.range) {
                        distance = Math.abs(props.coordinates[0] - props.playerOneCoordinates[0])
                    }
                    if (distance <= props.playerOneStats.range) {
                        props.setMessage('Player 4 has been hit!')
                        props.setPlayerFourStats({ health: props.playerFourStats.health - props.playerOneStats.damage, range: props.playerFourStats.range, damage: props.playerFourStats.damage, move: props.playerFourStats.move })
                        props.setRemainingMoves(props.remainingMoves - 1)
                    } else {
                        props.setMessage('Out of range')
                    }
                }
            }
        } else if (props.playerOneActive === 2 && props.playerTwoStats.health > 0) {
            if (props.remainingMoves > 0) {
                if (props.contains === '') {
                    let distance = Math.abs(props.coordinates[1] - props.playerTwoCoordinates[1]) + Math.floor(Math.abs(props.coordinates[0] - props.playerTwoCoordinates[0]) / 2)
                    if (props.playerTwoCoordinates[0] % 2 === 0 && props.coordinates[0] % 2 === 1 && props.coordinates[1] > props.playerTwoCoordinates[1]) {
                        distance++
                    } else if (props.playerTwoCoordinates[0] % 2 === 1 && props.coordinates[0] % 2 === 0 && props.coordinates[1] < props.playerTwoCoordinates[1]) {
                        distance++
                    }
                    if (Math.abs(props.coordinates[0] - props.playerTwoCoordinates[0]) > props.playerTwoStats.move) {
                        distance = Math.abs(props.coordinates[0] - props.playerTwoCoordinates[0])
                    }
                    if (distance <= props.playerTwoStats.move) {
                        props.setPlayerTwoCoordinates(props.coordinates)
                        props.setRemainingMoves(props.remainingMoves - 1)
                        props.setMessage('')
                    } else {
                        props.setMessage('Not enough movement')
                    }
                } else if (props.contains === 'player one') {
                    let distance = Math.abs(props.coordinates[1] - props.playerTwoCoordinates[1]) + Math.floor(Math.abs(props.coordinates[0] - props.playerTwoCoordinates[0]) / 2)
                    if (props.playerTwoCoordinates[0] % 2 === 0 && props.coordinates[0] % 2 === 1 && props.coordinates[1] > props.playerTwoCoordinates[1]) {
                        distance++
                    } else if (props.playerTwoCoordinates[0] % 2 === 1 && props.coordinates[0] % 2 === 0 && props.coordinates[1] < props.playerTwoCoordinates[1]) {
                        distance++
                    }
                    if (Math.abs(props.coordinates[0] - props.playerTwoCoordinates[0]) > props.playerTwoStats.range) {
                        distance = Math.abs(props.coordinates[0] - props.playerTwoCoordinates[0])
                    }
                    if (distance <= props.playerTwoStats.range) {
                        props.setMessage('Player 1 has been hit!')
                        props.setPlayerOneStats({ health: props.playerOneStats.health - props.playerTwoStats.damage, range: props.playerOneStats.range, damage: props.playerOneStats.damage, move: props.playerOneStats.move })
                        props.setRemainingMoves(props.remainingMoves - 1)
                    } else {
                        props.setMessage('Out of range')
                    }
                } else if (props.contains === 'player three') {
                    let distance = Math.abs(props.coordinates[1] - props.playerTwoCoordinates[1]) + Math.floor(Math.abs(props.coordinates[0] - props.playerTwoCoordinates[0]) / 2)
                    if (props.playerTwoCoordinates[0] % 2 === 0 && props.coordinates[0] % 2 === 1 && props.coordinates[1] > props.playerTwoCoordinates[1]) {
                        distance++
                    } else if (props.playerTwoCoordinates[0] % 2 === 1 && props.coordinates[0] % 2 === 0 && props.coordinates[1] < props.playerTwoCoordinates[1]) {
                        distance++
                    }
                    if (Math.abs(props.coordinates[0] - props.playerTwoCoordinates[0]) > props.playerTwoStats.range) {
                        distance = Math.abs(props.coordinates[0] - props.playerTwoCoordinates[0])
                    }
                    if (distance <= props.playerTwoStats.range) {
                        props.setMessage('Player 3 has been hit!')
                        props.setPlayerThreeStats({ health: props.playerThreeStats.health - props.playerTwoStats.damage, range: props.playerThreeStats.range, damage: props.playerThreeStats.damage, move: props.playerThreeStats.move })
                        props.setRemainingMoves(props.remainingMoves - 1)
                    } else {
                        props.setMessage('Out of range')
                    }
                } else if (props.contains === 'player four') {
                    let distance = Math.abs(props.coordinates[1] - props.playerTwoCoordinates[1]) + Math.floor(Math.abs(props.coordinates[0] - props.playerTwoCoordinates[0]) / 2)
                    if (props.playerTwoCoordinates[0] % 2 === 0 && props.coordinates[0] % 2 === 1 && props.coordinates[1] > props.playerTwoCoordinates[1]) {
                        distance++
                    } else if (props.playerTwoCoordinates[0] % 2 === 1 && props.coordinates[0] % 2 === 0 && props.coordinates[1] < props.playerTwoCoordinates[1]) {
                        distance++
                    }
                    if (Math.abs(props.coordinates[0] - props.playerTwoCoordinates[0]) > props.playerTwoStats.range) {
                        distance = Math.abs(props.coordinates[0] - props.playerTwoCoordinates[0])
                    }
                    if (distance <= props.playerTwoStats.range) {
                        props.setMessage('Player 4 has been hit!')
                        props.setPlayerFourStats({ health: props.playerFourStats.health - props.playerTwoStats.damage, range: props.playerFourStats.range, damage: props.playerFourStats.damage, move: props.playerFourStats.move })
                        props.setRemainingMoves(props.remainingMoves - 1)
                    } else {
                        props.setMessage('Out of range')
                    }
                }
            }
        } else if (props.playerOneActive === 3 && props.playerThreeStats.health > 0) {
            if (props.remainingMoves > 0) {
                if (props.contains === '') {
                    let distance = Math.abs(props.coordinates[1] - props.playerThreeCoordinates[1]) + Math.floor(Math.abs(props.coordinates[0] - props.playerThreeCoordinates[0]) / 2)
                    if (props.playerThreeCoordinates[0] % 2 === 0 && props.coordinates[0] % 2 === 1 && props.coordinates[1] > props.playerThreeCoordinates[1]) {
                        distance++
                    } else if (props.playerThreeCoordinates[0] % 2 === 1 && props.coordinates[0] % 2 === 0 && props.coordinates[1] < props.playerThreeCoordinates[1]) {
                        distance++
                    }
                    if (Math.abs(props.coordinates[0] - props.playerThreeCoordinates[0]) > props.playerThreeStats.move) {
                        distance = Math.abs(props.coordinates[0] - props.playerThreeCoordinates[0])
                    }
                    if (distance <= props.playerThreeStats.move) {
                        props.setPlayerThreeCoordinates(props.coordinates)
                        props.setRemainingMoves(props.remainingMoves - 1)
                        props.setMessage('')
                    } else {
                        props.setMessage('Not enough movement')
                    }
                } else if (props.contains === 'player one') {
                    let distance = Math.abs(props.coordinates[1] - props.playerThreeCoordinates[1]) + Math.floor(Math.abs(props.coordinates[0] - props.playerThreeCoordinates[0]) / 2)
                    if (props.playerThreeCoordinates[0] % 2 === 0 && props.coordinates[0] % 2 === 1 && props.coordinates[1] > props.playerThreeCoordinates[1]) {
                        distance++
                    } else if (props.playerThreeCoordinates[0] % 2 === 1 && props.coordinates[0] % 2 === 0 && props.coordinates[1] < props.playerThreeCoordinates[1]) {
                        distance++
                    }
                    if (Math.abs(props.coordinates[0] - props.playerThreeCoordinates[0]) > props.playerThreeStats.range) {
                        distance = Math.abs(props.coordinates[0] - props.playerThreeCoordinates[0])
                    }
                    if (distance <= props.playerThreeStats.range) {
                        props.setMessage('Player 1 has been hit!')
                        props.setPlayerOneStats({ health: props.playerOneStats.health - props.playerThreeStats.damage, range: props.playerOneStats.range, damage: props.playerOneStats.damage, move: props.playerOneStats.move })
                        props.setRemainingMoves(props.remainingMoves - 1)
                    } else {
                        props.setMessage('Out of range')
                    }
                } else if (props.contains === 'player two') {
                    let distance = Math.abs(props.coordinates[1] - props.playerThreeCoordinates[1]) + Math.floor(Math.abs(props.coordinates[0] - props.playerThreeCoordinates[0]) / 2)
                    if (props.playerThreeCoordinates[0] % 2 === 0 && props.coordinates[0] % 2 === 1 && props.coordinates[1] > props.playerThreeCoordinates[1]) {
                        distance++
                    } else if (props.playerThreeCoordinates[0] % 2 === 1 && props.coordinates[0] % 2 === 0 && props.coordinates[1] < props.playerThreeCoordinates[1]) {
                        distance++
                    }
                    if (Math.abs(props.coordinates[0] - props.playerThreeCoordinates[0]) > props.playerThreeStats.range) {
                        distance = Math.abs(props.coordinates[0] - props.playerThreeCoordinates[0])
                    }
                    if (distance <= props.playerThreeStats.range) {
                        props.setMessage('Player 2 has been hit!')
                        props.setPlayerTwoStats({ health: props.playerTwoStats.health - props.playerThreeStats.damage, range: props.playerTwoStats.range, damage: props.playerTwoStats.damage, move: props.playerTwoStats.move })
                        props.setRemainingMoves(props.remainingMoves - 1)
                    } else {
                        props.setMessage('Out of range')
                    }
                } else if (props.contains === 'player four') {
                    let distance = Math.abs(props.coordinates[1] - props.playerThreeCoordinates[1]) + Math.floor(Math.abs(props.coordinates[0] - props.playerThreeCoordinates[0]) / 2)
                    if (props.playerThreeCoordinates[0] % 2 === 0 && props.coordinates[0] % 2 === 1 && props.coordinates[1] > props.playerThreeCoordinates[1]) {
                        distance++
                    } else if (props.playerThreeCoordinates[0] % 2 === 1 && props.coordinates[0] % 2 === 0 && props.coordinates[1] < props.playerThreeCoordinates[1]) {
                        distance++
                    }
                    if (Math.abs(props.coordinates[0] - props.playerThreeCoordinates[0]) > props.playerThreeStats.range) {
                        distance = Math.abs(props.coordinates[0] - props.playerThreeCoordinates[0])
                    }
                    if (distance <= props.playerThreeStats.range) {
                        props.setMessage('Player 4 has been hit!')
                        props.setPlayerFourStats({ health: props.playerFourStats.health - props.playerThreeStats.damage, range: props.playerFourStats.range, damage: props.playerFourStats.damage, move: props.playerFourStats.move })
                        props.setRemainingMoves(props.remainingMoves - 1)
                    } else {
                        props.setMessage('Out of range')
                    }
                }
            }
        } else if (props.playerOneActive === 4 && props.playerFourStats.health > 0) {
            if (props.remainingMoves > 0) {
                if (props.contains === '') {
                    let distance = Math.abs(props.coordinates[1] - props.playerFourCoordinates[1]) + Math.floor(Math.abs(props.coordinates[0] - props.playerFourCoordinates[0]) / 2)
                    if (props.playerFourCoordinates[0] % 2 === 0 && props.coordinates[0] % 2 === 1 && props.coordinates[1] > props.playerFourCoordinates[1]) {
                        distance++
                    } else if (props.playerFourCoordinates[0] % 2 === 1 && props.coordinates[0] % 2 === 0 && props.coordinates[1] < props.playerFourCoordinates[1]) {
                        distance++
                    }
                    if (Math.abs(props.coordinates[0] - props.playerFourCoordinates[0]) > props.playerFourStats.move) {
                        distance = Math.abs(props.coordinates[0] - props.playerFourCoordinates[0])
                    }
                    if (distance <= props.playerFourStats.move) {
                        props.setPlayerFourCoordinates(props.coordinates)
                        props.setRemainingMoves(props.remainingMoves - 1)
                        props.setMessage('')
                    } else {
                        props.setMessage('Not enough movement')
                    }
                } else if (props.contains === 'player one') {
                    let distance = Math.abs(props.coordinates[1] - props.playerFourCoordinates[1]) + Math.floor(Math.abs(props.coordinates[0] - props.playerFourCoordinates[0]) / 2)
                    if (props.playerFourCoordinates[0] % 2 === 0 && props.coordinates[0] % 2 === 1 && props.coordinates[1] > props.playerFourCoordinates[1]) {
                        distance++
                    } else if (props.playerFourCoordinates[0] % 2 === 1 && props.coordinates[0] % 2 === 0 && props.coordinates[1] < props.playerFourCoordinates[1]) {
                        distance++
                    }
                    if (Math.abs(props.coordinates[0] - props.playerFourCoordinates[0]) > props.playerFourStats.range) {
                        distance = Math.abs(props.coordinates[0] - props.playerFourCoordinates[0])
                    }
                    if (distance <= props.playerFourStats.range) {
                        props.setMessage('Player 1 has been hit!')
                        props.setPlayerOneStats({ health: props.playerOneStats.health - props.playerFourStats.damage, range: props.playerOneStats.range, damage: props.playerOneStats.damage, move: props.playerOneStats.move })
                        props.setRemainingMoves(props.remainingMoves - 1)
                    } else {
                        props.setMessage('Out of range')
                    }
                } else if (props.contains === 'player two') {
                    let distance = Math.abs(props.coordinates[1] - props.playerFourCoordinates[1]) + Math.floor(Math.abs(props.coordinates[0] - props.playerFourCoordinates[0]) / 2)
                    if (props.playerFourCoordinates[0] % 2 === 0 && props.coordinates[0] % 2 === 1 && props.coordinates[1] > props.playerFourCoordinates[1]) {
                        distance++
                    } else if (props.playerFourCoordinates[0] % 2 === 1 && props.coordinates[0] % 2 === 0 && props.coordinates[1] < props.playerFourCoordinates[1]) {
                        distance++
                    }
                    if (Math.abs(props.coordinates[0] - props.playerFourCoordinates[0]) > props.playerFourStats.range) {
                        distance = Math.abs(props.coordinates[0] - props.playerFourCoordinates[0])
                    }
                    if (distance <= props.playerFourStats.range) {
                        props.setMessage('Player 2 has been hit!')
                        props.setPlayerTwoStats({ health: props.playerTwoStats.health - props.playerFourStats.damage, range: props.playerTwoStats.range, damage: props.playerTwoStats.damage, move: props.playerTwoStats.move })
                        props.setRemainingMoves(props.remainingMoves - 1)
                    } else {
                        props.setMessage('Out of range')
                    }
                } else if (props.contains === 'player three') {
                    let distance = Math.abs(props.coordinates[1] - props.playerFourCoordinates[1]) + Math.floor(Math.abs(props.coordinates[0] - props.playerFourCoordinates[0]) / 2)
                    if (props.playerFourCoordinates[0] % 2 === 0 && props.coordinates[0] % 2 === 1 && props.coordinates[1] > props.playerFourCoordinates[1]) {
                        distance++
                    } else if (props.playerFourCoordinates[0] % 2 === 1 && props.coordinates[0] % 2 === 0 && props.coordinates[1] < props.playerFourCoordinates[1]) {
                        distance++
                    }
                    if (Math.abs(props.coordinates[0] - props.playerFourCoordinates[0]) > props.playerFourStats.range) {
                        distance = Math.abs(props.coordinates[0] - props.playerFourCoordinates[0])
                    }
                    if (distance <= props.playerFourStats.range) {
                        props.setMessage('Player 3 has been hit!')
                        props.setPlayerThreeStats({ health: props.playerThreeStats.health - props.playerFourStats.damage, range: props.playerThreeStats.range, damage: props.playerThreeStats.damage, move: props.playerThreeStats.move })
                        props.setRemainingMoves(props.remainingMoves - 1)
                    } else {
                        props.setMessage('Out of range')
                    }
                }
            }
        }
    }

    return (
        <>
            <section style={{ float: 'left', marginLeft: '1.5px', marginBottom: '-13px' }}>
                <div style={{ width: '0', borderBottom: '15px solid white', borderLeft: '26px solid transparent', borderRight: '26px solid transparent' }}></div>
                <div onTouchStart={() => props.setHover('Hovering over: ' + props.contains)} onTouchEnd={() => { props.setHover('Hovering over: '); props.setMessage('') }} onMouseEnter={() => props.setHover('Hovering over: ' + props.contains)} onMouseLeave={() => { props.setHover('Hovering over: '); props.setMessage('') }} style={{ width: '52px', height: '30px', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={log}>{image && <img src={image} style={{ height: '100%', width: 'auto' }}></img>}</div>
                <div style={{ width: '0', borderTop: '15px solid white', borderLeft: '26px solid transparent', borderRight: '26px solid transparent' }}></div>
            </section>
        </>
    )
}

export default Hex
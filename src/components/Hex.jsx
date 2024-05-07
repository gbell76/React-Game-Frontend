import playerOne from '../assets/avatar.jpg'

const Hex = (props) => {

    let image = ''

    if (props.contains) {
        image = playerOne
    }

    const log = () => {
        if (props.playerOneActive === 1) {
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
                        if (props.remainingMoves === 1) {
                            props.setPlayerOneActive((props.playerOneActive % props.numOfPlayers) + 1)
                            props.setRemainingMoves(2)
                        }
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
                        props.setMessage('Player 2 hit!')
                        props.setPlayerTwoStats({health: props.playerTwoStats.health - props.playerOneStats.damage, range: props.playerTwoStats.range, damage: props.playerTwoStats.damage, move: props.playerTwoStats.move})
                        props.setRemainingMoves(props.remainingMoves - 1)
                        if (props.remainingMoves === 1) {
                            props.setPlayerOneActive((props.playerOneActive % props.numOfPlayers) + 1)
                            props.setRemainingMoves(2)
                        }
                    }
                }
            }
        } else {
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
                        if (props.remainingMoves === 1) {
                            props.setPlayerOneActive((props.playerOneActive % props.numOfPlayers) + 1)
                            props.setRemainingMoves(2)
                        }
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
                        props.setMessage('Player 1 hit!')
                        props.setPlayerOneStats({health: props.playerOneStats.health - props.playerTwoStats.damage, range: props.playerOneStats.range, damage: props.playerOneStats.damage, move: props.playerOneStats.move})
                        props.setRemainingMoves(props.remainingMoves - 1)
                        if (props.remainingMoves === 1) {
                            console.log('Turn ended.')
                            props.setPlayerOneActive((props.playerOneActive % props.numOfPlayers) + 1)
                            props.setRemainingMoves(2)
                        }
                    }
                }
            }
        }
    }

    return (
        <>
            <section style={{ float: 'left', marginLeft: '1.5px', marginBottom: '-13px' }}>
                <div style={{ width: '0', borderBottom: '15px solid #6C6', borderLeft: '26px solid transparent', borderRight: '26px solid transparent' }}></div>
                <div style={{ width: '52px', height: '30px', backgroundColor: '#6C6', display: 'flex', alignItems: 'center', justifyContent: 'center'}} onClick={log}>{image && <img src={ image } style={{height: '100%', width: 'auto'}}></img>}</div>
                <div style={{ width: '0', borderTop: '15px solid #6C6', borderLeft: '26px solid transparent', borderRight: '26px solid transparent' }}></div>
            </section>
        </>
    )
}

export default Hex
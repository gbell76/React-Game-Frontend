import { useState, useEffect } from 'react'
import Auth from '../utils/auth'


const Home = () => {

    const [user, setUser] = useState([])
    const [edit, setEdit] = useState(false)
    const [rows, setRows] = useState()
    const [columns, setColumns] = useState()
    const [statPoints, setStatPoints] = useState()
    const [actionPoints, setActionPoints] = useState()
    const [warning, setWarning] = useState('')

    const toggle = () => {
        setRows(user[0].preferences.rows)
        setColumns(user[0].preferences.columns)
        setStatPoints(user[0].preferences.statPoints)
        setActionPoints(user[0].preferences.actionPoints)
        setEdit(!edit)
    }

    const submit = async () => {
        if (rows > 1 && columns > 1 && actionPoints > 0) {
            const savePreferences = await fetch(`http://localhost:5000/user/${Auth.getProfile().data._id}`, {
                method: 'PUT',
                body: JSON.stringify({ preferences: { rows: rows, columns: columns, statPoints: statPoints, actionPoints: actionPoints } }),
                headers: { 'Content-Type': 'application/json' }
            })
            const response = await fetch(`http://localhost:5000/user/${Auth.getProfile().data._id}`)
            const data = await response.json()
            setUser(data)
            localStorage.setItem('rows', data[0].preferences.rows)
            localStorage.setItem('columns', data[0].preferences.columns)
            localStorage.setItem('actionPoints', data[0].preferences.actionPoints)
            localStorage.setItem('statPoints', data[0].preferences.statPoints)
            setWarning('')
            toggle()
        } else {
            setWarning('Must have at least 2 rows, 2 columns, and 1 action point.')
        }
    }

    useEffect(() => {
        Auth.checkLoggedIn()
        fetch(`http://localhost:5000/user/${Auth.getProfile().data._id}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setUser(data);
                localStorage.setItem('rows', data[0].preferences.rows)
                localStorage.setItem('columns', data[0].preferences.columns)
                localStorage.setItem('actionPoints', data[0].preferences.actionPoints)
                localStorage.setItem('statPoints', data[0].preferences.statPoints)
            });
    }, [])

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2>About Bot Battle</h2>
                <p style={{ width: '50%', textIndent: '5%' }}>Bot Battle is a simple multiplayer game where 2-4 players battle each other with robots with customized stats in a turn based fashion on a hex based grid. Each bot has health, damage, range, and movement which can be customized and a number of actions per turn. Challenge is 1v1, Free For All (FFA) is a 3 player game, and Mayhem is a 4 person free for all! Default settings are 7 rows, 5 columns, 5 stat upgrade points, and 2 actions per turn.</p>
                <h2>Preferences</h2>
                {edit ?
                    <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <p>Rows: </p>
                            <input style={{ height: '50%' }} value={rows} onChange={(event) => { if (/[0-9]/.test(event.target.value)) { setRows(parseInt(event.target.value)) } else if (event.target.value === '') { setRows(0) } }}></input>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <p>Columns: </p>
                            <input style={{ height: '50%' }} value={columns} onChange={(event) => { if (/[0-9]/.test(event.target.value)) { setColumns(parseInt(event.target.value)) } else if (event.target.value === '') { setColumns(0) } }}></input>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <p>Upgrade points: </p>
                            <input style={{ height: '50%' }} value={statPoints} onChange={(event) => { if (/[0-9]/.test(event.target.value)) { setStatPoints(parseInt(event.target.value)) } else if (event.target.value === '') { setStatPoints(0) } }}></input>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <p>Actions per turn: </p>
                            <input style={{ height: '50%' }} value={actionPoints} onChange={(event) => { if (/[0-9]/.test(event.target.value)) { setActionPoints(parseInt(event.target.value)) } else if (event.target.value === '') { setActionPoints(0) } }}></input>
                        </div>
                        <p style={{ color: 'red' }}>{warning}</p>
                        <button onClick={submit}>Confirm</button>
                    </section>
                    :
                    <section>
                        <p>Rows: {user.map((users) => users.preferences.rows)}</p>
                        <p>Columns: {user.map((users) => users.preferences.columns)}</p>
                        <p>Upgrade points: {user.map((users) => users.preferences.statPoints)}</p>
                        <p>Actions per turn: {user.map((users) => users.preferences.actionPoints)}</p>
                        <button onClick={toggle}>Edit Preferences</button>
                    </section>
                }
            </div>
        </>
    )
}

export default Home
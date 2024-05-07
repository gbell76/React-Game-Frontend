import Nav from './NavTabs'

const Header = () => {
    return(
        <>
            <header style={{justifyContent: 'space-around', position: 'fixed', top: '0px', left: '0px', width: '100%'}}>
                <h1>Bot Battle</h1>
                <Nav />
            </header>
        </>
    )
}

export default Header
import { Link, useLocation } from 'react-router-dom';
import Auth from '../utils/auth'

function NavTabs() {

  const currentPage = useLocation().pathname;

  const logout = () => {
    if(currentPage != '/'){
      Auth.logout()
    }
  }

  return (
    <ul style={{display: 'flex', flexDirection: 'row', listStyleType: 'none'}}>
      <li style={{margin: '5px'}}>
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link-active' : 'nav-link'}
          onClick={logout}
        >
          {currentPage === '/' ? 'Log In' : 'Log Out'}
        </Link>
      </li>
      <li style={{margin: '5px'}}>
        <Link
          to="/Home"
          className={currentPage === '/Home' ? 'nav-link-active' : 'nav-link'}
        >
          Home
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
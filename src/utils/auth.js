import decode from 'jwt-decode';

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    return token
  }

  isTokenExpired(token) {
    const decoded = decode(token);
    if (decoded.exp < Date.now()) {
      localStorage.removeItem('id_token');
      return true;
    }
    return false;
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    localStorage.setItem('id_token', idToken);
  }

  logout() {
    localStorage.removeItem('id_token');
  }

  checkLoggedIn() {
    if(!this.loggedIn()){
      window.location.assign('/')
    }
  }
}

export default new AuthService();
export class AuthService {
  login: boolean = false;
  isAuthenticated() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.login);
      }, 800);
    });
  }
  loggedin() {
    this.login = true;
  }
  loggedout() {
    this.login = false;
  }
}

// Locator constants
const USERNAME_INPUT = '[name="username"]';
const PASSWORD_INPUT = '[name="password"]';
const CONNECT_BUTTON = '[type="submit"]';
const ERROR_MESSAGE = '[id="flash"]';
const CONNECT_URL = '/login';

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator(USERNAME_INPUT);
    this.passwordInput = page.locator(PASSWORD_INPUT);
    this.connectButton = page.locator(CONNECT_BUTTON);
    this.errorMessage = page.locator(ERROR_MESSAGE);
  }

  async open() {
    await this.page.goto(CONNECT_URL);
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.connectButton.click();
  }

  async getErrorMessage() {
    return this.errorMessage;
  }
}

export default LoginPage;

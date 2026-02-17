// Locator constants
const USERNAME_INPUT = '[data-qa="user_identifier"]';
const PASSWORD_INPUT = '[data-qa="user_password"]';
const CONNECT_BUTTON = '[data-qa="btn_login"]';
const ERROR_MESSAGE = '.error-message';
const CONNECT_URL = '/connect';

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

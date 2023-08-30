export default class Validator {
  constructor(userName) {
    this.userName = userName;
  }

  validateUsername() {
    const re1 = /^[a-zA-Z]+[a-zA-Z0-9-_]*([a-zA-Z])$/;
    const re2 = /\d{4,}/;
    return (re1.test(this.userName)) && !re2.test(this.userName);
  }
}

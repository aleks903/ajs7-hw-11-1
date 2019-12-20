export default class Validator {
  validateUsername(name) {
    this.name = name;
    return this.name.search(/^[^\d_-][a-zA-Z_-]+\d{0,3}[a-zA-Z_-]+[^\d_-]$/i) !== -1;
  }
}

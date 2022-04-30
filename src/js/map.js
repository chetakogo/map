export default class ErrorRepository {
  constructor() {
    this.errors = new Map([[404, 'not found'], [408, 'request timeout']]);
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Unknown Error';
  }
}

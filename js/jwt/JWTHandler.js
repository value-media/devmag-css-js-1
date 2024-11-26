// Importing jsonwebtoken for handling JWTs
const jwt = require('jsonwebtoken')

class JWTHandler {
  // Initialization with secret key
  constructor(secretKey) {
    this.secretKey = secretKey;
  }
  // Method for generating JWTs
  generate(payload, expiresIn = '1h') {
    return jwt.sign(payload, this.secretKey, {expiresIn});
  }
  // Method for verifying JWTs
  verify(token) {
    return jwt.verify(token, this.secretKey);
  }
}

const handler = new JWTHandler('secret');
const token = handler.generate({ name: 'Tomek'});
const verified = handler.verify(token);

console.log({ handler, token, verified });

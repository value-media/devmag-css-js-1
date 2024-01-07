import jwt from 'jsonwebtoken';

class JWTHandler {
    constructor(secretKey) {
        this.secretKey = secretKey;
    }
    generate(payload, expiresIn = '1h') {
        return jwt.sign({ data: payload }, this.secretKey, { 
            expiresIn,
            subject: 'Tomasz Dominiak',
            jwtid: new Date().getTime().toString()
        });
    }
    verify(token) {
        return jwt.verify(token, this.secretKey);
    }
}

function testJWT() {
    const payload = { message: 'zawartość tokenu'};
    const handler = new JWTHandler('sdcbuy9KhG5jhjgja');
    const token = handler.generate(payload);

    const result = handler.verify(token);

    console.log('token verified:', result);
}

testJWT();

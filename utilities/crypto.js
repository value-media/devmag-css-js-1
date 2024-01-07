import Crypto from 'node-crypt';
import cr from 'node:crypto';
// console.log('random bytes', cr.randomBytes(32).toString('hex')); // do wygenerowania kluczy

const crypto = new Crypto({
    key: 'e029d3793476522f8cc83da05e91f327e58a63a150b27d63a7f3e8d9d2e59608',
    hmacKey: 'af186e641b5225856b02b1653fefc66eae4320b9edeb078203f9923de3ad2301'
});

const unencryptedValue = 'Wiadomość do zakodowania, jednak nie jest taka krótka, jakby się wydawało na początku..';
const encryptedValue = crypto.encrypt(unencryptedValue);
const decryptedValue = crypto.decrypt(encryptedValue);

console.log('crypto', { unencryptedValue, encryptedValue, decryptedValue })




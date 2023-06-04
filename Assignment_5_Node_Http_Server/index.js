


const crypto = require('crypto');

function generateRandomPassword(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = crypto.randomInt(0, characters.length);
    password += characters.charAt(randomIndex);
  }

  return password;
}

const passwordLength = 10;
const randomPassword = generateRandomPassword(passwordLength);
console.log('Random Password:', randomPassword);

import CryptoJS from 'crypto-js';
const key = process.env.ENCRYPTION_KEY || 'default_encryption_key_32_chars__';
export const encryptText = (value) => CryptoJS.AES.encrypt(value, key).toString();
export const decryptText = (value) => CryptoJS.AES.decrypt(value, key).toString(CryptoJS.enc.Utf8);

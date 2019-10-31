import * as CryptoJS from 'crypto-js';

let AuthTokenKey = "elim-sign-client"; //AES密钥
let AuthTokenIv = '5e8y6w4y6u8w9j8e'; //AES向量

/*AES加密*/
export function Encrypt(data) {
    let dataStr = JSON.stringify(data);
    let encrypted = CryptoJS.AES.encrypt(dataStr, CryptoJS.enc.Latin1.parse(AuthTokenKey), {
        iv: CryptoJS.enc.Latin1.parse(AuthTokenIv),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
}

/*AES解密*/
export function Decrypt(data) {
    let data2 = data.replace(/\n/gm, "");
    let decrypted = CryptoJS.AES.decrypt(data2, CryptoJS.enc.Latin1.parse(AuthTokenKey), {
        iv: CryptoJS.enc.Latin1.parse(AuthTokenIv),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
}
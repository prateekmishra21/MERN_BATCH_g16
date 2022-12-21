var CryptoJS = require("crypto-js");
var uuid = require("uuid");

// Encrypt
var ciphertext = CryptoJS.SHA256("123456", "hi").toString();

console.log(
  ciphertext === "U2FsdGVkX18m8IUjZHoanEO6aG6Vok0lK0fEpCx95xI=",
  ciphertext
);

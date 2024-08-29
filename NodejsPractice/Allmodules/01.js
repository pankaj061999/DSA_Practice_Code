const crypto = require("crypto");

// console.log("Print crypto", crypto)

// 1.) Example: Hashing with crypto
// Hashing का उपयोग data की integrity verify

const password = "PankajKumar@1234";
const hash = crypto.createHash("sha256").update(password).digest("hex");

// console.log("Hashed Password:", hash);

// crypto.createHash('sha256'): ये method एक hashing algorithm (SHA-256) create करता है।
// update(password): इस method से आप data (जैसे password) को hashing algorithm में input करते हैं।
// digest('hex'): ये method hash को hex string के रूप में output करता है।

// 2.) Example: Encryption and Decryption with crypto
// Encryption का उपयोग data को secure करने के लिए किया जाता है, ताकि unauthorized users उसे access न कर सकें। Decryption का उपयोग encrypted data को वापस original form में लाने के लिए किया जाता है।

const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

// console.log("print key and iv", key, iv);
// this return a binary data  size of 32 and 16 bytes

// algorithm name
const algorithm = "aes-256-cbc";

// Encryption
const encrypt = (text) => {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  //   console.log("Print inside encrypt function", cipher, encrypted)
  encrypted += cipher.final("hex");
  return encrypted;
};

// crypto.createCipheriv(algorithm, key, iv): ये method encryption के लिए एक cipher object create करता है।
// cipher.update(text, 'utf8', 'hex'): Input text को utf8 से hex में convert करते हुए encrypt करता है।

const message = "Pankaj Kumar Meena";

const encryptedMessage = encrypt(message);
// console.log("Encrypted:", encryptedMessage);
// Encrypted: 8f719fb7112c6d86e1470cfe06a95522e32e9f435015c387745947dbdc780661

// Decryption
const decrypt = (encrypted) => {
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encrypted, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
};

// crypto.createDecipheriv(algorithm, key, iv): ये method decryption के लिए एक decipher object create करता है।
// decipher.update(encrypted, 'hex', 'utf8'): Encrypted text को hex से utf8 में convert करते हुए decrypt करता है।
const decryptedMessage = decrypt(encryptedMessage);
// console.log("Decrypted:", decryptedMessage);
// Decrypted: Pankaj Kumar Meena

//3.)  Example: Digital Signatures

const { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {
  modulusLength: 2048,
});

console.log("Print key list", privateKey, publicKey);
// Signing the message
const sign = (message) => {
  const sign = crypto.createSign("SHA256");
  sign.update(message);
  sign.end();
  const signature = sign.sign(privateKey, "hex");
  return signature;
};

// Verifying the signature
const verify = (message, signature) => {
  const verify = crypto.createVerify("SHA256");
  verify.update(message);
  verify.end();
  return verify.verify(publicKey, signature, "hex");
};

// Usage
const message1 = "Important message";
const signature = sign(message1);
console.log("Signature:", signature);

const isValid = verify(message1, signature);
console.log("Signature valid:", isValid);

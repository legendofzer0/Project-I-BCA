const SimpleCrypto = require("simple-crypto-js");

const simple = SimpleCrypto.generateRandom(256);
console.log(simple);

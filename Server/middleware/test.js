const genToken = require("./genToken");
const verifyToken = require("./verifyToken");
const decode = require("./decodeToken");

const testPayload = { test: "test" };
const testToken = genToken(testPayload);
console.log("Generated Token:", testToken);

const verificationResult = verifyToken(testToken);
console.log("Verification Result:", verificationResult);

const decodeResult = decode(testToken);
console.log(decodeResult);

setTimeout(() => {
  const verificationResult = verifyToken(testToken);
  console.log("Verification Result:", verificationResult);
}, 10000);

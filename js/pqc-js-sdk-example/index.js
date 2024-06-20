var pqc = require('pqc-js-sdk')

async function cryptoHash(data) {
    const msgUint8 = new TextEncoder().encode(data); // encode as (utf-8) Uint8Array
    const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8); // hash the message
     // convert buffer to byte array
    return Array.from(new Uint8Array(hashBuffer));
}

console.log("hello world");

let msg = "Hello World";

cryptoHash(msg).then((msgHash) => {
    let keyPair = pqc.cryptoNewKeyPair();
    let signature = pqc.cryptoSign(msgHash, keyPair.getPrivateKey());
    let verifyOk = pqc.cryptoVerify(msgHash, signature, keyPair.getPublicKey());
    if(verifyOk) {
        console.log("Verify succeeded");
    } else {
        console.error("Verify failed");
    }
});


module.exports = function(input, done) {

    var randomstring = require("randomstring");
    var CryptoJS = require("crypto-js");

    var calculateHash = (index, previousHash, timestamp, data, seed) => {
        return CryptoJS.SHA256(index + previousHash + timestamp + data + seed.toString()).toString();
    };

    var blockData = input.nextBlock;
    var previousBlock = input.previousBlock;
    var nextIndex = previousBlock.index + 1;
    var nextTimestamp = new Date().getTime() / 1000;

    var seed = randomstring.generate()
    var nextHash = calculateHash(nextIndex, previousBlock.hash, nextTimestamp, blockData, seed);
    while(!nextHash.endsWith(input.difficulty)) {
        seed = randomstring.generate()
        nextHash = calculateHash(nextIndex, previousBlock.hash, nextTimestamp, blockData, seed);
    }

    done({
        nextIndex: nextIndex,
        previousBlockHash: previousBlock.hash,
        nextTimestamp: nextTimestamp,
        blockData: blockData,
        nextHash: nextHash,
        seed: seed
    })
}
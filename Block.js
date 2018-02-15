class Block {
    constructor(index, previousHash, timestamp, data, hash, seed) {
        this.index = index;
        this.previousHash = previousHash.toString();
        this.timestamp = timestamp;
        this.data = data;
        this.hash = hash.toString();
        this.seed = seed;
    }
}

module.exports = Block
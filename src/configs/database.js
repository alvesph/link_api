const { MongoClient } = require("mongodb");
require('dotenv/config');

const uri = process.env.DATABASE_KEY;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        console.log("Hello! I'm a server");
    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}

run().catch(console.dir);

module.exports = MongoClient;

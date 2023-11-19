const config = require('./dbConfig.json');
const url = `mongodb+srv://cs260Carpenter:cs2602023!@cluster0.4du7jsi.mongodb.net/?retryWrites=true&w=majority`;
const { MongoClient } = require('mongodb');

const client = new MongoClient(url);
const db = client.db('simon');
const scoreCollection = db.collection('score');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});
async function addIdea(idea) {
  const result = await ideaCollection.insertOne(idea);
  return result;
}

function getIdeas() {
  const query = { idea: { $gt: 0, $lt: 900 } };
  const options = {
    limit: 100,
  };
  const cursor = ideaCollection.find(query, options);
  return cursor.toArray();
}

module.exports = { addIdea, getIdeas };

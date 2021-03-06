require('dotenv').config();
const { MongoClient } = require('mongodb');
const createApp = require('./create-app');

MongoClient.connect(process.env.MONGODB_URI, (err, client) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  let database = client.db('cant-decide');

  createApp(database)
    .listen(process.env.API_PORT, err => {
      if (err) {
        console.error(err)
      }
      else {
        console.log(`Listening to ${process.env.API_PORT}`)
      }
    })
})
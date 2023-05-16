const mongoose = require('mongoose')

const MONGO_URL = 'mongodb://localhost/fakeStore'

const db = async () => {
  await mongoose
    .connect(MONGO_URL)
    .then(()=>console.log('DB FUNCIONANDO'))
    .catch((error)=>console.log(error))
}

module.exports = db
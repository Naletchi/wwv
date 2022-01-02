require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./Modules/modules')
const PORT = process.env.PORT || 5000

const app = express()


const start = async () => {
  try{
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => console.log(`server started on ${PORT}`))
  } catch {
    console.log(e)
  }
}

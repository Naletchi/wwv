require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./Modules/modules')
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandingMiddleware')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app,usr('/api', router)

app.use(errorHandler)

const start = async () => {
  try{
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => console.log(`server started on ${PORT}`))
  } catch {
    console.log(e)
  }
}

start()

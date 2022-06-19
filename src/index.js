import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import viewEngine from './config/viewEngine.js'
import initWebRoutes from './route/web.js'
import connectDB from './config/connectDB.js'

require('dotenv').config()

let app = express()
// app.set('trust proxy', 1)
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', process.env.URL_REACT)
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()
})

app.use(cors({ origin: true }))
app.use(express.static("files"));
app.use(bodyParser.json({limit: '30000kb'}))

app.use(bodyParser.urlencoded({ extended: true }))
viewEngine(app)
initWebRoutes(app)
connectDB()



let port = process.env.PORT || 6969

app.listen(port, () => {
  console.log(`Kết nối với web: http://localhost:${port}`)
})

import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine.js";
import initWebRoutes from "./route/web.js";
import connectDB from "./config/connectDB.js" ;
import cors from "cors";
require ('dotenv').config()

let app = express();
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', process.env.URL_REACT);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({ origin:true}))
viewEngine(app);
initWebRoutes(app);
connectDB();
let port = process.env.PORT || 6969;

app.listen(port, () => {
    console.log(`Kết nối với web: http://localhost:${port}`) 
})

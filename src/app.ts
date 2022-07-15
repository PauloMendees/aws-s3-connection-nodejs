import express from 'express'
import bodyParser from 'body-parser'

const cors = require('cors')

const app = express()

//Configurando CORS
app.use(function (req: any, res: any, next: any) {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "*");
  
    //Allowing auth
    res.setHeader("Access-Control-Allow-Credentials", "true");
  
    // Request methods you wish to allow
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
  
    // Request headers you wish to allow
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    );
  
   
    next();
  });
  
  app.use(cors());

  app.options('*', cors())

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended: true}))

  export { app }
const express = require("express");
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser')

// Settings

app.set("port", 8000);

// Middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))

// Routes
app.use(require('./routes/employees'));

//Starting Server 
app.listen(app.get("port"), () => {
    console.log('Server on port', app.get("port"));
})
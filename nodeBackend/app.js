// load enviroment variables
require("dotenv").config();

const express = require('express');
const path = require('path')
const bodyParser = require("body-parser")
const mongoose = require('mongoose')
const multer = require('multer')
const { v4: uuidv4 } = require('uuid');
const socket = require('./socket')
const PORT = 8080;
let secret;

try {
    secret = process.env.PASSWORD
} catch (err) {
    throw new Error("Mongodb password not found!")
}

// try {
//     // Nonsence way of securing credentials
//     const fs = require('fs')
//     const secret = JSON.parse(fs.readFileSync(path.join(path.dirname(require.main.filename), "../", "secret.json"))).password

// } catch (error) {
//      throw new Error("Mongodb password not found!")
// }


const app = express()

const fileStorage = multer.diskStorage({
    filename: (req, file, callback) => {
        callback(null, `${uuidv4()}-${file.originalname}`)
    },
    destination: (req, file, callback) => {
        callback(null, 'images')
    }
})


// Sound CORS policy
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    next()
})

app.use(bodyParser.json())

// Static serving
app.use('/images', express.static(path.join(__dirname, 'images')))
app.use(express.static(path.join(__dirname, 'public')))

// app routes
app.use("/", (req, res, next) => {
    res.send('<div style="display:flex;justify-content:center;height:100vh;align-items:center"><h1 class="">EduHub Backend</h1></div>')
})


// custom error handler
app.use((err, req, res, next) => {
    if (!err.statusCode) {
        err.statusCode = 500
    }
    res.status(500).json({
        error: err
    })
})


const mongodbConnectURL = `mongodb+srv://new_eduhub_user:${secret}@eduhub-cluster0.pagd4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(mongodbConnectURL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(result => {
        console.log('====== connected to mongodb ======');
        const server = app.listen(PORT, () => {
            "listening on port 8080"
        })
        const socketOptions = {
            cors: {
                origin: '*',
                methods: "*"
            },
        }
        const io = socket.init(server, socketOptions)
        io.on('connection', client => {
            console.log('new connection!');
        })
    })
    .catch(err => console.log(err))
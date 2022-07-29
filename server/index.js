const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const cors = require("cors")
const router = require("./routes/index")
const errorHandler = require("./middleware/ErrorHandlingMiddleware")



const app = express()
const PORT = config.get('serverPort')

app.use(cors())
app.use(express.json())
app.use('/api', router)

// Error handle, last Middleware
app.use(errorHandler)

const start = async () => {
    try{

       await mongoose.connect(config.get('dbUrl'))
        app.listen(PORT, () => {
            console.log('Server started on port', PORT)
        })
    }catch (e) {
        console.log(e)
    }
}
start()

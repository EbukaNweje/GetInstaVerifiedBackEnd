const port = 1000
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors");


dotenv.config({path: "./config/config.env"})
const Db = process.env.DATABASE

mongoose.connect(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("MongoDB Connected!")
})

const app = require("./App")
app.use(cors());
// console.log(cors({origin: "*"}))

app.listen(port, ()=>{
    console.log(`App is Listing to port ${port}`)
})
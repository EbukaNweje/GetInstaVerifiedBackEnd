const express = require("express")
const GetVerifyRouter = require("./Router/GetVerifyRouter")
const app = express()
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.use("/api/v1/getverify", GetVerifyRouter)

app.use("/", (req, res)=>{
    res.status(200).json({
        message: "My Api is working"
    })
})

module.exports = app

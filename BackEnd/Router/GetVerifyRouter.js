const express = require("express")
const GetVerifyController = require("../controllers/GetverifyController")

const Router = express.Router()

Router.route("/").post(GetVerifyController.CreatePayment).get(GetVerifyController.GetallPayment)
Router.route("/:id").patch(GetVerifyController.UpdatePayment).get(GetVerifyController.GetPayment).delete(GetVerifyController.DeletePayment)

module.exports = Router
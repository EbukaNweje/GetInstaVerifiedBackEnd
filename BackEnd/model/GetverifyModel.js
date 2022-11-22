const mongoose = require("mongoose")

const GetVerifySchema = new mongoose.Schema({
    fristName: {
        type: String,
        require : [true, "First Name is Require"]
    },
    lastName: {
        type: String,
        require : [true, "Last Name is Require"]
    },
    userName: {
        type: String,
        require : [true, "User Name is Require"]
    },
    email: {
        type: String,
        require : [true, "Email is Require"]
    },
    phoneNumber: {
        type: String,
        require : [true, "Phone Number is Require"]
    },
    address: {
        type: String,
        require : [true, "Address is Require"]
    },
    townCity: {
        type: String,
        require : [true, "Town/City is Require"]
    },
    postCode: {
        type: Number,
        require : [true, "PostCode is Require"]
    },
    country: {
        type: String,
        require : [true, "Country is Require"]
    },
    state: {
        type: String,
        require : [true, "State is Require"]
    },
    orderSummary: {
        type: String,
        require : [false, "Order Summary is Require"]
    },
    amount: {
        type: Number,
        require : [true, "Amount is Require"]
    },
},
{
    timestamps: true
}
)

const GetVerify = mongoose.model('GetVerify', GetVerifySchema)
module.exports = GetVerify
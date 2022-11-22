const GetVerify = require("../model/GetverifyModel")

exports.CreatePayment = async (req, res) =>{
    try{
        const NewUser = await GetVerify.create(req.body)
        res.status(201).json({
            message: "Payment Successfuly",
            data : {NewUser}
        })
    }
    catch (err) {
        res.status(400).json({
            status : "Falled",
            message: err
        })
    }
}
exports.GetallPayment = async (req, res) =>{
    try{
        const GetAllUser = await GetVerify.find(req.body)
        res.status(200).json({
            message: "All Payment",
            data : {GetAllUser}
        })
    }
    catch (err) {
        res.status(400).json({
            status : "Falled",
            message: err
        })
    }

}
exports.GetPayment = async (req, res) =>{
    try{
        const id = req.params.id
        const GetUser = await GetVerify.findById(id)
        res.status(200).json({
            message: "Payment",
            data : {GetUser}
        })
    }
    catch (err) {
        res.status(400).json({
            status : "Falled",
            message: err
        })
    }
}
exports.UpdatePayment = async (req, res) =>{
    try{
        const id = req.params.id
        const UpdateUser = await GetVerify.findByIdAndUpdate(id)
        res.status(200).json({
            message: "Payment Updated Successfuly",
            data : {UpdateUser}
        })
    }
    catch (err) {
        res.status(400).json({
            status : "Falled",
            message: err
        })
    }
}
exports.DeletePayment = async (req, res) =>{
    try{
        const id = req.params.id
        await GetVerify.findByIdAndUpdate(id)
        res.status(204).json({
            message: "Payment Updated Successfuly",
        })
    }
    catch (err) {
        res.status(400).json({
            status : "Falled",
            message: err
        })
    }
}
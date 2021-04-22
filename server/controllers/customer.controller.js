//Models
const CustomerModel = require("../models/customer.model");

exports.postCustomer = async(req,res)=>{

    await CustomerModel.create(req.body)
}

exports.getAllCustomers = async(req,res)=>{
    var customers = await CustomerModel.find();

    res.send({error:null,customers:customers});
}

exports.getCustomers = async(req,res)=>{
    var customers = await CustomerModel.find(req.query);


    res.send({error:null,customers:customers});
}

exports.getCustomer = async(req,res)=>{
    var customer = await CustomerModel.findOne({_id:req.params.customerID});

    res.send({error:null,customer:customer});
}

exports.updateCustomer = async(req,res)=>{
    await CustomerModel.updateOne({_id:req.params.customerID},req.body);

    res.send({error:null});
}
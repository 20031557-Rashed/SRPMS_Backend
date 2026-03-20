const ServiceInvoice = require("../models/ServiceInvoice")

exports.createInvoice = async (req,res)=>{
const invoice = new ServiceInvoice(req.body)
await invoice.save()
res.json(invoice)
}

exports.getInvoices = async (req,res)=>{
res.json(await ServiceInvoice.find())
}

exports.getInvoiceById = async (req,res)=>{
res.json(await ServiceInvoice.findById(req.params.id))
}

exports.updateInvoice = async (req,res)=>{
res.json(await ServiceInvoice.findByIdAndUpdate(req.params.id,req.body,{new:true}))
}

exports.getInvoicesByJob = async (req,res)=>{
res.json(await ServiceInvoice.find({job:req.params.jobId}))
}
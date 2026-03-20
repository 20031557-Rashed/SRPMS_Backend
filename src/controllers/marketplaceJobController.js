const MarketplaceJob = require("../models/MarketplaceJob")

exports.createJob = async (req,res)=>{
const job = new MarketplaceJob(req.body)
await job.save()
res.json(job)
}

exports.getJobs = async (req,res)=>{
res.json(await MarketplaceJob.find())
}

exports.getJobById = async (req,res)=>{
res.json(await MarketplaceJob.findById(req.params.id))
}

exports.updateJob = async (req,res)=>{
res.json(await MarketplaceJob.findByIdAndUpdate(req.params.id,req.body,{new:true}))
}

exports.deleteJob = async (req,res)=>{
await MarketplaceJob.findByIdAndDelete(req.params.id)
res.json({message:"Deleted"})
}

exports.getJobsByRequest = async (req,res)=>{
res.json(await MarketplaceJob.find({request:req.params.requestId}))
}

exports.getJobsByProvider = async (req,res)=>{
res.json(await MarketplaceJob.find({service_provider:req.params.providerId}))
}
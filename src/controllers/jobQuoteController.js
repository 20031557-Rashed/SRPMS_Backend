const JobQuote = require("../models/JobQuote")

exports.createQuote = async (req,res)=>{
const quote = new JobQuote(req.body)
await quote.save()
res.json(quote)
}

exports.getQuotes = async (req,res)=>{
res.json(await JobQuote.find())
}

exports.getQuoteById = async (req,res)=>{
res.json(await JobQuote.findById(req.params.id))
}

exports.updateQuote = async (req,res)=>{
res.json(await JobQuote.findByIdAndUpdate(req.params.id,req.body,{new:true}))
}

exports.acceptQuote = async (req,res)=>{
res.json(await JobQuote.findByIdAndUpdate(req.params.id,{status:"accepted"},{new:true}))
}

exports.rejectQuote = async (req,res)=>{
res.json(await JobQuote.findByIdAndUpdate(req.params.id,{status:"rejected"},{new:true}))
}
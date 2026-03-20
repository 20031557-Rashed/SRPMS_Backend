const CommissionLedger = require("../models/CommissionLedger")

exports.getCommissions = async (req,res)=>{
res.json(await CommissionLedger.find())
}

exports.getCommissionById = async (req,res)=>{
res.json(await CommissionLedger.findById(req.params.id))
}

exports.updateCommission = async (req,res)=>{
res.json(await CommissionLedger.findByIdAndUpdate(req.params.id,req.body,{new:true}))
}

exports.getByReferral = async (req,res)=>{
res.json(await CommissionLedger.find({referral:req.params.referralId}))
}
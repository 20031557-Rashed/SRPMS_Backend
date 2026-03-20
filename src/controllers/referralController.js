const Referral = require("../models/Referral")

exports.createReferral = async (req,res)=>{
const referral = new Referral(req.body)
await referral.save()
res.json(referral)
}

exports.getReferrals = async (req,res)=>{
res.json(await Referral.find())
}

exports.getReferralById = async (req,res)=>{
res.json(await Referral.findById(req.params.id))
}

exports.getReferralByCode = async (req,res)=>{
res.json(await Referral.findOne({code:req.params.code}))
}
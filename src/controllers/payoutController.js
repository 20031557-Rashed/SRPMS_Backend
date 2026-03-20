const Payout = require("../models/Payout")

exports.createPayout = async (req,res)=>{
const payout = new Payout(req.body)
await payout.save()
res.json(payout)
}

exports.getPayouts = async (req,res)=>{
res.json(await Payout.find())
}

exports.getPayoutById = async (req,res)=>{
res.json(await Payout.findById(req.params.id))
}

exports.updatePayout = async (req,res)=>{
res.json(await Payout.findByIdAndUpdate(req.params.id,req.body,{new:true}))
}

exports.getByPartner = async (req,res)=>{
res.json(await Payout.find({referral_partner:req.params.partnerId}))
}
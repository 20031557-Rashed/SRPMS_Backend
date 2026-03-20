const ServiceCategory = require("../models/ServiceCategory")

exports.createCategory = async (req,res)=>{
const category = new ServiceCategory(req.body)
await category.save()
res.json(category)
}

exports.getCategories = async (req,res)=>{
res.json(await ServiceCategory.find())
}

exports.updateCategory = async (req,res)=>{
res.json(await ServiceCategory.findByIdAndUpdate(req.params.id,req.body,{new:true}))
}

exports.deleteCategory = async (req,res)=>{
await ServiceCategory.findByIdAndDelete(req.params.id)
res.json({message:"Deleted"})
}
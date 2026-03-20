const Property = require("../models/Property")

exports.createProperty = async (req, res) => {

    const property = new Property(req.body)
    await property.save()

    res.status(201).json(property)
}

exports.getProperties = async (req, res) => {

    const properties = await Property.find().populate("landlord")

    res.json(properties)
}

exports.getPropertyById = async (req, res) => {

    const property = await Property.findById(req.params.id).populate("landlord")

    res.json(property)
}

exports.updateProperty = async (req, res) => {

    const property = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.json(property)
}

exports.deleteProperty = async (req, res) => {

    await Property.findByIdAndDelete(req.params.id)

    res.json({ message: "Property deleted" })
}

exports.getPropertiesByLandlord = async (req, res) => {

    const properties = await Property.find({ landlord: req.params.landlordId })

    res.json(properties)
}
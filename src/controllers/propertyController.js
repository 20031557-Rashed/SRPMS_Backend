const LandLord = require("../models/LandLord");
const Property = require("../models/Property")

exports.createProperty = async (req, res) => {
    const user = req.user;
    if (req.user.role == "landlord") {
        const landlordId = await LandLord.findOne({ user: user._id }).select("_id")

        if (!landlordId) {
            return res.status(400).json({ message: "Landlord profile not found" })
        };

        req.body.landlord = landlordId._id
    }
    const property = new Property(req.body)
    await property.save()

    res.status(201).json({
        success: true,
        message: "Property created successfully",
        property
    })
}

exports.getProperties = async (req, res) => {
    const properties = await Property.find().populate("landlord")
    res.json({
        success: true,
        message: "Properties fetched successfully",
        properties
    })
}

exports.getPropertyById = async (req, res) => {
    const property = await Property.findById(req.params.id).populate("landlord")
    res.json({
        success: true,
        message: "Property fetched successfully",
        property
    })
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
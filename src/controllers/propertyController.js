const LandLord = require("../models/LandLord");
const Property = require("../models/Property")

exports.createProperty = async (req, res) => {
    try {
        let imagePaths = []

        if (req.files && req.files.length > 0) {
            imagePaths = req.files.map(file => file.path)
        }

        let landlordId = null
        if (req.user.role == "landlord") {
            const landlord = await LandLord.findOne({ user: user._id }).select("_id")

            if (!landlord) {
                return res.status(400).json({ 
                    success: false,
                    message: "Landlord profile not found" 
                })
            };

            landlordId = landlord._id
        }

        if (req.user.role == "admin") {
            landlordId = req.body.landlord;

            if (!landlordId) {
                return res.status(400).json({ 
                    success: false,
                    message: "Landlord ID is required for admin users" 
                })
            }
        }
        const property = new Property({ ...req.body, landlord: landlordId, images: imagePaths })
        await property.save()

        res.status(201).json({
            success: true,
            message: "Property created successfully",
            property
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({ 
            success: false,
            message: "Server error" 
        })
    }
}

exports.getProperties = async (req, res) => {
    try {
        let properties

        if (req.user && req.user.role === "landlord") {
            properties = await Property.find({ landlord: req.user._id })
        } else {
            properties = await Property.find().populate("landlord")
        }

        res.json({
            success: true,
            message: "Properties fetched successfully",
            properties
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({ 
            success: false,
            message: "Server error" 
        })
    }
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
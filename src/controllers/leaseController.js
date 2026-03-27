const LandLord = require("../models/LandLord")
const Lease = require("../models/Lease")

exports.createLease = async (req, res) => {
    const user = req.user
    if (user.role !== "admin" && user.role !== "landlord") {
        return res.status(403).json({ message: "Forbidden" })
    }

    if (user.role === "landlord") {
        const landlordId = await LandLord.findOne({ user: user._id }).select("_id")

        if (!landlordId) {
            return res.status(400).json({ message: "Landlord profile not found" })
        }

        req.body.landlord = landlordId._id
    }
    const lease = new Lease(req.body)
    await lease.save()

    res.status(201).json(lease)
}

exports.getLeases = async (req, res) => {
    const leases = await Lease.find()
    .populate("tenant")
    .populate("property")

    res.json(leases)
}

exports.getLeaseById = async (req, res) => {
    const lease = await Lease.findById(req.params.id)
    res.json(lease)
}

exports.updateLease = async (req, res) => {
    const lease = await Lease.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(lease)
}

exports.deleteLease = async (req, res) => {
    await Lease.findByIdAndDelete(req.params.id)
    res.json({ message: "Lease deleted" })
}

exports.getLeasesByProperty = async (req, res) => {
    const leases = await Lease.find({ property: req.params.propertyId })
    res.json(leases)
}

exports.getLeasesByTenant = async (req, res) => {
    const leases = await Lease.find({ tenant: req.params.tenantId })
    res.json(leases)
}

exports.getActiveLeases = async (req, res) => {
    const leases = await Lease.find({ status: "active" })
    res.json(leases)
}
const Lease = require("../models/Lease")

exports.createLease = async (req, res) => {

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
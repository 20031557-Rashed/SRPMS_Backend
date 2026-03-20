const ServiceProvider = require("../models/ServiceProvider")

exports.createProvider = async (req, res) => {

    const provider = new ServiceProvider(req.body)

    await provider.save()

    res.status(201).json(provider)
}

exports.getProviders = async (req, res) => {

    const providers = await ServiceProvider.find().populate("user")

    res.json(providers)
}

exports.getProviderById = async (req, res) => {

    const provider = await ServiceProvider.findById(req.params.id)

    res.json(provider)
}

exports.updateProvider = async (req, res) => {

    const provider = await ServiceProvider.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.json(provider)
}

exports.deleteProvider = async (req, res) => {

    await ServiceProvider.findByIdAndDelete(req.params.id)

    res.json({ message: "Provider deleted" })
}
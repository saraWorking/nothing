const service = require('../services/service')

const getUserById = async (req, res) => {
    try {
        const obj = await service.getUserById(req.params.id)
        res.status(200).json(obj);
    } catch (err) {
        res.status(400).json(err)
    }
}

module.exports = { getUserById }
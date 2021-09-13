const repository = require('../repositories/repository')
const User = require('../models/model')

const getUserById=async(id) => {
    try {
       return await repository.getObj(User,{_id:id})
    } catch (error) {
        throw error;
    }
}

module.exports={getUserById}
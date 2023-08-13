const { ObjectId } = require('mongodb');

const checkValidId = (id) => {
    //validate the user id
    try {
        return ObjectId.isValid(id);
    } catch (error) {
        return false;
    }
};

// function isValidUUID(uuid) {
//     const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
//     return uuidPattern.test(uuid);
// }

module.exports = checkValidId
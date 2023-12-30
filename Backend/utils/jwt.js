const jwt = require("jsonwebtoken");

const createToken = (id, name) => {
    const token = jwt.sign({ userId: id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_LIFETIME,
    });
    return token;
};

module.exports = {
    createToken,
};

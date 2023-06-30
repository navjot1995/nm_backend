const { User } = require('../models/user.js');
const { hashPassword, comparePasswords } = require('../helper/bycrypt');
const { generateToken } = require('../helper/jwt');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const isMatch = await comparePasswords(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = generateToken({ userId: user.id });

        res.json({ token , status:true , user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status:false, error: 'Internal server error' });
    }
};


const signup = async (req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body
        const checkuser = await User.findOne({ email })
        if (checkuser) {
            return res.end("Email already exist");
        }
        const hashedPassword = await hashPassword(password);
        const user = new User();
        user.firstname = firstname;
        user.email = email;
        user.lastname = lastname;
        user.password = hashedPassword;
        user.save()
        const token = generateToken({ userId: user.id });
        res.json({ token , status:true , user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status:false, error: error.message });
    }
}


const updateProfile = async (req, res) => {
    try {
        const result = await User.findOneAndUpdate(
            { email: req.query.email }, {
            isAdmin: req.query.admin,
        }, {
            new: true
        })
        res.send(result);

    } catch (error) {
        console.log(error);
        res.end(error.message);
    }
}

const logout = async (req, res) => {
    try {
        res.send("test");
    } catch (error) {
        console.log(error);
        res.end(error.message);
    }
}


module.exports = {
    login,
    signup,
    updateProfile,
    logout
}
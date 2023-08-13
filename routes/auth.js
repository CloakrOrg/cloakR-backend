const express = require('express');
const router = express.Router();
const Auth = require('../model/Auth');

// login user by email and password and return role
router.get('/', async (req, res) => {
    const { email, password } = req.body;
    try {
        const auth = await Auth.findOne({ email: email, password: password });
        res.json(auth);
    } catch (err) {
        res.json({ message: err });
    }
}
);

// create user
router.post('/create', async (req, res) => {
    const auth = new Auth({
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
    });

    try {
        const savedAuth = await auth.save();
        res.json(savedAuth);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;

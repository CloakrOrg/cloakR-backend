const express = require('express');
const router = express.Router();
const Tip = require('../model/Tip');

// Get all tips
router.get('/', async (req, res) => {
    try {
        const tips = await Tip.find();
        res.json(tips);
    } catch (err) {
        res.json({ message: err });
    }
});

// get all tips by crimeId
router.get('/', async (req, res) => {
    try {
        const tips = await Tip.find({ crimeId: req.query.crimeId });
        res.json(tips);
    } catch (err) {
        res.json({ message: err });
    }
});

// get all tips by userId
router.get('/', async (req, res) => {
    try {
        const tips = await Tip.find({ crimeId: req.query.userId });
        res.json(tips);
    } catch (err) {
        res.json({ message: err });
    }
});

// Get specific tip
router.get('/:tipId', async (req, res) => {
    try {
        const tip = await Tip.findById(req.params.tipId);
        res.json(tip);
    } catch (err) {
        res.json({ message: err });
    }
});

// create tip by crimeId and userId
router.post('/', async (req, res) => {
    const tip = new Tip({
        crimeId: req.body.crimeId,
        userId: req.body.userId,
        status: req.body.status,
        date: req.body.date,
        text: req.body.text,
        image: req.body.image,
        video: req.body.video,
        location: req.body.location
    });

    try {
        const savedTip = await tip.save();
        res.json(savedTip);
    } catch (err) {
        res.json({ message: err });
    }
});

// Update tip status by tipId
router.patch('/:tipId', async (req, res) => {
    try {
        const updatedTip = await Tip.updateOne(
            { _id: req.params.tipId },
            {
                $set: {
                    status: req.body.status
                }
            }
        );
        res.json(updatedTip);
    } catch (err) {
        res.json({ message: err });
    }
});

// Delete tip by tipId
router.delete('/:tipId', async (req, res) => {
    try {
        const removedTip = await Tip.remove({ _id: req.params.tipId });
        res.json(removedTip);
    } catch (err) {
        res.json({ message: err });
    }
});



module.exports = router;


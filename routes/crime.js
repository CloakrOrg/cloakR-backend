const express = require('express');
const router = express.Router();
const Crime = require('../model/Crime');

// Get all crimes 
router.get('/', async (req, res) => {
    try {
        const crimes = await Crime.find();
        res.json(crimes);
    } catch (err) {
        res.json({ message: err });
    }
});

// Get all crimes by state (e.g. /crime?state=WB)
router.get('/', async (req, res) => {
    try {
        const crimes = await Crime.find({ state: req.query.state });
        res.json(crimes);
    } catch (err) {
        res.json({ message: err });
    }
}
);


// Get specific crime
router.get('/:crimeId', async (req, res) => {
    try {
        const crime = await Crime.findById(req.params.crimeId);
        res.json(crime);
    } catch (err) {
        res.json({ message: err });
    }
});

// Add crime
router.post('/', async (req, res) => {
    const crime = new Crime({
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        state: req.body.state,
        type: req.body.type,
        suspect: req.body.suspect,
        victim: req.body.victim,
        image: req.body.image
    });

    try {
        const savedCrime = await crime.save();
        res.json(savedCrime);
    } catch (err) {
        res.json({ message: err });
    }
});

// Update crime
router.patch('/:crimeId', async (req, res) => {
    try {
        const updatedCrime = await Crime.findByIdAndUpdate(
            req.params.crimeId,
            { type: req.body.type }
        );

        res.json(updatedCrime);
    } catch (err) {
        res.json({ message: err });
    }
});

// Delete crime
router.delete('/:crimeId', async (req, res) => {
    try {
        const removedCrime = await Crime.remove({ _id: req.params.crimeId });
        res.json(removedCrime);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
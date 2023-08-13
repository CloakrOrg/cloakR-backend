const express = require('express');
const app = express();
require('dotenv/config');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("error connecting to MongoDB:", err));


app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: "Welcome to CloakR's Backend API Server" });
});

app.use('/crime', require('./routes/crime'));
app.use('/tip', require('./routes/tip'));
app.use('/auth', require('./routes/auth'));

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});
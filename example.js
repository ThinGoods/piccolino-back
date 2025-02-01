const mongoose = require('mongoose');
const User = require("./User");

mongoose.connect("mongodb://127.0.0.1:27017/newdb");

console.log("Hello!");

const express = require('express');
const app = express();

// Define an endpoint
app.get('/api/hello', (req, res) => {
    res.status(200).json({ message: 'Hello, World!' });

    const userList = [];
    res.send(userList);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

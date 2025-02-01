const mongoose = require("mongoose");
const express = require('express');
const { CoffeeModel } = require('./models/coffee');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
}));

async function connectToDatabase() {
  try {
    await mongoose.connect("mongodb://localhost:27017/newdb", {
      useNewUrlParser: true, 
      useUnifiedTopology: true, 
    });
    console.log("Connection succesful!");
  } catch (error) {
    console.error("Something wrong:", error.message);
    process.exit(1);
  }
}
connectToDatabase();

app.get('/api/coffeeItems', async (req, res) => {
  console.log("Маршрут вызван");
  try {
    res.setHeader('Content-Type', 'application/json');
    const responseCoffeeItems = await CoffeeModel.find({ isPartnership: false });
    // console.log("Piccolino coffee:", responseCoffeeItems); // data logging

    if (!responseCoffeeItems.length) {
      return res.status(404).json({ message: "No entries with flag isPartnership: true"})
    }
    res.status(200).json(responseCoffeeItems);
  } catch (err) {
    console.error("Something wrong:", err.message);
    res.status(500).json({error: 'Ошибка при получении данных'});
  }
});

app.get('/api/partnerCoffeeItems', async (req, res) => {
  console.log("Маршрут вызван");
  try {
    res.setHeader('Content-Type', 'application/json');
    const responseCoffeeItems = await CoffeeModel.find({ isPartnership: true });
    // console.log("OneLove coffee:", responseCoffeeItems); // data logging

    if (!responseCoffeeItems.length) {
      return res.status(404).json({ message: "No entries with flag isPartnership: true"})
    }
    res.status(200).json(responseCoffeeItems);
  } catch (err) {
    console.error("Something wrong:", err.message);
    res.status(500).json({error: 'Ошибка при получении данных'});
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
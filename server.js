const express = require('express');
const fetch = require('node-fetch'); 
require('dotenv').config();


const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/weather', async (req, res) => {
    const city = req.query.city;
    const apiKey = process.env.API_KEY;

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
        const response = await fetch(`/weather?city=${cityName}`);
        if (!response.ok) throw new Error("API error");
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch weather data" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

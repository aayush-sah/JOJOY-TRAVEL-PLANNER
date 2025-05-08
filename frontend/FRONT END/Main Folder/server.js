const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// Mock travel options data
const travelOptions = {
    "Bhopal-Agra": {
        trains: ["Shatabdi Express", "Bhopal Express"],
        buses: ["Bhopal Travels", "Agra Express"],
        flights: ["Air India", "IndiGo"]
    },
    "Nagpur-Bhopal": {
        trains: ["Vidarbha Express", "Narmada Express"],
        buses: ["Nagpur Express", "Bhopal Roadways"],
        flights: ["SpiceJet", "Vistara"]
    },
    "Indore-Mumbai": {
        trains: ["Avantika Express", "Deccan Queen"],
        buses: ["Indore Roadways", "Mumbai Express"],
        flights: ["GoAir", "Air India"]
    }
};

// API endpoint to get travel options
app.get("/api/travel-options", (req, res) => {
    const { from, to } = req.query;

    if (!from || !to) {
        return res.status(400).json({ error: "Both 'from' and 'to' query parameters are required." });
    }

    const key = `${from}-${to}`;
    const options = travelOptions[key] || null;

    if (!options) {
        return res.status(404).json({ error: "No travel options found for the selected route." });
    }

    res.json(options);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

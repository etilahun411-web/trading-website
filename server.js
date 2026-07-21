const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint for ICT Price Action Curriculum
app.get('/api/courses', (req, res) => {
    res.json([
        { id: 1, title: "Liquidity & Market Structure Shifts (MSS)", level: "Core Foundations" },
        { id: 2, title: "Fair Value Gaps (FVG) & Imbalances", level: "Intermediate Entry Techniques" },
        { id: 3, title: "Order Blocks & Institutional Liquidity Sweeps", level: "Advanced Execution" }
    ]);
});

app.listen(PORT, () => {
    console.log(`Trading Academy live at http://localhost:${PORT}`);
});const path = require('path');

// Serve your HTML, CSS, and JS files
app.use(express.static(path.join(__dirname)));

// Route for the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

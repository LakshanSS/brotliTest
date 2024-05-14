const express = require('express');
const brotli = require('brotli');
const app = express();

// Example data to compress
const originalData = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

// Compress data using Brotli compression
const compressedData = brotli.compress(originalData);

// Define a route that returns Brotli compressed content
app.get('/compressed', (req, res) => {
    // Set response headers
    res.set('Content-Encoding', 'br'); // Set Content-Encoding header to indicate Brotli compression
    res.set('Content-Type', 'text/plain'); // Set Content-Type header

    // Send the compressed data
    res.send(compressedData);
});

app.get('/hi', (req, res) => {
    res.send("hi");
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

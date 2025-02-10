// api/server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Import the cors middleware
const app = express();
const port = 3000;

// Enable CORS for all origins (for simplicity - tighten this in production)
app.use(cors());

// Replace with your actual YouTube Channel ID and API Key
const YOUTUBE_CHANNEL_ID = 'UC3GmaVOt7l8fYjey6iM2HQQ';  //  <--- REPLACE THIS
const YOUTUBE_API_KEY = 'AIzaSyBDbmfocR_QRTKtr9e5_FNd7LPW6dQ7l30';   //  <--- REPLACE THIS

// API endpoint to fetch latest videos
app.get('/api/youtube/videos', async (req, res) => {
    try {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
            params: {
                part: 'snippet',
                channelId: YOUTUBE_CHANNEL_ID,
                maxResults: 9, // Retrieve more videos to display
                order: 'date',
                type: 'video',
                key: YOUTUBE_API_KEY
            }
        });
        res.json(response.data.items);
    } catch (error) {
        console.error('Error fetching YouTube videos:', error);
        res.status(500).json({ error: 'Failed to fetch YouTube videos' });
    }
});

// API endpoint to fetch latest shorts (assuming you upload them as regular videos)
app.get('/api/youtube/shorts', async (req, res) => {
    try {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
            params: {
                part: 'snippet',
                channelId: YOUTUBE_CHANNEL_ID,
                maxResults: 3,
                order: 'date',
                type: 'video',
                q: '#shorts', //  <--- IMPORTANT:  Use a hashtag or keyword to identify shorts
                key: YOUTUBE_API_KEY
            }
        });
        res.json(response.data.items);
    } catch (error) {
        console.error('Error fetching YouTube shorts:', error);
        res.status(500).json({ error: 'Failed to fetch YouTube shorts' });
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
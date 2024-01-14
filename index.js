const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 2000;

app.use(bodyParser.urlencoded({ extended: true }));

const scheduledMeetings = [];

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/scheduled-meetings', (req, res) => {
//     res.json(scheduledMeetings);
// });

// app.post('/schedule-meeting', (req, res) => {
//     const { time, name, email } = req.body;
//     const meeting = { time, name, email };
//     scheduledMeetings.push(meeting);
//     res.redirect('/');
// });
console.log(scheduledMeetings);
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
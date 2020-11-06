require('dotenv').config();

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const line = require('@line/bot-sdk');
const cors = require('cors');

const config = {
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
    channelSecret: process.env.CHANNEL_SECRET,
};

const client = new line.Client(config);
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.get('/api/v1/unlink-richmenu', (req, res) => {
    client.unlinkRichMenuFromUser("Ua01b57341288489048b927ea35be72f6");
    res.json({
        data: req.body
    });
});

app.post('/api/v1/change-richmenu', (req, res) => {
    // save data in db
    const { StudentID, ThaiNationalid, email, userId } = req.body;
    client.linkRichMenuToUser(userId, "richmenu-6c4cbaa6c434c82c12e5a8d8309428ac");
    res.json({
        data: req.body
    });
})

app.listen(4000, () => {
    console.log("Ready on port 4000");
});
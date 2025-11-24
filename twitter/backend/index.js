import express from 'express';
import cors from 'cors'
import { v4 as uuidv4 } from 'uuid';
import { tweets } from './tweet.js';

const app = express();
const port = 4040;

app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
    const now = new Date().toISOString();
    console.log(`${req.method} ${req.url} ${now}`);

    next();
})

app.get("/api/v1/tweets", (req, res) => {
    res.status(200).json(tweets);
})

const now = new Date().toISOString();

app.post("/api/v1/tweets", (req, res) => {
    const { username, tweet } = req.body;

    if (!username || !tweet) {
        throw new Error("Username and tweet field is required")
    }

    const newTweet = {
        id: uuidv4(),
        username,
        tweet,
        createdAt: now,
        updatedAt: false
    }

    tweets.push(newTweet)

    res.status(201).json(tweets)
})

app.patch("/api/v1/tweet/:tweetId", (req, res) => {
    const { tweetId } = req.params
    const { tweet } = req.body;

    if (!tweet || !tweetId) {
        throw new Error("tweet and tweet id is required !!")
    }

    const existingTweet = tweets.find((t) => t.id === tweetId)

    if (!existingTweet) {
        throw new Error(`With this id:${id} not tweet exist !!`)
    }

    Object.assign(existingTweet, {
        tweet,
        updatedAt: now
    })

    tweets.push(existingTweet)

    res.status(200).json(tweets)
})

app.delete("/api/v1/tweet/:tweetId", (req, res) => {
    const { tweetId } = req.params;

    if (!tweetId) {
        throw new Error("Tweet id is required")
    }

    const index = tweets.findIndex(t => t.id === tweetId)

    if(!index) {
        throw new Error(`Tweet with this id:${id} doesnot exist`)
    }

    tweets.splice(index, 1);

    res.status(200).send(tweets)
})

app.listen(port, () => {
    console.log(`Server is running on port:${port}`);
})
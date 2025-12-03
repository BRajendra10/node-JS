import dotenv from 'dotenv';
import conectDB from './db/db.js'
import app from './app.js';

dotenv.config();

conectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log("Error:", error);
            throw error
        })

        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is runnning at PORT, ${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.log("MONGO db connection failed !! ", err);
    })
import 'dotenv/config';
import { app } from './app.js';
import connectDB from './db/index.js';

connectDB()
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
        process.exit(1);
    })

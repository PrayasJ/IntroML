import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import Course from "./db/course.js"

dotenv.config()
const port = process.env.PORT || 8000

const MongoClient = mongodb.MongoClient
    MongoClient.connect(
        process.env.URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    ).catch(err => {
        console.error(err.stack)
        process.exit(1)
    }).then(async client => {
        await Course.DB(client)
        app.listen(port, () => {
            console.log(`listening on port ${port}`)
        })
    })
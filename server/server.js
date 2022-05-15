import express from "express"
import cors from "cors"
import videos from "./api/videos.route.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/videos", videos)
app.use("*", (req, res) => res.status(404).json({error: "Not Found"}))

export default app
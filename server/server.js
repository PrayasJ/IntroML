import express from "express"
import cors from "cors"
import videos from "./api/videos.route.js"
import users from "./api/users.route.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/videos", videos)
app.use("/api/users", users)
app.use("*", (req, res) => res.status(404).json({error: "Not Found"}))

export default app
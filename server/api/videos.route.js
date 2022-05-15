import express from "express"
import videoController from "./videos.controller.js"

const router = express.Router()

router.route("/").get(videoController.apiGetVideos)
router.route("/:id").get(videoController.apiGetVideoByID)

export default router
import express from "express"
import userController from "./user.controller.js"

const router = express.Router()

router.route("/").post(userController.apiVerifyUser)

export default router
import Course from "../db/course.js";

export default class videoController{
    static async apiGetVideos(req, res, next){
        const {videos} = await Course.getVideos()

        let response = {
            videos: videos
        }

        res.json(response)
    }

    static async apiGetVideoByID(req, res, next){
        const {video} = await Course.getVideoByID(req.params.id)

        let response = {
            video: video
        }

        res.json(response)
    }
}
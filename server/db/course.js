import mongodb from "mongodb"

const ObjectId = mongodb.ObjectId
let dbName = process.env.URI

let course

export default class Course{
    static async DB(conn){
        if(course) return
        try{
            course = await conn.db(dbName).collection("videos")
            console.log('Successfully connected to Courses')
        }
        catch(err){
            console.log(`Unable to establish a collection handle in videos: ${err}`)
        }
    }

    static async getVideos(){
        let cursor

        try{
            cursor = await course.find({})
            let videos = await cursor.toArray()
            return {
                videos: videos
            }
        }
        catch(err){
            console.error(`Unable to issue find command, ${err}`)
            return {
                videos: []
            }
        }
    }

    static async getVideoByID(id){
        let cursor

        let i = id.split("-") 

        try{
            cursor = await course.find({})
            let video = await cursor.toArray()
            video = video[0].courses[i[0]].content[i[1]]
            return {
                video: video
            }
        }
        catch(err){
            console.error(`Unable to issue find command, ${err}`)
            return {
                video: []
            }
        }
    }
}
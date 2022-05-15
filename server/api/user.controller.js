import users from "../db/users.js";

export default class userController{

    static async apiVerifyUser(req, res, next){
        const {status} = await users.verifyUser(req.query)
        let response = {
            status: status
        }

        res.json(response)
    }
}
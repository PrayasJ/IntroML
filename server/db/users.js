import mongodb from "mongodb"

const ObjectId = mongodb.ObjectId
let dbName = process.env.URI

let user

export default class User{
    static async DB(conn){
        if(user) return
        try{
            user = await conn.db(dbName).collection("users")
            console.log('Successfully connected to Users')
        }
        catch(err){
            console.log(`Unable to establish a collection handle in users: ${err}`)
        }
    }

    static async verifyUser(query){
        let cursor 

        try{
            cursor = await user.findOne(
                    {"users.user": query.user},
            )
            let vals = await cursor
            if(vals == null) throw "Not Found"
            else{
                vals.users.forEach(u => {
                    if(u.user == query.user){
                        if(u.pass != query.pass){
                            throw "Incorrect Password"
                        }
                    }
                })    
            }
            return {
                status: "success"
            }
        }
        catch(err){
            console.error(`Unable to issue find command, ${err}`)
            return {
                status: "fail"
            }
        }
    }
}
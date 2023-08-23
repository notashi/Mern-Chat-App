//jwt helps us to authorize the user in our backend
/*ex: if we are logged in with a user but user is trying to access a resource that is only available to him so what jwt will do  user will
send a jwt token to the backend and bakc end will verify that this is user that is authorize to access a particular resource then only user will be allowed that resource.
This helps us alot in authorization
*/

const jwt = require("jsonwebtoken")
const generateToken =(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn :"30d",
    })
}
module.exports = generateToken
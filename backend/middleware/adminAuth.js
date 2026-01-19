//we need admin permission lilke adding product, removing product, display the orders and some other api
// to create admin authentiation we need to import JWT

import jwt from 'jsonwebtoken'
const adminAuth = async (req, res, next) =>{
    try {
    const {token} = req.headers
    //now will check if the token is available
        if(!token){
            return res.json({success:false, message:"Not authorized login again"}) //this will stop execution
        }
        //if the token is available we need to decode that token
        //in hhere weneed to store decoding string
        const token_decode = jwt.verify(token, process.env.JWT_SECRET)
        //NOW WE NEED TO CHECK DESCREPT CODE IS EQUAL TO ADMIN MAIL AND PASSWORD 
        //because userContoller we create token including email+passsord  ->  const token = jwt.sign(email+password,process.env.JWT_SECRET);
        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({success:false, message:"Not authorized login again"}) //this will stop execution
        }
        //if thge token is matching we call our call back function
        next()
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

export default  adminAuth
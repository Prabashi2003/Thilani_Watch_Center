import multer from "multer";
 //in here we create storage configeration

 //first we need to create diskstorage
 const storage = multer.diskStorage({
    filename:function(req, file,callback){
        callback(null, file.originalname)
    }
 })

 //using this disk storage we need to create one upload middleware
 const upload = multer({storage})

 export default upload
 
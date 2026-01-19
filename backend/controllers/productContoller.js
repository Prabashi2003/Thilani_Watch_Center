import {v2 as cloudinary} from "cloudinary"
import productModel from "../models/productmodel.js"

//in here we will create 4 contoller functions 
//add product, total product list, remove product, get the single product details

//funtion for add product -> POST-> add
const addProduct = async(req,res) =>{
    try {
        //from body get product details
        const {name,description, price, category, subCategory, sizes, bestSeller } = req.body

        //here we get images
        //now we need to create product image from req.files
        const image1 =req.files.image1 && req.files.image1[0] //this image is array so first image need to store array index [0]
        const image2 =req.files.image2 && req.files.image2[0]
        const image3 =req.files.image3 && req.files.image3[0]
        const image4 =req.files.image4 && req.files.image4[0]

        //now we need to store  this images to bd but we cannoth strore images directrly in db so first we need to put cloudinary it will create url
        const images = [image1,image2,image3,image4].filter((item)=> item !== undefined)

        let imagesUrl = await Promise.all(
            //need to map images and send individual item
            images.map(async (item) =>{
                let result = await cloudinary.uploader.upload(item.path, {resource_type:'image'}); //need to givr item path and and resouce type
                //after getting result the result will be secure url
                return result.secure_url //all these url are store in images url array
            })
        )

        // console.log(name,description, price, category, subCategory, sizes, bestSeller);
        // console.log(imagesUrl);

        //now we need to save these data into mongodb databse
        //need to create object
        const productData = {
            name,
            description,
            category,
            price: Number(price), //in form data price is string so need to convert number
            subCategory,
            bestSeller: bestSeller === "true" ? true : false,
            sizes: JSON.parse(sizes), //sizes are array so cannot send array directly 
            image: imagesUrl,
            date: Date.now()
        }

        console.log(productData);
        const product = new productModel(productData);
        await product.save()
        res.json({success:true, message:"Product Added"})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

//funtion for list product -> get -> list
const listProduct = async(req,res) =>{
    //in here using database product details we can display products in our frontend
    try {
        const products = await productModel.find({}); //save all products from bd
        res.json({success:true, products})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}
//funtion for remove product
const removeProduct = async(req,res) =>{
    try {
        await productModel.findByIdAndDelete(req.body.id)
        res.json({success:true, message:"Product removed successfully"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}
//funtion for single product info
const singleProduct = async(req,res) =>{
    try {
        const {productId} = req.body
        const product = await productModel.findById(productId)
        res.json({success:true, product})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

export {addProduct, listProduct, removeProduct, singleProduct}
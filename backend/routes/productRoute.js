import express from "express";
import {
  addProduct,
  listProduct,
  removeProduct,
  singleProduct,
} from "../controllers/productContoller.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

const productRoter = express.Router();

//multer is used in here addproduct route bcz we have to create multiple images that will be passed using multiple middleware
//inside fields we need will process multipart form data
productRoter.post("/add",adminAuth,upload.fields([  //in hete adminAuth is we need to authenticate use if it is authorized admin or not when the product add, remove
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]), addProduct
);
productRoter.get("/list", listProduct);
productRoter.post("/remove",adminAuth,removeProduct);
productRoter.post("/single", singleProduct);

export default productRoter;

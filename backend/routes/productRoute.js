import express from "express";
import {
  addProduct,
  listProduct,
  removeProduct,
  singleProduct,
} from "../controllers/productContoller.js";
import upload from "../middleware/multer.js";

const productRoter = express.Router();

//multer is used in here addproduct route bcz we have to create multiple images that will be passed using multiple middleware
//inside fields we need will process multipart form data
productRoter.post("/add",upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]), addProduct
);
productRoter.post("/list", listProduct);
productRoter.post("/removr", removeProduct);
productRoter.post("/single", singleProduct);

export default productRoter;

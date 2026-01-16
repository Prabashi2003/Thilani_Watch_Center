import mongoose from "mongoose";

//create scema for our product
//scema is a structure using that we can create a data in the database

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: Array, required: true },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  sizes: { type: Array, required: true },
  bestSeller: { type: Boolean },
  date: { type: Number, required: true },
});

// using this scema need to create product model
// when we run the program,  create product model miultiple times 
// when we run the product if the model is already created it will use  (mongoose.models.product) 
// otherwise it will create new one (| mongoose.model("product", productSchema))

const productModel = mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;

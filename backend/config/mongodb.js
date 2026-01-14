import mongoose from "mongoose";

//assync arrow function with the name connect DB 
const connectDB = async() => {
    mongoose.connection.on('connected', () => {
        console.log("DB Connected");
    })
    //add logic to connect our mongoos package from mongo db atlas server
    //inside {mongodb url}/ project name
    await mongoose.connect(`${process.env.MONGODB_URL}/COFFEE_SHOP`)
}

//export this functio
export default connectDB
import mongoose, { mongo } from "mongoose";

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },

    productDescription: {
        type: String,
    },
    price: {
        type: Number,
        required: true
    },
    ram : {
        type: String
    },
    rom : {
        type: String
    },
    processor: {
        type: String
    },
    gen: {
        type: Number
    },
    brand: {
        type: String
    },
    use: {
        type: String,
        enum: ['Gaming', 'Office', 'Personal', 'Student'],
    },  
    stock: {
        type: Number,
        default: 0
    },
    imageUrl: {
        type: String
    },
    imageName: {
        type: String
    },
    featured: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: true
    },
    rating:{
        type: Number,
        default: 0
    }
},{
    timestamps: true 

});

const Product = mongoose.model("Product",productSchema)

export default Product;
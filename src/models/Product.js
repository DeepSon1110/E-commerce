import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    productDescription: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    ram: {
      type: Number,
    },
    rom: {
      type: Number,
    },
    display: {
      type: String,
    },
    processor: {
      type: String,
    },
    stock: {
      type: Number,
      default: 0,
    },
    imageUrl: {
      type: String,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;

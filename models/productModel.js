import mongoose from "mongoose";

//Create schema
const productSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: [true, "Please complete the field"],
    },
    stock: {
      type: Number,
      required: [true, "Please complete the field"],
    },
    price: {
      type: Number,
      required: [true, "Please complete the field"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

//Create model from schema
export const ProductModel = mongoose.model("Product", productSchema);

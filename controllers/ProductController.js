import { ProductModel } from "../models/productModel.js";

export const getProducts = async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductModel.findById(id);
    if (!product) {
      return res.status(404).json(`Product with ID: ${id} not found !`);
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createProducts = async (req, res) => {
  try {
    const product = await ProductModel.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "An error has occured." });
  }
};

export const updateProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductModel.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductModel.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json(`Product with ID: ${id} not found !`);
    }
    res.status(200).json("Product successfully remove!");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

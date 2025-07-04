import productServices from "../services/productServices.js";

//create product
const createProduct = async (req, res) => {
  try {
    const product = req.body;

    if (!product) {
      return res.status(400).send({ message: "Product is required" });
    }

    if (!product.price) {
      return res.status(400).send({ message: "Price is required" });
    }

    const data = await productServices.createProduct(product);

    res.status(200).json({
      message: "Product created successfully",
      data,
    });
  } catch (err) {
    console.log(err.message);
    res.status(501).send("error occurs to create product");
  }
};

//get all product
const getAllProduct = async (req, res) => {
  try {
    const data = await productServices.getAllProduct();

    res.status(200).json({
      message: "Product retrieved successfully",
      data,
    });
  } catch (err) {
    console.log(err.message);
    res.status(400).send("error occurs to get product");
  }
};

//get single product by id
const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await productServices.getProductById(id);

    res.status(200).json({
      message: "product fetch successfully",
      data,
    });
  } catch (err) {
    console.log(err.message);
    res.status(400).send("error occurs to get product");
  }
};

//delete product by id
const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await productServices.deleteProduct(id);

    res.status(200).json({
      message: "product deleted successfully",
    });
  } catch (err) {
    console.log(err.message);
    res.status(400).send("error occurs to delete product");
  }
};

//update product
const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = req.body;

    const data = await productServices.updateProduct(id, product);

    res.status(200).json({
      message: "product updated successfully",
      data,
    });
  } catch (err) {
    console.log(err.message);
    res.status(400).send("error occurs to update product");
  }
};

export {
  createProduct,
  getAllProduct,
  getProductById,
  deleteProduct,
  updateProduct,
};

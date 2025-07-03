import productServices from "../services/productServices.js";

const createProduct = async (req, res) => {
  try {
    const product =  req.body;

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

export {createProduct};



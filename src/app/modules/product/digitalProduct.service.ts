import { DigitalProduct } from "./digitalProduct.model";
import { IDigitalProduct } from "./digitalProduct.interface";

const createProduct = async (payload: IDigitalProduct) => {
  const product = await DigitalProduct.create(payload);
  return product;
};

const getAllProducts = async () => {
  const products = await DigitalProduct.find({});
  const totalProducts = await DigitalProduct.countDocuments();

  return {
    data: products,
    meta: { total: totalProducts },
  };
};

export const DigitalProductService = {
  createProduct,
  getAllProducts,
};

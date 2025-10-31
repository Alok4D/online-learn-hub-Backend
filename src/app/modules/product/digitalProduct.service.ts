import { IDigitalProduct } from "./digitalProduct.interface";
import { DigitalProduct } from "./digitalProduct.model";

const createProduct = async (payload: IDigitalProduct) => {
  const product = await DigitalProduct.create(payload);
  return product;
};

const getAllProducts = async () => {
  const products = await DigitalProduct.find({});
  const total = await DigitalProduct.countDocuments();
  return {
    data: products,
    meta: { total }
  };
};

export const DigitalProductService = {
  createProduct,
  getAllProducts,
};

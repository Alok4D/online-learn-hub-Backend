import { IPayment, PaymentStatus } from "./payment.interface";
import { Payment } from "./payment.model";


const createPayment = async (payload: IPayment) => {
  const payment = await Payment.create(payload);
  return payment;
};

const getAllPayments = async () => {
  const payments = await Payment.find({})
    .populate("userId", "name email")
    .populate("productId", "name price")
    .populate("courseId", "title price");
  return payments;
};

const getPaymentById = async (id: string) => {
  const payment = await Payment.findById(id)
    .populate("userId", "name email")
    .populate("productId", "name price")
    .populate("courseId", "title price");
  return payment;
};

const updatePaymentStatus = async (id: string, status: PaymentStatus) => {
  const payment = await Payment.findByIdAndUpdate(
    id,
    { status },
    { new: true }
  );
  return payment;
};

const deletePayment = async (id: string) => {
  await Payment.findByIdAndDelete(id);
  return { message: "Payment deleted successfully" };
};

export const PaymentServices = {
  createPayment,
  getAllPayments,
  getPaymentById,
  updatePaymentStatus,
  deletePayment,
};

import { Types } from "mongoose";

export enum PaymentMethod {
  SSL_COMMERZ = "SSLCommerz",
  AMAR_PAY = "aamarPay",
  BKASH = "bKash",
  BANK_TRANSFER = "Bank Transfer",
  STRIPE = "Stripe",
  PAYPAL = "PayPal",
}

export enum PaymentStatus {
  PENDING = "Pending",
  SUCCESS = "Success",
  FAILED = "Failed",
  VERIFIED = "Verified",
}

export interface IPayment {
  _id?: Types.ObjectId;
  userId: Types.ObjectId | string;
  amount: number;
  method: PaymentMethod;
  status?: PaymentStatus;
  transactionId?: string;
  productId?: Types.ObjectId | string; // Digital Product ID
  courseId?: Types.ObjectId | string; // Course ID
  createdAt?: Date;
  updatedAt?: Date;
}

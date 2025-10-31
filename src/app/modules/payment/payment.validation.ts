import { z } from "zod";
import { PaymentMethod, PaymentStatus } from "./payment.interface";

// Payment create schema
export const createPaymentZodSchema = z.object({
  userId: z.string().nonempty("User ID is required"),
  amount: z
    .number({ message: "Amount must be a number" })
    .positive("Amount must be greater than 0"),
  method: z.enum(
    [
      PaymentMethod.SSL_COMMERZ,
      PaymentMethod.AMAR_PAY,
      PaymentMethod.BKASH,
      PaymentMethod.BANK_TRANSFER,
      PaymentMethod.STRIPE,
      PaymentMethod.PAYPAL,
    ],
    { message: "Invalid payment method" }
  ),
  status: z
    .enum([
      PaymentStatus.PENDING,
      PaymentStatus.SUCCESS,
      PaymentStatus.FAILED,
      PaymentStatus.VERIFIED,
    ])
    .optional(),
  transactionId: z.string().optional(),
  productId: z.string().optional(),
  courseId: z.string().optional(),
});

// Payment update/verify schema
export const updatePaymentZodSchema = z.object({
  status: z.enum([
    PaymentStatus.PENDING,
    PaymentStatus.SUCCESS,
    PaymentStatus.FAILED,
    PaymentStatus.VERIFIED,
  ]),
});

export const paymentValidations = {
  createPaymentZodSchema,
  updatePaymentZodSchema,
};

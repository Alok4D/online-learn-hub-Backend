import { model, Schema } from "mongoose";
import { IPayment, PaymentMethod, PaymentStatus } from "./payment.interface";


const paymentSchema = new Schema<IPayment>(
  {
    userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    amount: { type: Number, required: true },
    method: {
      type: String,
      enum: Object.values(PaymentMethod),
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(PaymentStatus),
      default: PaymentStatus.PENDING,
    },
    transactionId: { type: String },
    productId: { type: Schema.Types.ObjectId, ref: "DigitalProduct" },
    courseId: { type: Schema.Types.ObjectId, ref: "Course" },
  },
  { timestamps: true }
);

export const Payment = model<IPayment>("Payment", paymentSchema);

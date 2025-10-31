import { Router } from "express";
import { checkAuth } from "../../middleware/checkAuth";
import { Role } from "../user/user.interface";
import { paymentValidations } from "./payment.validation";
import validateRequest from "../../middleware/validateRequest";
import { PaymentControllers } from "./payment.controller";


const router = Router();

// Only admin can create/update/delete, users can view & create their own payment
router.post(
  "/",
  checkAuth(Role.USER),
  validateRequest(paymentValidations.createPaymentZodSchema),
  PaymentControllers.createPayment
);

router.get("/", checkAuth(Role.ADMIN), PaymentControllers.getAllPayments);
router.get("/:id", checkAuth(Role.ADMIN), PaymentControllers.getPaymentById);

router.put(
  "/:id",
  checkAuth(Role.ADMIN),
  validateRequest(paymentValidations.updatePaymentZodSchema),
  PaymentControllers.updatePaymentStatus
);

router.delete("/:id", checkAuth(Role.ADMIN), PaymentControllers.deletePayment);

export const PaymentRoutes = router;

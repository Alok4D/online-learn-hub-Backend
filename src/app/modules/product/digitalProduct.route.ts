import { Router } from "express";
import { DigitalProductController } from "./digitalProduct.controller";
import { checkAuth } from "../../middleware/checkAuth";
import { Role } from "../user/user.interface";
import validateRequest from "../../middleware/validateRequest";
import { digitalProductValidations } from "./digitalProduct.validation";

const router = Router();

// Create product (Admin only)
router.post(
  "/",
  checkAuth(Role.ADMIN),
  validateRequest(digitalProductValidations.createProductSchema),
  DigitalProductController.createProduct
);

// Public User
router.get("/", DigitalProductController.getAllProducts);

export const DigitalProductRoutes = router;

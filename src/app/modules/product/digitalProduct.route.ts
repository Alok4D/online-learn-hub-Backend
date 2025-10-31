import { Router } from "express";
import { DigitalProductController } from "./digitalProduct.controller";
import { checkAuth } from "../../middleware/checkAuth";
import { Role } from "../user/user.interface";

const router = Router();

// Admin only
router.post("/", checkAuth(Role.ADMIN), DigitalProductController.createProduct);
router.get("/", DigitalProductController.getAllProducts);

export const DigitalProductRoutes = router;

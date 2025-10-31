import { Router } from "express";
import { DashboardController } from "./dashboard.controller";
import { checkAuth } from "../../middleware/checkAuth";

const router = Router();

// ✅ Only Admin Can Access
router.get("/", checkAuth("admin"), DashboardController.getDashboardData);

export const DashboardRoutes = router;

import { Router } from "express";
import { checkAuth } from "../../middleware/checkAuth";
import { Role } from "../user/user.interface";
import { CertificateController } from "./certification.controller";
import validateRequest from "../../middleware/validateRequest";
import { certificateValidations } from "./certification.validation";

const router = Router();

// Admin only route for approving
router.put("/:id/approve", checkAuth(Role.ADMIN), CertificateController.approveCertificate);

// Student/Admin can fetch certificate
router.get("/:id", checkAuth(Role.ADMIN, Role.USER), CertificateController.getCertificate);

// Admin generates certificate
router.post(
  "/",
  checkAuth(Role.ADMIN),
  validateRequest(certificateValidations.createCertificateZodValidationSchema),
  CertificateController.createCertificate
);

export const CertificateRoutes = router;

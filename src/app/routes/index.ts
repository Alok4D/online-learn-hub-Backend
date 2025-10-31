import { Router } from "express";
import { courseRoutes } from "../modules/course/course.routes";
import { UserRoutes } from "../modules/user/user.route";
import { DigitalProductRoutes } from "../modules/product/digitalProduct.route";
import { EventRoutes } from "../modules/event/event.route";
import { PaymentRoutes } from "../modules/payment/payment.route";
import { CertificateRoutes } from "../modules/Certification/certification.routes";
import { DashboardRoutes } from "../modules/dashboard/dashboard.route";
import { MeetingRoutes } from "../modules/meeting/meeting.route";
import { reviewRoutes } from "../modules/reviewForStudent/review.routes";

const router = Router();

const moduleRoutes = [
  {
    path: "/register",
    route: UserRoutes,
  },

  {
    path: "/courses", // CourseRoutes
    route: courseRoutes,
  },
  {
    path: "/digital-products",
    route: DigitalProductRoutes,
  },
  {
    path: "/events",
    route: EventRoutes,
  },
  {
    path: "/payments",
    route: PaymentRoutes,
  },
  {
    path: "/certificates",
    route: CertificateRoutes,
  },
  {
    path: "/meetings",
    route: MeetingRoutes,
  },
  {
    path: "/dashboard",
    route: DashboardRoutes,
  },
  {
    path: "/reviews",
    route: reviewRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

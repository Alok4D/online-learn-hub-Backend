import { Router } from "express";
import { courseRoutes } from "../modules/course/course.routes";
import { reviewRoutes } from "../modules/Review/review.routes";
import { UserRoutes } from "../modules/user/user.route";
import { DigitalProductRoutes } from "../modules/product/digitalProduct.route";
import { EventRoutes } from "../modules/event/event.route";

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
    path: "/reviews",
    route: reviewRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

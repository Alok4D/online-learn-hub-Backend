import { Router } from "express";
import { courseRoutes } from "../modules/course/course.routes";
import { reviewRoutes } from "../modules/Review/review.routes";
import { UserRoutes } from "../modules/user/user.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/register",
    route: UserRoutes,
  },

  {
    path: "/courses",
    route: courseRoutes,
  },

  {
    path: "/reviews",
    route: reviewRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

import express, { Application, Request, Response } from "express";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import notFound from "./app/middleware/notFound";
// import router from "./app/routes";
import cors from "cors";
import { UserRoutes } from "./app/modules/user/user.route";
import { AuthRoutes } from "./app/auth/auth.route";

export const app: Application = express();

// middleware
app.use(cors());
app.use(express.json());

// API routes
app.use("/api/v1", UserRoutes);
app.use("/api/v1", AuthRoutes);  // /login

// test route
app.get("/", (req: Request, res: Response) => {
  res.send("🚀 LMS Server is Running");
});

// global error handler
app.use(globalErrorHandler);

// not found handler
app.use(notFound);



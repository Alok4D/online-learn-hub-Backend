import { Schema, model } from "mongoose";
import { IDashboardAnalytics } from "./dashboard.interface";

const dashboardSchema = new Schema<IDashboardAnalytics>(
  {
    totalUsers: { type: Number, default: 0 },
    totalRevenue: { type: Number, default: 0 },
    activeCourses: { type: Number, default: 0 },
    digitalProductSales: { type: Number, default: 0 },
    dailySalesGraph: [
      {
        date: String,
        sales: Number,
      },
    ],
    monthlySalesGraph: [
      {
        month: String,
        sales: Number,
      },
    ],
    topSellingItems: [
      {
        name: String,
        quantity: Number,
        revenue: Number,
      },
    ],
  },
  { timestamps: true }
);

export const Dashboard = model<IDashboardAnalytics>(
  "Dashboard",
  dashboardSchema
);

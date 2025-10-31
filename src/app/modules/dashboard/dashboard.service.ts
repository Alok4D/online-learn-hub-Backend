import { User } from "../user/user.model";
import { Payment } from "../payment/payment.model";
import { Course } from "../course/course.model";
import { DigitalProduct } from "../product/digitalProduct.model";
import { IDashboardAnalytics } from "./dashboard.interface";

const getDashboardAnalytics = async (): Promise<IDashboardAnalytics> => {
  // 1️⃣ Total Users
  const totalUsers = await User.countDocuments();

  // 2️⃣ Total Revenue (sum of all payments)
  const revenueAgg = await Payment.aggregate([
    { $group: { _id: null, total: { $sum: "$amount" } } },
  ]);
  const totalRevenue = revenueAgg[0]?.total || 0;

  // 3️⃣ Active Courses
  const activeCourses = await Course.countDocuments({ status: "active" });

  // 4️⃣ Digital Product Sales
  const digitalProductSales = await Payment.countDocuments({
    type: "digital_product",
  });

  // 5️⃣ Daily Sales Graph (last 7 days)
  const dailySalesGraph = await Payment.aggregate([
    {
      $group: {
        _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
        sales: { $sum: "$amount" },
      },
    },
    { $sort: { "_id": 1 } },
    { $limit: 7 },
  ]).then((data) =>
    data.map((d) => ({
      date: d._id,
      sales: d.sales,
    }))
  );

  // 6️⃣ Monthly Sales Graph (last 6 months)
  const monthlySalesGraph = await Payment.aggregate([
    {
      $group: {
        _id: { $month: "$createdAt" },
        sales: { $sum: "$amount" },
      },
    },
    { $sort: { "_id": 1 } },
    { $limit: 6 },
  ]).then((data) =>
    data.map((d) => ({
      month: new Date(2025, d._id - 1).toLocaleString("default", {
        month: "long",
      }),
      sales: d.sales,
    }))
  );

  // 7️⃣ Top Selling Items (Course + Product)
  const topSellingItems = await Payment.aggregate([
    {
      $group: {
        _id: "$itemName",
        quantity: { $sum: 1 },
        revenue: { $sum: "$amount" },
      },
    },
    { $sort: { revenue: -1 } },
    { $limit: 5 },
  ]).then((data) =>
    data.map((d) => ({
      name: d._id,
      quantity: d.quantity,
      revenue: d.revenue,
    }))
  );

  return {
    totalUsers,
    totalRevenue,
    activeCourses,
    digitalProductSales,
    dailySalesGraph,
    monthlySalesGraph,
    topSellingItems,
  };
};

export const DashboardService = {
  getDashboardAnalytics,
};

export interface IDashboardAnalytics {
  totalUsers: number;
  totalRevenue: number;
  activeCourses: number;
  digitalProductSales: number;
  dailySalesGraph: {
    date: string;
    sales: number;
  }[];
  monthlySalesGraph: {
    month: string;
    sales: number;
  }[];
  topSellingItems: {
    name: string;
    quantity: number;
    revenue: number;
  }[];
}

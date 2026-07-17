export interface DashboardMetric {
  label: string;
  value: number;
  change: number;
  changeLabel: string;
}

export interface ProductStatusSummary {
  status: string;
  count: number;
  percentage: number;
}

export interface DashboardTrendPoint {
  date: string;
  products: number;
  approved: number;
  rejected: number;
}

export interface DashboardData {
  metrics: DashboardMetric[];
  statusSummary: ProductStatusSummary[];
  importTrend: DashboardTrendPoint[];
  recentProducts: string[];
}

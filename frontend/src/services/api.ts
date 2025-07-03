import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api/v1';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export interface ExecutiveSummary {
  financial: {
    total_revenue_q4_2024: number;
    total_profit_q4_2024: number;
    profit_margin: number;
    avg_customer_satisfaction: number;
  };
  hr: {
    avg_retention_rate: number;
    avg_employee_satisfaction: number;
    total_employees: number;
    diversity_index: number;
  };
  security: {
    avg_response_time: number;
    total_recent_incidents: number;
    avg_safety_score: number;
    crime_prevention_effectiveness: number;
  };
}

export interface DashboardData {
  executive_summary: ExecutiveSummary;
  financial_trends: any;
  hr_analytics: any;
  security_analytics: any;
  data_narrative: {
    headline: string;
    subheading: string;
    body: string;
    key_metrics: {
      aerospace_revenue_2024: string;
      revenue_growth: string;
      rd_investment: string;
      customer_satisfaction: string;
    };
  };
}

export const fetchDashboardData = async (): Promise<DashboardData> => {
  try {
    const response = await api.get('/dashboard-data');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    throw error;
  }
};

export const fetchExecutiveSummary = async (): Promise<ExecutiveSummary> => {
  try {
    const response = await api.get('/executive-summary');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching executive summary:', error);
    throw error;
  }
};

export default api;

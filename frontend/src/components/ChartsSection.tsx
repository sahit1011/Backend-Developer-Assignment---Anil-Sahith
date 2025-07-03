import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart
} from 'recharts';
import { TrendingUp, Users, Shield, BarChart3, PieChart as PieChartIcon, Activity } from 'lucide-react';

interface ChartsSectionProps {
  financialTrends: any;
  hrAnalytics: any;
  securityAnalytics: any;
}

const COLORS = ['#3B82F6', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6', '#EC4899'];

// Custom tooltip component
const CustomTooltip = ({ active, payload, label, formatter }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
        <p className="font-semibold text-gray-900 mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {`${entry.name}: ${formatter ? formatter(entry.value) : entry.value}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function ChartsSection({ financialTrends, hrAnalytics, securityAnalytics }: ChartsSectionProps) {
  // Prepare financial trends data for Wayne Aerospace
  const aerospaceData = financialTrends['Wayne Aerospace'] ? 
    financialTrends['Wayne Aerospace'].quarters.map((quarter: string, index: number) => ({
      quarter,
      revenue: financialTrends['Wayne Aerospace'].revenue[index],
      profit: financialTrends['Wayne Aerospace'].profit[index],
      rd_investment: financialTrends['Wayne Aerospace'].rd_investment[index]
    })) : [];

  // Prepare HR satisfaction data
  const hrSatisfactionData = hrAnalytics.satisfaction_by_department ? 
    hrAnalytics.satisfaction_by_department.departments.map((dept: string, index: number) => ({
      department: dept.replace('Wayne ', ''),
      satisfaction: hrAnalytics.satisfaction_by_department.satisfaction_scores[index]
    })) : [];

  // Prepare security incidents data
  const securityIncidentsData = securityAnalytics.incidents_by_district ? 
    securityAnalytics.incidents_by_district.districts.map((district: string, index: number) => ({
      district,
      incidents: securityAnalytics.incidents_by_district.incidents[index]
    })) : [];

  // Prepare safety scores data for pie chart
  const safetyData = securityAnalytics.safety_by_district ? 
    securityAnalytics.safety_by_district.districts.map((district: string, index: number) => ({
      name: district,
      value: securityAnalytics.safety_by_district.safety_scores[index]
    })) : [];

  return (
    <section>
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Business Analytics</h2>
          <p className="text-gray-600">Comprehensive performance insights across all divisions</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Activity className="h-4 w-4" />
          <span>Real-time data</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Financial Trends Chart */}
        <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-blue-500 p-3 rounded-xl">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Wayne Aerospace Financial Performance</h3>
              <p className="text-sm text-gray-600">Quarterly revenue and investment trends</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={380}>
            <AreaChart data={aerospaceData} margin={{ top: 20, right: 30, left: 40, bottom: 60 }}>
              <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="profitGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="rdGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#F59E0B" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis
                dataKey="quarter"
                tick={{ fontSize: 11 }}
                angle={-45}
                textAnchor="end"
                height={80}
                interval={0}
              />
              <YAxis tick={{ fontSize: 12 }} label={{ value: 'Amount ($M)', angle: -90, position: 'insideLeft' }} />
              <Tooltip content={<CustomTooltip formatter={(value: number) => `$${value}M`} />} />
              <Legend />
              <Area type="monotone" dataKey="revenue" stroke="#3B82F6" fillOpacity={1} fill="url(#revenueGradient)" strokeWidth={3} name="Revenue" />
              <Area type="monotone" dataKey="profit" stroke="#10B981" fillOpacity={1} fill="url(#profitGradient)" strokeWidth={3} name="Profit" />
              <Area type="monotone" dataKey="rd_investment" stroke="#F59E0B" fillOpacity={1} fill="url(#rdGradient)" strokeWidth={3} name="R&D Investment" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* HR Satisfaction Chart */}
        <div className="bg-gradient-to-br from-white to-green-50 p-8 rounded-2xl shadow-xl border border-green-100 hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-green-500 p-3 rounded-xl">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Employee Satisfaction by Department</h3>
              <p className="text-sm text-gray-600">Workforce engagement metrics</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            {/* Donut Chart */}
            <div className="flex-1" style={{ outline: 'none' }}>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={hrSatisfactionData.map((item: any) => ({
                      ...item,
                      // Convert satisfaction score to percentage for better visual representation
                      value: (item.satisfaction / 10) * 100,
                      originalValue: item.satisfaction
                    }))}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    innerRadius={60}
                    fill="#8884d8"
                    dataKey="value"
                    stroke="#fff"
                    strokeWidth={3}
                    style={{ outline: 'none' }}
                  >
                    {hrSatisfactionData.map((_entry: any, index: number) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={['#10B981', '#3B82F6', '#8B5CF6'][index % 3]}
                        style={{ outline: 'none' }}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
                            <p className="font-semibold text-gray-900">{data.department}</p>
                            <p className="text-sm text-gray-600">
                              Satisfaction: <span className="font-semibold text-gray-900">{data.originalValue}/10</span>
                            </p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Department Legend with Scores */}
            <div className="flex-1 pl-8">
              <div className="space-y-4">
                {hrSatisfactionData.map((item: any, index: number) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: ['#10B981', '#3B82F6', '#8B5CF6'][index % 3] }}
                      ></div>
                      <span className="font-medium text-gray-900">{item.department}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">{item.satisfaction}/10</div>
                      <div className="text-xs text-gray-500">satisfaction score</div>
                    </div>
                  </div>
                ))}

                {/* Average Score */}
                <div className="mt-6 p-4 bg-gradient-to-r from-green-500 to-green-600 rounded-xl text-white">
                  <div className="text-center">
                    <div className="text-sm opacity-90">Average Satisfaction</div>
                    <div className="text-3xl font-bold">
                      {hrSatisfactionData.length > 0
                        ? (hrSatisfactionData.reduce((sum: number, item: any) => sum + item.satisfaction, 0) / hrSatisfactionData.length).toFixed(1)
                        : '0'}/10
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Incidents Chart */}
        <div className="bg-gradient-to-br from-white to-red-50 p-8 rounded-2xl shadow-xl border border-red-100 hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-red-500 p-3 rounded-xl">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Security Incidents by District</h3>
              <p className="text-sm text-gray-600">Gotham security operations</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={380}>
            <BarChart data={securityIncidentsData} margin={{ top: 20, right: 30, left: 40, bottom: 60 }}>
              <defs>
                <linearGradient id="incidentsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#EF4444" stopOpacity={0.9}/>
                  <stop offset="95%" stopColor="#EF4444" stopOpacity={0.6}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis
                dataKey="district"
                tick={{ fontSize: 11 }}
                angle={-45}
                textAnchor="end"
                height={80}
                interval={0}
              />
              <YAxis tick={{ fontSize: 12 }} label={{ value: 'Number of Incidents', angle: -90, position: 'insideLeft' }} />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
                        <p className="font-semibold text-gray-900 mb-1">{label}</p>
                        <p className="text-sm text-gray-600">
                          Incidents: <span className="font-semibold text-gray-900">{payload[0].value}</span>
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
                cursor={{ fill: 'transparent' }}
              />
              <Bar dataKey="incidents" fill="url(#incidentsGradient)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Safety Scores Pie Chart */}
        <div className="bg-gradient-to-br from-white to-purple-50 p-8 rounded-2xl shadow-xl border border-purple-100 hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-purple-500 p-3 rounded-xl">
              <PieChartIcon className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Public Safety Scores by District</h3>
              <p className="text-sm text-gray-600">District safety performance</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={safetyData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value?.toFixed(1) || '0'}`}
                outerRadius={100}
                innerRadius={40}
                fill="#8884d8"
                dataKey="value"
                stroke="#fff"
                strokeWidth={2}
                style={{ outline: 'none' }}
              >
                {safetyData.map((_entry: any, index: number) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    style={{ outline: 'none' }}
                  />
                ))}
              </Pie>
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
                        <p className="font-semibold text-gray-900">{data.name}</p>
                        <p className="text-sm text-gray-600">
                          Safety Score: <span className="font-semibold text-gray-900">{data.value?.toFixed(1) || '0'}/10</span>
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Additional Metrics Row */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-2xl shadow-xl text-white hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-white/20 p-3 rounded-xl">
              <Activity className="h-8 w-8 text-white" />
            </div>
            <div className="text-right">
              <div className="text-xs text-white/75">PERFORMANCE</div>
              <div className="text-sm font-semibold text-white">EXCELLENT</div>
            </div>
          </div>
          <h4 className="text-lg font-semibold mb-2 text-white">Response Time Performance</h4>
          <p className="text-4xl font-bold mb-2 text-white">
            {securityAnalytics.response_time_trends ?
              securityAnalytics.response_time_trends.response_times.slice(-1)[0]?.toFixed(1) : '0'} min
          </p>
          <p className="text-sm text-white/75">Average emergency response time</p>
          <div className="mt-4 bg-white/20 rounded-full h-2">
            <div className="bg-white h-2 rounded-full w-4/5"></div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 p-8 rounded-2xl shadow-xl text-white hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-white/20 p-3 rounded-xl">
              <Users className="h-8 w-8 text-white" />
            </div>
            <div className="text-right">
              <div className="text-xs text-white/75">WORKFORCE</div>
              <div className="text-sm font-semibold text-white">GROWING</div>
            </div>
          </div>
          <h4 className="text-lg font-semibold mb-2 text-white">Total Workforce</h4>
          <p className="text-4xl font-bold mb-2 text-white">
            {hrSatisfactionData.length > 0 ? '45,000+' : '0'}
          </p>
          <p className="text-sm text-white/75">Employees across all divisions</p>
          <div className="mt-4 bg-white/20 rounded-full h-2">
            <div className="bg-white h-2 rounded-full w-5/6"></div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-8 rounded-2xl shadow-xl text-white hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-white/20 p-3 rounded-xl">
              <BarChart3 className="h-8 w-8 text-white" />
            </div>
            <div className="text-right">
              <div className="text-xs text-white/75">MARKET</div>
              <div className="text-sm font-semibold text-white">LEADER</div>
            </div>
          </div>
          <h4 className="text-lg font-semibold mb-2 text-white">Market Leadership</h4>
          <p className="text-4xl font-bold mb-2 text-white">24.2%</p>
          <p className="text-sm text-white/75">Aerospace market share</p>
          <div className="mt-4 bg-white/20 rounded-full h-2">
            <div className="bg-white h-2 rounded-full w-1/4"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

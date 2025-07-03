'use client';

import { useEffect, useState } from 'react';
import { fetchDashboardData, DashboardData } from '@/services/api';
import ExecutiveSummaryCards from '@/components/ExecutiveSummaryCards';
import ChartsSection from '@/components/ChartsSection';
import DataNarrative from '@/components/DataNarrative';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        setLoading(true);
        const data = await fetchDashboardData();
        setDashboardData(data);
      } catch (err) {
        setError('Failed to load dashboard data. Please ensure the backend server is running.');
        console.error('Dashboard data loading error:', err);
      } finally {
        setLoading(false);
      }
    };

    loadDashboardData();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error Loading Dashboard</h1>
          <p className="text-gray-600">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!dashboardData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-600">No Data Available</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white shadow-2xl relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-yellow-400/20 to-transparent"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full transform translate-x-32 -translate-y-32"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              {/* Wayne Enterprises Logo */}
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-black font-bold text-2xl">W</span>
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Wayne Enterprises
                </h1>
                <p className="text-yellow-400 mt-1 font-medium">Executive Business Intelligence Dashboard</p>
                <div className="flex items-center space-x-4 mt-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    Live Data
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">
                    Q4 2024 Report
                  </span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <p className="text-sm text-gray-300 mb-1">Last Updated</p>
                <p className="text-xl font-bold text-white">{new Date().toLocaleDateString()}</p>
                <p className="text-xs text-yellow-400 mt-1">{new Date().toLocaleTimeString()}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom border gradient */}
        <div className="h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400"></div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl -z-10"></div>

        {/* Executive Summary Cards */}
        <div className="relative z-10">
          <ExecutiveSummaryCards summary={dashboardData.executive_summary} />
        </div>

        {/* Data Narrative - Newspaper Style */}
        <div className="relative z-10">
          <DataNarrative narrative={dashboardData.data_narrative} />
        </div>

        {/* Charts Section */}
        <div className="relative z-10">
          <ChartsSection
            financialTrends={dashboardData.financial_trends}
            hrAnalytics={dashboardData.hr_analytics}
            securityAnalytics={dashboardData.security_analytics}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white mt-20 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-yellow-400/20 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-lg">W</span>
                </div>
                <h3 className="text-xl font-bold">Wayne Enterprises</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Leading multinational conglomerate headquartered in Gotham City,
                driving innovation across aerospace, technology, and security sectors.
              </p>
            </div>

            {/* Quick Stats */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-yellow-400">Quick Stats</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Market Cap:</span>
                  <span className="text-white font-semibold">$2.1T</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Employees:</span>
                  <span className="text-white font-semibold">45,000+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Global Offices:</span>
                  <span className="text-white font-semibold">127</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Founded:</span>
                  <span className="text-white font-semibold">1939</span>
                </div>
              </div>
            </div>

            {/* Security Notice */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-red-400">Security Notice</h4>
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="text-red-300 text-sm mb-2">
                  <strong>CONFIDENTIAL</strong>
                </p>
                <p className="text-gray-400 text-xs leading-relaxed">
                  This dashboard contains proprietary business intelligence.
                  Unauthorized access or distribution is strictly prohibited.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-gray-300">© 2024 Wayne Enterprises. All rights reserved.</p>
                <p className="text-sm text-gray-500 mt-1">
                  Executive Business Intelligence Dashboard v2.1.0
                </p>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span>Powered by Wayne Tech</span>
                <span>•</span>
                <span>Secured by Wayne Security</span>
              </div>
            </div>
          </div>
        </div>

        {/* Top border gradient */}
        <div className="h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400"></div>
      </footer>
    </div>
  );
}

import { ExecutiveSummary } from '@/services/api';
import { TrendingUp, Users, Shield, DollarSign, ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface Props {
  summary: ExecutiveSummary;
}

export default function ExecutiveSummaryCards({ summary }: Props) {
  const cards = [
    {
      title: 'Total Revenue',
      subtitle: 'Q4 2024 Performance',
      value: `$${summary.financial.total_revenue_q4_2024.toFixed(1)}M`,
      change: `+${summary.financial.profit_margin}%`,
      changeLabel: 'profit margin',
      trend: 'up',
      icon: DollarSign,
      gradient: 'from-emerald-500 to-green-600',
      bgGradient: 'from-emerald-50 to-green-50',
      shadowColor: 'shadow-emerald-100',
      iconBg: 'bg-emerald-500',
      textColor: 'text-emerald-700',
      changeColor: 'text-emerald-600'
    },
    {
      title: 'Employee Satisfaction',
      subtitle: 'Workforce Excellence',
      value: `${summary.hr.avg_employee_satisfaction.toFixed(1)}/10`,
      change: `${summary.hr.avg_retention_rate.toFixed(1)}%`,
      changeLabel: 'retention rate',
      trend: 'up',
      icon: Users,
      gradient: 'from-blue-500 to-indigo-600',
      bgGradient: 'from-blue-50 to-indigo-50',
      shadowColor: 'shadow-blue-100',
      iconBg: 'bg-blue-500',
      textColor: 'text-blue-700',
      changeColor: 'text-blue-600'
    },
    {
      title: 'Security Performance',
      subtitle: 'Gotham Operations',
      value: `${summary.security.avg_safety_score.toFixed(1)}/10`,
      change: `${summary.security.avg_response_time.toFixed(1)}min`,
      changeLabel: 'avg response time',
      trend: 'down',
      icon: Shield,
      gradient: 'from-purple-500 to-violet-600',
      bgGradient: 'from-purple-50 to-violet-50',
      shadowColor: 'shadow-purple-100',
      iconBg: 'bg-purple-500',
      textColor: 'text-purple-700',
      changeColor: 'text-purple-600'
    },
    {
      title: 'Customer Satisfaction',
      subtitle: 'Market Leadership',
      value: `${summary.financial.avg_customer_satisfaction.toFixed(1)}/5.0`,
      change: `${summary.security.crime_prevention_effectiveness.toFixed(1)}%`,
      changeLabel: 'crime prevention',
      trend: 'up',
      icon: TrendingUp,
      gradient: 'from-amber-500 to-orange-600',
      bgGradient: 'from-amber-50 to-orange-50',
      shadowColor: 'shadow-amber-100',
      iconBg: 'bg-amber-500',
      textColor: 'text-amber-700',
      changeColor: 'text-amber-600'
    }
  ];

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Executive Summary</h2>
          <p className="text-gray-600">Key performance indicators for Wayne Enterprises</p>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-500">Last Updated</div>
          <div className="text-lg font-semibold text-gray-900">{new Date().toLocaleDateString()}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => {
          const IconComponent = card.icon;
          const TrendIcon = card.trend === 'up' ? ArrowUpRight : ArrowDownRight;

          return (
            <div
              key={index}
              className={`relative overflow-hidden bg-gradient-to-br ${card.bgGradient} border border-white/20 rounded-2xl p-6 ${card.shadowColor} shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group`}
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <div className={`w-full h-full bg-gradient-to-br ${card.gradient} rounded-full transform translate-x-8 -translate-y-8`}></div>
              </div>

              {/* Header */}
              <div className="flex items-start justify-between mb-6 relative z-10">
                <div className={`${card.iconBg} p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <div className={`flex items-center space-x-1 px-2 py-1 rounded-full bg-white/50 ${card.changeColor}`}>
                  <TrendIcon className="h-3 w-3" />
                  <span className="text-xs font-semibold">{card.change}</span>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="mb-2">
                  <h3 className={`text-sm font-semibold ${card.textColor} uppercase tracking-wide`}>
                    {card.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">{card.subtitle}</p>
                </div>

                <div className="mb-3">
                  <p className="text-3xl font-bold text-gray-900 leading-none">{card.value}</p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">{card.changeLabel}</span>
                  <div className={`w-2 h-2 rounded-full ${card.iconBg} animate-pulse`}></div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

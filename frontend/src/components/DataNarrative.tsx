import { Calendar, TrendingUp, DollarSign, Users, Zap } from 'lucide-react';

interface DataNarrativeProps {
  narrative: {
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

export default function DataNarrative({ narrative }: DataNarrativeProps) {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <section className="mb-12">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
        {/* Newspaper masthead */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
          <div className="px-8 py-6 border-b border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-xl">W</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold tracking-wide">WAYNE ENTERPRISES</h2>
                  <p className="text-yellow-400 text-sm font-medium">BUSINESS INTELLIGENCE REPORT</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-2 text-gray-300">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{formattedDate}</span>
                </div>
                <div className="text-yellow-400 text-xs mt-1">CONFIDENTIAL</div>
              </div>
            </div>
          </div>

          {/* Breaking news banner */}
          <div className="bg-red-600 px-8 py-2">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-white font-bold text-sm tracking-wider">BREAKING</span>
              <span className="text-white text-sm">Latest quarterly results exceed expectations</span>
            </div>
          </div>
        </div>

        {/* Main story */}
        <div className="p-8">
          {/* Headline section */}
          <div className="border-b-4 border-gray-900 pb-8 mb-8">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="text-red-600 font-bold text-sm tracking-wider mb-2">EXCLUSIVE REPORT</div>
                <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight font-serif">
                  {narrative.headline}
                </h1>
                <h2 className="text-2xl text-gray-600 font-medium leading-relaxed italic">
                  {narrative.subheading}
                </h2>
              </div>
              <div className="ml-8 text-right">
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="text-xs text-gray-500 uppercase tracking-wide">Edition</div>
                  <div className="text-2xl font-bold text-gray-900">Q4</div>
                  <div className="text-xs text-gray-500">2024</div>
                </div>
              </div>
            </div>

            {/* Byline */}
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <span>By <strong>Wayne Enterprises Analytics Team</strong></span>
              <span>•</span>
              <span>{formattedDate}</span>
              <span>•</span>
              <span className="text-blue-600">Business Intelligence</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Article body */}
            <div className="lg:col-span-2">
              {/* Drop cap and article */}
              <div className="relative">
                <div className="float-left text-8xl font-bold text-gray-900 leading-none mr-3 mt-2 font-serif">
                  {narrative.body.charAt(0)}
                </div>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed text-justify font-serif text-lg">
                    {narrative.body.substring(1)}
                  </p>
                </div>
              </div>

              {/* Quote section */}
              <div className="mt-8 border-l-4 border-yellow-500 pl-6 bg-yellow-50 py-4 rounded-r-lg">
                <blockquote className="text-xl italic text-gray-800 font-serif">
                  "Wayne Enterprises continues to demonstrate exceptional performance across all divisions,
                  reinforcing our position as Gotham's premier industrial conglomerate."
                </blockquote>
                <cite className="text-sm text-gray-600 mt-2 block">— Bruce Wayne, CEO</cite>
              </div>
            </div>

            {/* Enhanced metrics sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 shadow-lg">
                <div className="flex items-center space-x-2 mb-6">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide">
                    Key Metrics
                  </h3>
                </div>

                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <div className="flex items-center space-x-2 mb-2">
                      <DollarSign className="h-4 w-4 text-green-600" />
                      <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Aerospace Revenue</p>
                    </div>
                    <p className="text-3xl font-bold text-green-600">{narrative.key_metrics.aerospace_revenue_2024}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-green-600 h-2 rounded-full w-4/5"></div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingUp className="h-4 w-4 text-blue-600" />
                      <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Revenue Growth</p>
                    </div>
                    <p className="text-3xl font-bold text-blue-600">{narrative.key_metrics.revenue_growth}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-blue-600 h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <div className="flex items-center space-x-2 mb-2">
                      <Zap className="h-4 w-4 text-purple-600" />
                      <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">R&D Investment</p>
                    </div>
                    <p className="text-3xl font-bold text-purple-600">{narrative.key_metrics.rd_investment}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-purple-600 h-2 rounded-full w-5/6"></div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="h-4 w-4 text-orange-600" />
                      <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Customer Satisfaction</p>
                    </div>
                    <p className="text-3xl font-bold text-orange-600">{narrative.key_metrics.customer_satisfaction}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-orange-600 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                </div>

                {/* Market summary */}
                <div className="mt-6 pt-6 border-t border-gray-300">
                  <h4 className="font-bold text-gray-900 mb-3">Market Summary</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div className="flex justify-between">
                      <span>Stock Price:</span>
                      <span className="font-semibold text-green-600">$847.32 ↑</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Market Cap:</span>
                      <span className="font-semibold">$2.1T</span>
                    </div>
                    <div className="flex justify-between">
                      <span>P/E Ratio:</span>
                      <span className="font-semibold">18.4</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { TrendingUp, TrendingDown, Activity, Target } from 'lucide-react';

export function AnalyticsView() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-fg mb-2">Performance Analytics</h2>
        <p className="text-fg/60">Track your trading progress</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 gap-3">
        <MetricCard
          icon={<TrendingUp size={20} className="text-success" />}
          label="Total Profit"
          value="$2,345"
          change="+23.4%"
          positive={true}
        />
        <MetricCard
          icon={<Target size={20} className="text-accent" />}
          label="Win Rate"
          value="64.2%"
          change="+5.2%"
          positive={true}
        />
        <MetricCard
          icon={<Activity size={20} className="text-orange-500" />}
          label="Total Trades"
          value="250"
          change="+12"
          positive={true}
        />
        <MetricCard
          icon={<TrendingDown size={20} className="text-danger" />}
          label="Avg Loss"
          value="$45.20"
          change="-8.3%"
          positive={true}
        />
      </div>

      {/* Performance Chart */}
      <div className="bg-surface rounded-lg p-4 border border-fg/10">
        <h3 className="text-lg font-bold text-fg mb-4">Portfolio Growth</h3>
        <div className="h-48 bg-bg rounded-lg p-4">
          <svg viewBox="0 0 400 150" className="w-full h-full">
            {/* Grid */}
            <line x1="0" y1="37.5" x2="400" y2="37.5" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <line x1="0" y1="75" x2="400" y2="75" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <line x1="0" y1="112.5" x2="400" y2="112.5" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            
            {/* Area fill */}
            <path
              d="M 0 120 L 50 110 L 100 95 L 150 85 L 200 75 L 250 65 L 300 55 L 350 45 L 400 35 L 400 150 L 0 150 Z"
              fill="rgba(0, 82, 255, 0.1)"
            />
            
            {/* Line */}
            <polyline
              points="0,120 50,110 100,95 150,85 200,75 250,65 300,55 350,45 400,35"
              fill="none"
              stroke="#0052ff"
              strokeWidth="3"
            />
          </svg>
        </div>
        <div className="grid grid-cols-4 gap-2 mt-4">
          <div className="text-center">
            <p className="text-xs text-fg/60">Week 1</p>
            <p className="text-sm font-bold text-fg">$5,000</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-fg/60">Week 2</p>
            <p className="text-sm font-bold text-fg">$5,800</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-fg/60">Week 3</p>
            <p className="text-sm font-bold text-fg">$6,500</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-fg/60">Week 4</p>
            <p className="text-sm font-bold text-success">$7,565</p>
          </div>
        </div>
      </div>

      {/* Trading Stats */}
      <div className="bg-surface rounded-lg p-4 border border-fg/10">
        <h3 className="text-lg font-bold text-fg mb-4">Trading Statistics</h3>
        <div className="space-y-3">
          <StatBar label="Win Rate" value={64.2} color="success" />
          <StatBar label="Profit Factor" value={78.5} color="accent" />
          <StatBar label="Risk/Reward" value={55.3} color="orange" />
          <StatBar label="Consistency" value={82.1} color="success" />
        </div>
      </div>

      {/* Best Trades */}
      <div>
        <h3 className="text-lg font-bold text-fg mb-3">Best Performing Trades</h3>
        <div className="space-y-2">
          <TradeCard
            symbol="BTC/USD"
            profit={456.78}
            profitPercent={15.2}
            date="2 days ago"
          />
          <TradeCard
            symbol="ETH/USD"
            profit={234.56}
            profitPercent={12.8}
            date="5 days ago"
          />
          <TradeCard
            symbol="SOL/USD"
            profit={189.34}
            profitPercent={9.5}
            date="1 week ago"
          />
        </div>
      </div>
    </div>
  );
}

function MetricCard({
  icon,
  label,
  value,
  change,
  positive,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  change: string;
  positive: boolean;
}) {
  return (
    <div className="bg-surface rounded-lg p-4 border border-fg/10">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <span className="text-sm text-fg/60">{label}</span>
      </div>
      <p className="text-2xl font-bold text-fg mb-1">{value}</p>
      <p className={`text-sm font-medium ${positive ? 'text-success' : 'text-danger'}`}>
        {change}
      </p>
    </div>
  );
}

function StatBar({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: 'success' | 'accent' | 'orange';
}) {
  const colorClasses = {
    success: 'bg-success',
    accent: 'bg-accent',
    orange: 'bg-orange-500',
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm text-fg/60">{label}</span>
        <span className="text-sm font-bold text-fg">{value}%</span>
      </div>
      <div className="h-2 bg-bg rounded-full overflow-hidden">
        <div
          className={`h-full ${colorClasses[color]} rounded-full transition-all duration-300`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function TradeCard({
  symbol,
  profit,
  profitPercent,
  date,
}: {
  symbol: string;
  profit: number;
  profitPercent: number;
  date: string;
}) {
  return (
    <div className="flex items-center justify-between bg-surface rounded-lg p-3 border border-fg/10">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
          <TrendingUp size={20} className="text-success" />
        </div>
        <div>
          <p className="font-medium text-fg">{symbol}</p>
          <p className="text-xs text-fg/60">{date}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-bold text-success">+${profit.toFixed(2)}</p>
        <p className="text-xs text-success">+{profitPercent}%</p>
      </div>
    </div>
  );
}

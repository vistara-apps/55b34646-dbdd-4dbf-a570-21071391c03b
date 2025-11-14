'use client';

import { TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export function DashboardView() {
  return (
    <div className="space-y-6">
      {/* Portfolio Card */}
      <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-6 shadow-card">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-white/80 text-sm mb-1">Virtual Portfolio</p>
            <h2 className="text-4xl font-bold text-white">$7,565</h2>
            <p className="text-white/90 text-sm mt-1">+$1,234 (19.4%)</p>
          </div>
          <div className="w-24 h-16">
            <svg viewBox="0 0 100 50" className="w-full h-full">
              <polyline
                points="0,40 20,35 40,25 60,20 80,15 100,10"
                fill="none"
                stroke="white"
                strokeWidth="2"
                opacity="0.8"
              />
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/20">
          <div>
            <p className="text-white/70 text-xs mb-1">Trades</p>
            <p className="text-white font-bold text-lg">250</p>
          </div>
          <div>
            <p className="text-white/70 text-xs mb-1">Win Rate</p>
            <p className="text-white font-bold text-lg">64.2%</p>
          </div>
          <div>
            <p className="text-white/70 text-xs mb-1">P&L</p>
            <p className="text-white font-bold text-lg">+19.4%</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h3 className="text-lg font-bold text-fg mb-3">Trade Profile</h3>
        <div className="grid grid-cols-3 gap-3">
          <button className="bg-orange-500 text-white px-4 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">
            Pro
          </button>
          <button className="bg-surface text-fg px-4 py-3 rounded-lg font-medium hover:bg-surface/80 transition-colors">
            Secure
          </button>
          <button className="bg-surface text-fg px-4 py-3 rounded-lg font-medium hover:bg-surface/80 transition-colors">
            Diver
          </button>
        </div>
      </div>

      {/* Active Positions */}
      <div>
        <h3 className="text-lg font-bold text-fg mb-3">Active Positions</h3>
        <div className="space-y-3">
          <PositionCard
            symbol="BTC/USD"
            direction="long"
            pnl={892.24}
            pnlPercent={12.3}
          />
          <PositionCard
            symbol="ETH/USD"
            direction="long"
            pnl={543.05}
            pnlPercent={8.7}
          />
          <PositionCard
            symbol="SOL/USD"
            direction="short"
            pnl={-156.32}
            pnlPercent={-3.2}
          />
        </div>
      </div>

      {/* Recent Trades */}
      <div>
        <h3 className="text-lg font-bold text-fg mb-3">Recent Trades</h3>
        <div className="space-y-2">
          <TradeItem
            symbol="BTC/USD"
            profit={234.56}
            time="2h ago"
          />
          <TradeItem
            symbol="ETH/USD"
            profit={-89.23}
            time="5h ago"
          />
          <TradeItem
            symbol="MATIC/USD"
            profit={156.78}
            time="1d ago"
          />
        </div>
      </div>
    </div>
  );
}

function PositionCard({ 
  symbol, 
  direction, 
  pnl, 
  pnlPercent 
}: { 
  symbol: string; 
  direction: 'long' | 'short'; 
  pnl: number; 
  pnlPercent: number;
}) {
  const isProfit = pnl > 0;
  
  return (
    <div className="bg-surface rounded-lg p-4 border border-fg/10">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${direction === 'long' ? 'bg-success' : 'bg-danger'}`}></div>
          <span className="font-bold text-fg">{symbol}</span>
        </div>
        <span className={`text-sm font-medium ${isProfit ? 'text-success' : 'text-danger'}`}>
          {isProfit ? '+' : ''}{pnlPercent}%
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-fg/60 capitalize">{direction}</span>
        <span className={`text-lg font-bold ${isProfit ? 'text-success' : 'text-danger'}`}>
          {isProfit ? '+' : ''}${Math.abs(pnl).toFixed(2)}
        </span>
      </div>
    </div>
  );
}

function TradeItem({ 
  symbol, 
  profit, 
  time 
}: { 
  symbol: string; 
  profit: number; 
  time: string;
}) {
  const isProfit = profit > 0;
  
  return (
    <div className="flex items-center justify-between bg-surface rounded-lg p-3 border border-fg/10">
      <div className="flex items-center gap-3">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
          isProfit ? 'bg-success/20' : 'bg-danger/20'
        }`}>
          {isProfit ? (
            <ArrowUpRight size={16} className="text-success" />
          ) : (
            <ArrowDownRight size={16} className="text-danger" />
          )}
        </div>
        <div>
          <p className="font-medium text-fg">{symbol}</p>
          <p className="text-xs text-fg/60">{time}</p>
        </div>
      </div>
      <span className={`font-bold ${isProfit ? 'text-success' : 'text-danger'}`}>
        {isProfit ? '+' : ''}${Math.abs(profit).toFixed(2)}
      </span>
    </div>
  );
}

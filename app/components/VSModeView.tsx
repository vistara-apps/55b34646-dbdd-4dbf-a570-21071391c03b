'use client';

import { Clock, DollarSign, TrendingUp } from 'lucide-react';

export function VSModeView() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-fg mb-2">VS Mode</h2>
        <p className="text-fg/60">Challenge traders and prove your skills</p>
      </div>

      {/* Challenge Stats */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-surface rounded-lg p-4 text-center border border-fg/10">
          <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-2">
            <TrendingUp size={20} className="text-success" />
          </div>
          <p className="text-2xl font-bold text-fg">12</p>
          <p className="text-xs text-fg/60">Wins</p>
        </div>
        <div className="bg-surface rounded-lg p-4 text-center border border-fg/10">
          <div className="w-10 h-10 rounded-full bg-danger/20 flex items-center justify-center mx-auto mb-2">
            <TrendingUp size={20} className="text-danger rotate-180" />
          </div>
          <p className="text-2xl font-bold text-fg">5</p>
          <p className="text-xs text-fg/60">Losses</p>
        </div>
        <div className="bg-surface rounded-lg p-4 text-center border border-fg/10">
          <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-2">
            <DollarSign size={20} className="text-accent" />
          </div>
          <p className="text-2xl font-bold text-fg">71%</p>
          <p className="text-xs text-fg/60">Win Rate</p>
        </div>
      </div>

      {/* Trading Chart */}
      <div className="bg-surface rounded-lg p-4 border border-fg/10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
              <span className="text-white text-xs font-bold">₿</span>
            </div>
            <span className="font-bold text-fg">BTC/USD</span>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-fg">$69,150</p>
            <p className="text-sm text-success">+2.4%</p>
          </div>
        </div>
        
        {/* Simple Chart Visualization */}
        <div className="h-48 bg-bg rounded-lg p-4 mb-4">
          <svg viewBox="0 0 400 150" className="w-full h-full">
            {/* Grid lines */}
            <line x1="0" y1="37.5" x2="400" y2="37.5" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <line x1="0" y1="75" x2="400" y2="75" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <line x1="0" y1="112.5" x2="400" y2="112.5" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            
            {/* Candlesticks */}
            <rect x="20" y="60" width="8" height="40" fill="#ef4444" />
            <rect x="50" y="50" width="8" height="50" fill="#22c55e" />
            <rect x="80" y="40" width="8" height="60" fill="#22c55e" />
            <rect x="110" y="55" width="8" height="35" fill="#ef4444" />
            <rect x="140" y="45" width="8" height="45" fill="#22c55e" />
            <rect x="170" y="35" width="8" height="55" fill="#22c55e" />
            <rect x="200" y="50" width="8" height="40" fill="#ef4444" />
            <rect x="230" y="40" width="8" height="50" fill="#22c55e" />
            <rect x="260" y="30" width="8" height="60" fill="#22c55e" />
            <rect x="290" y="45" width="8" height="45" fill="#ef4444" />
            <rect x="320" y="35" width="8" height="55" fill="#22c55e" />
            <rect x="350" y="25" width="8" height="65" fill="#22c55e" />
          </svg>
        </div>

        {/* Challenge Info */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-fg/60">Challenge: Classic</span>
            <span className="text-sm font-medium text-fg">$5,000</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-fg/60">Leading: Leo's Pool</span>
            <span className="text-sm font-medium text-success">+$1,234</span>
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full bg-orange-500 text-white py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors">
          Exit Long
        </button>

        {/* Bottom Actions */}
        <div className="grid grid-cols-2 gap-3 mt-3">
          <button className="flex items-center justify-center gap-2 bg-bg text-fg py-3 rounded-lg font-medium hover:bg-bg/80 transition-colors">
            <Clock size={16} />
            <span className="text-sm">Exit Positions</span>
          </button>
          <button className="flex items-center justify-center gap-2 bg-bg text-fg py-3 rounded-lg font-medium hover:bg-bg/80 transition-colors">
            <TrendingUp size={16} />
            <span className="text-sm">Team Ratings</span>
          </button>
        </div>
      </div>

      {/* Create Challenge Button */}
      <button className="w-full bg-accent text-white py-4 rounded-lg font-bold hover:bg-accent/90 transition-colors shadow-button">
        Create New Challenge
      </button>
    </div>
  );
}

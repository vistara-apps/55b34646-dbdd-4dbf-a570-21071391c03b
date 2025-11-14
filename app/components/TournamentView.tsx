'use client';

import { Trophy, Users, Clock, DollarSign } from 'lucide-react';

export function TournamentView() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-fg mb-2">Group Battle</h2>
        <p className="text-fg/60">Compete with traders worldwide</p>
      </div>

      {/* Tournament Stats */}
      <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-6 shadow-card">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-white/80 text-sm mb-1">Current Tournament</p>
            <h3 className="text-2xl font-bold text-white">Weekly Masters</h3>
          </div>
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
            <Trophy size={24} className="text-white" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
          <div>
            <p className="text-white/70 text-xs mb-1">Your Balance</p>
            <p className="text-white font-bold text-xl">$1,6169</p>
            <p className="text-white/90 text-sm">+$4,169 (84.6%)</p>
          </div>
          <div>
            <p className="text-white/70 text-xs mb-1">Your Rank</p>
            <p className="text-white font-bold text-xl">#3</p>
            <p className="text-white/90 text-sm">of 156 traders</p>
          </div>
        </div>
      </div>

      {/* Tournament Info */}
      <div className="grid grid-cols-4 gap-2">
        <div className="bg-surface rounded-lg p-3 text-center border border-fg/10">
          <Users size={16} className="text-accent mx-auto mb-1" />
          <p className="text-xs text-fg/60">Participants</p>
          <p className="text-sm font-bold text-fg">156</p>
        </div>
        <div className="bg-surface rounded-lg p-3 text-center border border-fg/10">
          <DollarSign size={16} className="text-accent mx-auto mb-1" />
          <p className="text-xs text-fg/60">Prize Pool</p>
          <p className="text-sm font-bold text-fg">$5,000</p>
        </div>
        <div className="bg-surface rounded-lg p-3 text-center border border-fg/10">
          <Clock size={16} className="text-accent mx-auto mb-1" />
          <p className="text-xs text-fg/60">Time Left</p>
          <p className="text-sm font-bold text-fg">2d 5h</p>
        </div>
        <div className="bg-surface rounded-lg p-3 text-center border border-fg/10">
          <Trophy size={16} className="text-accent mx-auto mb-1" />
          <p className="text-xs text-fg/60">Entry Fee</p>
          <p className="text-sm font-bold text-fg">$50</p>
        </div>
      </div>

      {/* Leaderboard */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-fg">Current Scores</h3>
          <button className="text-sm text-accent font-medium">View All</button>
        </div>
        <div className="space-y-2">
          <LeaderboardItem
            rank={1}
            name="Leo Titan"
            avatar="🦁"
            balance="$3,430"
            profit="+$2,430"
            profitPercent="+243%"
            isTop={true}
          />
          <LeaderboardItem
            rank={2}
            name="Max Algo Profit"
            avatar="🤖"
            balance="$2,169"
            profit="+$1,169"
            profitPercent="+116.9%"
            isTop={true}
          />
          <LeaderboardItem
            rank={3}
            name="Marching Loot"
            avatar="🎯"
            balance="$1,6169"
            profit="+$4,169"
            profitPercent="+84.6%"
            isTop={true}
            isYou={true}
          />
          <LeaderboardItem
            rank={4}
            name="More Winning Lions"
            avatar="🦁"
            balance="$3,480"
            profit="+$2,480"
            profitPercent="+71.4%"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-3 gap-3">
        <button className="flex flex-col items-center gap-1 bg-surface text-fg py-3 rounded-lg hover:bg-surface/80 transition-colors border border-fg/10">
          <Users size={18} />
          <span className="text-xs font-medium">Leaderboard</span>
        </button>
        <button className="flex flex-col items-center gap-1 bg-surface text-fg py-3 rounded-lg hover:bg-surface/80 transition-colors border border-fg/10">
          <Trophy size={18} />
          <span className="text-xs font-medium">Prizes</span>
        </button>
        <button className="flex flex-col items-center gap-1 bg-surface text-fg py-3 rounded-lg hover:bg-surface/80 transition-colors border border-fg/10">
          <Clock size={18} />
          <span className="text-xs font-medium">History</span>
        </button>
      </div>
    </div>
  );
}

function LeaderboardItem({
  rank,
  name,
  avatar,
  balance,
  profit,
  profitPercent,
  isTop = false,
  isYou = false,
}: {
  rank: number;
  name: string;
  avatar: string;
  balance: string;
  profit: string;
  profitPercent: string;
  isTop?: boolean;
  isYou?: boolean;
}) {
  return (
    <div className={`flex items-center justify-between bg-surface rounded-lg p-3 border ${
      isYou ? 'border-accent' : 'border-fg/10'
    }`}>
      <div className="flex items-center gap-3">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-lg ${
          isTop ? 'bg-gradient-to-br from-orange-500 to-orange-600' : 'bg-fg/10'
        }`}>
          {isTop ? '🏆' : avatar}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <p className="font-medium text-fg">{name}</p>
            {isYou && (
              <span className="px-2 py-0.5 bg-accent/20 text-accent text-xs rounded-full font-medium">
                You
              </span>
            )}
          </div>
          <p className="text-xs text-fg/60">Rank #{rank}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-bold text-fg">{balance}</p>
        <p className="text-xs text-success">{profitPercent}</p>
      </div>
    </div>
  );
}

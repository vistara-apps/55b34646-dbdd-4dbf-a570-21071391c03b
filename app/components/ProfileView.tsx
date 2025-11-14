'use client';

import { User, Trophy, TrendingUp, Award, Settings2, LogOut } from 'lucide-react';

export function ProfileView() {
  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-gradient-to-br from-accent to-primary rounded-lg p-6 shadow-card">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-4xl">
            👤
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Trading Pro</h2>
            <p className="text-white/80">@tradingpro</p>
            <p className="text-white/60 text-sm mt-1">Member since Jan 2024</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/20">
          <div className="text-center">
            <p className="text-white/70 text-xs mb-1">Rank</p>
            <p className="text-white font-bold text-lg">#42</p>
          </div>
          <div className="text-center">
            <p className="text-white/70 text-xs mb-1">Level</p>
            <p className="text-white font-bold text-lg">Pro</p>
          </div>
          <div className="text-center">
            <p className="text-white/70 text-xs mb-1">XP</p>
            <p className="text-white font-bold text-lg">2,450</p>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 gap-3">
        <StatCard
          icon={<Trophy size={20} className="text-orange-500" />}
          label="Tournaments Won"
          value="8"
        />
        <StatCard
          icon={<TrendingUp size={20} className="text-success" />}
          label="Total Profit"
          value="$12,345"
        />
        <StatCard
          icon={<Award size={20} className="text-accent" />}
          label="Challenges Won"
          value="24"
        />
        <StatCard
          icon={<User size={20} className="text-fg" />}
          label="Win Rate"
          value="68.5%"
        />
      </div>

      {/* Achievements */}
      <div>
        <h3 className="text-lg font-bold text-fg mb-3">Achievements</h3>
        <div className="grid grid-cols-3 gap-3">
          <AchievementBadge emoji="🏆" label="First Win" unlocked={true} />
          <AchievementBadge emoji="💎" label="Diamond Hands" unlocked={true} />
          <AchievementBadge emoji="🔥" label="Hot Streak" unlocked={true} />
          <AchievementBadge emoji="⚡" label="Speed Trader" unlocked={false} />
          <AchievementBadge emoji="🎯" label="Sniper" unlocked={false} />
          <AchievementBadge emoji="👑" label="Champion" unlocked={false} />
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h3 className="text-lg font-bold text-fg mb-3">Recent Activity</h3>
        <div className="space-y-2">
          <ActivityItem
            icon={<Trophy size={16} className="text-orange-500" />}
            text="Won Weekly Masters Tournament"
            time="2 days ago"
          />
          <ActivityItem
            icon={<TrendingUp size={16} className="text-success" />}
            text="Achieved 70% win rate milestone"
            time="5 days ago"
          />
          <ActivityItem
            icon={<Award size={16} className="text-accent" />}
            text="Completed 100 trades"
            time="1 week ago"
          />
        </div>
      </div>

      {/* Settings */}
      <div className="space-y-2">
        <button className="w-full flex items-center justify-between bg-surface text-fg py-4 px-4 rounded-lg hover:bg-surface/80 transition-colors border border-fg/10">
          <div className="flex items-center gap-3">
            <Settings2 size={20} />
            <span className="font-medium">Settings</span>
          </div>
          <span className="text-fg/40">›</span>
        </button>
        <button className="w-full flex items-center justify-between bg-surface text-danger py-4 px-4 rounded-lg hover:bg-surface/80 transition-colors border border-fg/10">
          <div className="flex items-center gap-3">
            <LogOut size={20} />
            <span className="font-medium">Disconnect Wallet</span>
          </div>
          <span className="text-fg/40">›</span>
        </button>
      </div>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="bg-surface rounded-lg p-4 border border-fg/10">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <span className="text-sm text-fg/60">{label}</span>
      </div>
      <p className="text-2xl font-bold text-fg">{value}</p>
    </div>
  );
}

function AchievementBadge({
  emoji,
  label,
  unlocked,
}: {
  emoji: string;
  label: string;
  unlocked: boolean;
}) {
  return (
    <div className={`bg-surface rounded-lg p-3 text-center border ${
      unlocked ? 'border-accent' : 'border-fg/10'
    }`}>
      <div className={`text-3xl mb-1 ${!unlocked && 'opacity-30 grayscale'}`}>
        {emoji}
      </div>
      <p className={`text-xs font-medium ${unlocked ? 'text-fg' : 'text-fg/40'}`}>
        {label}
      </p>
    </div>
  );
}

function ActivityItem({
  icon,
  text,
  time,
}: {
  icon: React.ReactNode;
  text: string;
  time: string;
}) {
  return (
    <div className="flex items-center gap-3 bg-surface rounded-lg p-3 border border-fg/10">
      <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium text-fg">{text}</p>
        <p className="text-xs text-fg/60">{time}</p>
      </div>
    </div>
  );
}

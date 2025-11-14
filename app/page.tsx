'use client';

import { useEffect, useState } from 'react';
import { sdk } from '@farcaster/miniapp-sdk';
import { Home, Trophy, Swords, BarChart3, User } from 'lucide-react';
import { DashboardView } from './components/DashboardView';
import { VSModeView } from './components/VSModeView';
import { TournamentView } from './components/TournamentView';
import { AnalyticsView } from './components/AnalyticsView';
import { ProfileView } from './components/ProfileView';

type View = 'dashboard' | 'vs-mode' | 'tournament' | 'analytics' | 'profile';

export default function Home() {
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    sdk.actions.ready();
    setIsReady(true);
  }, []);

  if (!isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-fg/60">Loading Monad Academy...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-bg pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-fg/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-fg">Monad Academy</h1>
              <p className="text-xs text-fg/60">Master Trading</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors">
            Connect Wallet
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        {currentView === 'dashboard' && <DashboardView />}
        {currentView === 'vs-mode' && <VSModeView />}
        {currentView === 'tournament' && <TournamentView />}
        {currentView === 'analytics' && <AnalyticsView />}
        {currentView === 'profile' && <ProfileView />}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-surface/95 backdrop-blur-sm border-t border-fg/10">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-around">
          <NavButton
            icon={<Home size={20} />}
            label="Home"
            active={currentView === 'dashboard'}
            onClick={() => setCurrentView('dashboard')}
          />
          <NavButton
            icon={<Swords size={20} />}
            label="VS Mode"
            active={currentView === 'vs-mode'}
            onClick={() => setCurrentView('vs-mode')}
          />
          <NavButton
            icon={<Trophy size={20} />}
            label="Battles"
            active={currentView === 'tournament'}
            onClick={() => setCurrentView('tournament')}
          />
          <NavButton
            icon={<BarChart3 size={20} />}
            label="Stats"
            active={currentView === 'analytics'}
            onClick={() => setCurrentView('analytics')}
          />
          <NavButton
            icon={<User size={20} />}
            label="Profile"
            active={currentView === 'profile'}
            onClick={() => setCurrentView('profile')}
          />
        </div>
      </nav>
    </main>
  );
}

function NavButton({ 
  icon, 
  label, 
  active, 
  onClick 
}: { 
  icon: React.ReactNode; 
  label: string; 
  active: boolean; 
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
        active 
          ? 'text-accent' 
          : 'text-fg/60 hover:text-fg'
      }`}
    >
      {icon}
      <span className="text-xs font-medium">{label}</span>
    </button>
  );
}

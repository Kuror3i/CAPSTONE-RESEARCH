import { useState } from 'react';
import {
  LayoutDashboard,
  Calendar,
  Activity,
  MapPin,
  Search,
  Monitor,
  MessageSquare,
  Users,
  Settings,
  LogOut,
  ArrowLeft,
  Eye,
  EyeOff,
} from 'lucide-react';
import { DashboardHome } from './DashboardHome';
import { ReservationsScreen } from './ReservationsScreen';
import { ActiveSessionsScreen } from './ActiveSessionsScreen';
import { VisitorActivityScreen } from './VisitorActivityScreen';
import { WorkspaceStatusScreen } from './WorkspaceStatusScreen';
import { RecordSearchScreen } from './RecordSearchScreen';
import { KioskStatusScreen } from './KioskStatusScreen';
import { StaffAssistantScreen } from './StaffAssistantScreen';
import { SettingsScreen } from './SettingsScreen';

type StaffPage =
  | 'home'
  | 'reservations'
  | 'active-sessions'
  | 'visitor-activity'
  | 'workspace-status'
  | 'record-search'
  | 'kiosk-status'
  | 'staff-assistant'
  | 'settings';

interface StaffAppProps {
  onBack: () => void;
}

function StaffLoginScreen({ onLogin, onBack }: { onLogin: () => void; onBack: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showForgot, setShowForgot] = useState(false);

  if (showForgot) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-24 h-24 mx-auto mb-4 bg-[#009689] rounded-full flex items-center justify-center">
              <span className="text-white text-4xl font-bold">D</span>
            </div>
            <h1 className="text-2xl font-bold text-[#009689]">DeskAtlas</h1>
            <p className="text-gray-600 text-sm mt-1">Staff Portal</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Reset Password</h2>
            <p className="text-gray-600 text-sm mb-6">Enter your email and we'll send you a reset link.</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009689] mb-4"
            />
            <button
              onClick={() => setShowForgot(false)}
              className="w-full py-3 bg-[#009689] text-white rounded-lg hover:bg-[#00796b] transition-colors font-medium"
            >
              Send Reset Link
            </button>
          </div>
          <div className="mt-6 text-center">
            <button onClick={() => setShowForgot(false)} className="inline-flex items-center gap-2 text-gray-600 hover:text-[#009689] text-sm">
              <ArrowLeft className="w-4 h-4" /> Back to login
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleLogin = () => {
    if (email && password) onLogin();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-24 h-24 mx-auto mb-4 bg-[#009689] rounded-full flex items-center justify-center">
            <span className="text-white text-4xl font-bold">D</span>
          </div>
          <h1 className="text-2xl font-bold text-[#009689]">DeskAtlas</h1>
          <p className="text-gray-600 text-sm mt-1">Staff Portal</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009689] focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009689] focus:border-transparent pr-12"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-[#009689] border-gray-300 rounded focus:ring-[#009689]"
                />
                <span className="text-sm text-gray-700">Remember Me</span>
              </label>
              <button
                onClick={handleLogin}
                className="px-8 py-3 bg-[#009689] text-white rounded-lg hover:bg-[#00796b] transition-colors font-medium"
              >
                Log In
              </button>
            </div>
          </div>
          <div className="mt-6 text-center">
            <button onClick={() => setShowForgot(true)} className="text-sm text-gray-600 hover:text-[#009689]">
              Lost your password?
            </button>
          </div>
        </div>
        <div className="mt-6 text-center">
          <button onClick={onBack} className="inline-flex items-center gap-2 text-gray-600 hover:text-[#009689] text-sm">
            <ArrowLeft className="w-4 h-4" /> Go back to role selection
          </button>
        </div>
      </div>
    </div>
  );
}

export function StaffApp({ onBack }: StaffAppProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState<StaffPage>('home');

  const navItems: { id: StaffPage; label: string; icon: any }[] = [
    { id: 'home', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'reservations', label: 'Reservations', icon: Calendar },
    { id: 'active-sessions', label: 'Active Sessions', icon: Activity },
    { id: 'visitor-activity', label: 'Visitor Activity', icon: Users },
    { id: 'workspace-status', label: 'Workspace Map', icon: MapPin },
    { id: 'record-search', label: 'Record Search', icon: Search },
    { id: 'kiosk-status', label: 'Kiosk Status', icon: Monitor },
    { id: 'staff-assistant', label: 'Staff Assistant', icon: MessageSquare },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  if (!isAuthenticated) {
    return (
      <StaffLoginScreen
        onLogin={() => setIsAuthenticated(true)}
        onBack={onBack}
      />
    );
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <DashboardHome onNavigate={setCurrentPage} />;
      case 'reservations': return <ReservationsScreen />;
      case 'active-sessions': return <ActiveSessionsScreen />;
      case 'visitor-activity': return <VisitorActivityScreen />;
      case 'workspace-status': return <WorkspaceStatusScreen />;
      case 'record-search': return <RecordSearchScreen />;
      case 'kiosk-status': return <KioskStatusScreen />;
      case 'staff-assistant': return <StaffAssistantScreen />;
      case 'settings': return <SettingsScreen />;
      default: return <DashboardHome onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-900">Staff Dashboard</h1>
          <p className="text-sm text-[#009689] font-medium mt-1">DeskAtlas</p>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive ? 'bg-[#e0f2f1] text-[#009689]' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-[#e0f2f1] flex items-center justify-center">
              <span className="text-sm font-medium text-[#009689]">ST</span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Staff User</p>
              <p className="text-xs text-gray-500">staff@deskatlas.com</p>
            </div>
          </div>
          <button
            onClick={() => { setIsAuthenticated(false); onBack(); }}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {renderPage()}
      </main>
    </div>
  );
}

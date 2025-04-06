import { useNavigate, useLocation, NavLink, Navigate, Route, Routes } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import {
  FiSearch, FiHome, FiMessageSquare, FiDollarSign, FiTrendingUp,
  FiBookOpen, FiPieChart, FiBarChart2, FiCalendar, FiHelpCircle,
  FiInfo, FiLogOut
} from 'react-icons/fi';

import './AppLayout.css';

import Dashboard from './pages/Dashboard';
import AIChatbot from './pages/AIChatbot';
import ExpenseTracker from './pages/ExpenseTracker';
import SIPCalculator from './pages/SIPCalculator';
import FinancialNews from './pages/FinancialNews';
import StockSuggestions from './pages/StockSuggestions';
import LiveStocks from './pages/LiveStocks';
import FinancialPlanner from './pages/FinancialPlanner';
import FinancialQuiz from './pages/FinancialQuiz';
import AboutApp from './pages/AboutApp';

function AppLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const sidebarRef = useRef(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user] = useState({ email: 'user@example.com' });

  const menuItems = [
    { path: 'main', label: 'Dashboard', icon: <FiHome className="mr-3" />, active: false },
    { path: 'chatbot', label: 'AI Chatbot', icon: <FiMessageSquare className="mr-3" />, active: true },
    { path: 'expenses', label: 'Expense Tracker', icon: <FiDollarSign className="mr-3" />, active: true },
    { path: 'sip-calculator', label: 'SIP Calculator', icon: <FiTrendingUp className="mr-3" />, active: true },
    { path: 'financial-news', label: 'Financial News', icon: <FiBookOpen className="mr-3" />, active: false },
    { path: 'stock-suggestions', label: 'Stock Suggestions', icon: <FiPieChart className="mr-3" />, active: false },
    { path: 'live-stocks', label: 'Live Stocks', icon: <FiBarChart2 className="mr-3" />, active: true },
    { path: 'plans', label: 'Financial Planner', icon: <FiCalendar className="mr-3" />, active: true },
    { path: 'financial-quiz', label: 'Financial Quiz', icon: <FiHelpCircle className="mr-3" />, active: true },
    { path: 'about-app', label: 'About', icon: <FiInfo className="mr-3" />, active: false },
  ];

  useEffect(() => {
    setSidebarOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    }

    if (sidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarOpen]);

  const handleLogout = () => navigate('/login');

  return (
    <div className="app-layout relative">
      {/* Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside ref={sidebarRef} className={`sidebar ${sidebarOpen ? 'open' : ''} z-30`}>
        <div className="brand">
          <span className="bg-blue-100 p-2 rounded-lg mr-2">🪙</span>
          BudgetBeacon(BB)
        </div>
        <div className="subtitle">Plan smart. Spend wisely. Live freely.</div>
        <nav>
          <ul>
            {menuItems.map(({ path, label, icon, active }) => (
              <li key={path}>
                <NavLink
                  to={`/dashboard/${path}`}
                  onClick={() => setSidebarOpen(false)}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  {icon}
                  {label}
                  <span className={`status-dot ${active ? 'bg-green-400' : 'bg-gray-300'}`}></span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="main-container z-10 relative">
        <header className="topbar">
          <div className="flex items-center justify-between w-full">
            <h1>{menuItems.find(item => location.pathname.includes(item.path))?.label || 'Dashboard'}</h1>
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="toggle-btn md:hidden">
              ☰
            </button>
          </div>
          <div className="profile">
            <div className="search-bar">
              <FiSearch />
              <input type="text" placeholder="Search features..." />
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="profile-icon">
                  {user?.email.charAt(0).toUpperCase()}
                </div>
                <span className="text-sm text-gray-600 hidden md:inline">{user?.email}</span>
              </div>
              <button onClick={handleLogout} className="logout-btn">
                <FiLogOut />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </header>

        <main className="content-wrapper">
          <Routes>
            <Route index element={<Navigate to="main" />} />
            <Route path="main" element={<Dashboard />} />
            <Route path="chatbot" element={<AIChatbot />} />
            <Route path="expenses" element={<ExpenseTracker />} />
            <Route path="sip-calculator" element={<SIPCalculator />} />
            <Route path="financial-news" element={<FinancialNews />} />
            <Route path="stock-suggestions" element={<StockSuggestions />} />
            <Route path="live-stocks" element={<LiveStocks />} />
            <Route path="plans" element={<FinancialPlanner />} />
            <Route path="financial-quiz" element={<FinancialQuiz />} />
            <Route path="about-app" element={<AboutApp />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

<footer className="footer text-center p-4 text-gray-600 text-sm">
  © {new Date().getFullYear()} BudgetBeacon. All rights reserved. <br />
  <em>Plan smart. Spend wisely. Live freely.</em>
</footer>

export default AppLayout;

// src/menuItems.js

import { FaHome, FaRobot, FaChartLine, FaCalculator, FaNewspaper, FaLightbulb, FaStore, FaClipboardList, FaQuestionCircle, FaInfoCircle, FaCogs } from 'react-icons/fa';

export const menuItems = [
  { 
    path: 'main', 
    label: 'Dashboard', 
    icon: <FaHome /> 
  },
  { 
    path: 'chatbot', 
    label: 'AI Chatbot', 
    icon: <FaRobot /> 
  },
  { 
    path: 'expenses', 
    label: 'Expense Tracker', 
    icon: <FaChartLine /> 
  },
  { 
    path: 'sip-calculator', 
    label: 'SIP Calculator', 
    icon: <FaCalculator /> 
  },
  { 
    path: 'financial-news', 
    label: 'Financial News', 
    icon: <FaNewspaper /> 
  },
  { 
    path: 'about-app', 
    label: 'About App', 
    icon: <FaLightbulb /> 
  },
  { 
    path: 'stock-suggestions', 
    label: 'Stock Suggestions', 
    icon: <FaStore /> 
  },
  { 
    path: 'plans', 
    label: 'Financial Planner', 
    icon: <FaClipboardList /> 
  },
  { 
    path: 'financial-quiz', 
    label: 'Financial Quiz', 
    icon: <FaQuestionCircle /> 
  },
  { 
    path: 'about-app', 
    label: 'About', 
    icon: <FaInfoCircle /> 
  },
  { 
    path: 'live-stocks', 
    label: 'Live Stocks', 
    icon: <FaCogs />  // You can change the icon as needed
  }
];

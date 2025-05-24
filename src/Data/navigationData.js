import { 
  LayoutDashboard, 
  History, 
  Calendar, 
  Users, 
  BarChart3, 
  MessageCircle, 
  HelpCircle, 
  Settings 
} from 'lucide-react';

export const navigationData = {
  general: [
    {
      id: 'dashboard',
      icon: LayoutDashboard,
      label: 'Dashboard',
      active: true,
      path: '/dashboard'
    },
    {
      id: 'history',
      icon: History,
      label: 'History',
      active: false,
      path: '/history'
    },
    {
      id: 'calendar',
      icon: Calendar,
      label: 'Calendar',
      active: false,
      path: '/calendar'
    },
    {
      id: 'appointments',
      icon: Users,
      label: 'Appointments',
      active: false,
      path: '/appointments'
    },
    {
      id: 'statistics',
      icon: BarChart3,
      label: 'Statistics',
      active: false,
      path: '/statistics'
    }
  ],
  tools: [
    {
      id: 'chat',
      icon: MessageCircle,
      label: 'Chat',
      active: false,
      path: '/chat'
    },
    {
      id: 'support',
      icon: HelpCircle,
      label: 'Support',
      active: false,
      path: '/support'
    },
    {
      id: 'settings',
      icon: Settings,
      label: 'Setting',
      active: false,
      path: '/settings'
    }
  ]
};

export default navigationData;
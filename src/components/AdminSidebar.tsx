
import React from 'react';
import { Users, Store, Package, ShoppingCart, Settings, BarChart3, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AdminSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Home },
  { id: 'users', label: 'Users', icon: Users },
  { id: 'stores', label: 'Stores', icon: Store },
  { id: 'categories', label: 'Categories', icon: Package },
  { id: 'products', label: 'Products', icon: ShoppingCart },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export const AdminSidebar: React.FC<AdminSidebarProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="w-64 bg-slate-900 text-white h-screen fixed left-0 top-0 overflow-y-auto">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-blue-400">Admin Panel</h1>
        <p className="text-slate-400 text-sm mt-1">E-commerce Management</p>
      </div>
      
      <nav className="mt-8">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={cn(
                "w-full flex items-center px-6 py-3 text-left hover:bg-slate-800 transition-colors duration-200",
                activeTab === item.id && "bg-blue-600 border-r-4 border-blue-400"
              )}
            >
              <Icon className="w-5 h-5 mr-3" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
      
      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-slate-800 rounded-lg p-4">
          <p className="text-sm text-slate-400">Admin user</p>
          <p className="font-semibold">Saleem </p>
        </div>
      </div>
    </div>
  );
};


import React from 'react';
import { Users, Store, Package, DollarSign, TrendingUp, ShoppingCart } from 'lucide-react';

const stats = [
  { label: 'Total Users', value: '2,847', change: '+12%', icon: Users, color: 'bg-blue-500' },
  { label: 'Active Stores', value: '2', change: '+3%', icon: Store, color: 'bg-green-500' },
  { label: 'Products', value: '1,429', change: '+8%', icon: Package, color: 'bg-purple-500' },
  { label: 'Revenue', value: '$47,892', change: '+23%', icon: DollarSign, color: 'bg-yellow-500' },
];

const recentActivity = [
  { action: 'New user registered', user: 'Alice Johnson', time: '2 minutes ago' },
  { action: 'Product added to Amazon store', user: 'Bob Smith', time: '15 minutes ago' },
  { action: 'Category updated', user: 'Carol White', time: '1 hour ago' },
  { action: 'Store connected to Shein', user: 'David Brown', time: '2 hours ago' },
];

export const DashboardOverview: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h2>
        <p className="text-gray-600">Welcome back! Here's what's happening with your e-commerce platform.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <p className="text-sm text-green-600 mt-1 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {stat.change}
                  </p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 py-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">by {activity.user} • {activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Platform Integrations</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Store className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Amazon</p>
                  <p className="text-sm text-gray-600">8 stores connected</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Active</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Shein</p>
                  <p className="text-sm text-gray-600">3 stores connected</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


import React, { useState } from 'react';
import { Store, Plus, Edit2, Trash2, ExternalLink, RefreshCw } from 'lucide-react';

interface StoreData {
  id: string;
  name: string;
  platform: string;
  status: string;
  products: number;
  revenue: string;
  lastSync: string;
  apiKey: string;
}

const mockStores: StoreData[] = [
  { id: '1', name: 'Electronics Store', platform: 'Amazon', status: 'Connected', products: 245, revenue: '$12,450', lastSync: '2 hours ago', apiKey: 'amzn_***_1234' },
  { id: '2', name: 'Fashion Hub', platform: 'Shein', status: 'Connected', products: 180, revenue: '$8,230', lastSync: '1 hour ago', apiKey: 'shein_***_5678' },
  { id: '3', name: 'Home & Garden', platform: 'Amazon', status: 'Error', products: 92, revenue: '$3,100', lastSync: '1 day ago', apiKey: 'amzn_***_9012' },
  { id: '4', name: 'Sports Gear', platform: 'Shein', status: 'Syncing', products: 156, revenue: '$5,680', lastSync: '30 min ago', apiKey: 'shein_***_3456' },
];

const platforms = ['Amazon', 'Shein', 'DM'];

export const StoreManagement: React.FC = () => {
  const [stores, setStores] = useState<StoreData[]>(mockStores);
  const [showAddModal, setShowAddModal] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Connected': return 'bg-green-100 text-green-800';
      case 'Error': return 'bg-red-100 text-red-800';
      case 'Syncing': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'Amazon': return 'bg-orange-500';
      case 'Shein': return 'bg-purple-500';
      case 'eBay': return 'bg-blue-500';
      case 'Shopify': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Store Management</h2>
          <p className="text-gray-600 mt-1">Manage your connected stores and platforms</p>
        </div>
        <button 
          onClick={() => setShowAddModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Add Store</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {stores.map((store) => (
          <div key={store.id} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 ${getPlatformColor(store.platform)} rounded-lg flex items-center justify-center`}>
                    <Store className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{store.name}</h3>
                    <p className="text-sm text-gray-500">{store.platform}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(store.status)}`}>
                  {store.status}
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Products</span>
                  <span className="font-medium text-gray-900">{store.products}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Revenue</span>
                  <span className="font-medium text-green-600">{store.revenue}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Last Sync</span>
                  <span className="text-sm text-gray-900">{store.lastSync}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">API Key</span>
                  <span className="text-sm font-mono text-gray-500">{store.apiKey}</span>
                </div>
              </div>
            </div>

            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <button className="text-blue-600 hover:text-blue-900 p-1 rounded transition-colors">
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button className="text-green-600 hover:text-green-900 p-1 rounded transition-colors">
                    <RefreshCw className="w-4 h-4" />
                  </button>
                  <button className="text-gray-600 hover:text-gray-900 p-1 rounded transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
                <button className="text-red-600 hover:text-red-900 p-1 rounded transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Platform Integration Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {platforms.map((platform) => {
            const storeCount = stores.filter(store => store.platform === platform).length;
            return (
              <div key={platform} className="text-center p-4 bg-gray-50 rounded-lg">
                <div className={`w-12 h-12 ${getPlatformColor(platform)} rounded-lg mx-auto mb-2 flex items-center justify-center`}>
                  <Store className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-medium text-gray-900">{platform}</h4>
                <p className="text-sm text-gray-600">{storeCount} stores</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

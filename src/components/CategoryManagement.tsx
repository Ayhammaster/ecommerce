
import React, { useState } from 'react';
import { Package, Plus, Edit2, Trash2, ChevronRight, FolderOpen, Folder } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  description: string;
  productCount: number;
  parentId: string | null;
  children?: Category[];
  isExpanded?: boolean;
}

const mockCategories: Category[] = [
  {
    id: '1',
    name: 'Electronics',
    description: 'Electronic devices and accessories',
    productCount: 245,
    parentId: null,
    isExpanded: true,
    children: [
      { id: '1-1', name: 'Smartphones', description: 'Mobile phones and accessories', productCount: 89, parentId: '1' },
      { id: '1-2', name: 'Laptops', description: 'Portable computers', productCount: 67, parentId: '1' },
      { id: '1-3', name: 'Audio', description: 'Headphones, speakers, etc.', productCount: 89, parentId: '1' },
    ]
  },
  {
    id: '2',
    name: 'Fashion',
    description: 'Clothing and accessories',
    productCount: 412,
    parentId: null,
    isExpanded: false,
    children: [
      { id: '2-1', name: 'Men\'s Clothing', description: 'Clothing for men', productCount: 156, parentId: '2' },
      { id: '2-2', name: 'Women\'s Clothing', description: 'Clothing for women', productCount: 198, parentId: '2' },
      { id: '2-3', name: 'Accessories', description: 'Fashion accessories', productCount: 58, parentId: '2' },
    ]
  },
  {
    id: '3',
    name: 'Home & Garden',
    description: 'Home improvement and garden supplies',
    productCount: 187,
    parentId: null,
    isExpanded: false,
    children: [
      { id: '3-1', name: 'Furniture', description: 'Home furniture', productCount: 92, parentId: '3' },
      { id: '3-2', name: 'Garden Tools', description: 'Gardening equipment', productCount: 45, parentId: '3' },
      { id: '3-3', name: 'Decor', description: 'Home decoration items', productCount: 50, parentId: '3' },
    ]
  },
];

export const CategoryManagement: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>(mockCategories);
  const [showAddModal, setShowAddModal] = useState(false);

  const toggleCategory = (categoryId: string) => {
    setCategories(prev => prev.map(cat => 
      cat.id === categoryId 
        ? { ...cat, isExpanded: !cat.isExpanded }
        : cat
    ));
  };

  const renderCategory = (category: Category, level: number = 0) => (
    <div key={category.id} className="border border-gray-200 rounded-lg mb-2">
      <div className="p-4 bg-white hover:bg-gray-50 transition-colors">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div style={{ marginLeft: `${level * 20}px` }} className="flex items-center space-x-2">
              {category.children && category.children.length > 0 && (
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="p-1 hover:bg-gray-200 rounded transition-colors"
                >
                  <ChevronRight 
                    className={`w-4 h-4 transition-transform ${category.isExpanded ? 'rotate-90' : ''}`}
                  />
                </button>
              )}
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                {category.isExpanded ? (
                  <FolderOpen className="w-4 h-4 text-white" />
                ) : (
                  <Folder className="w-4 h-4 text-white" />
                )}
              </div>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">{category.name}</h3>
              <p className="text-sm text-gray-600">{category.description}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <span className="text-sm font-medium text-gray-900">{category.productCount}</span>
              <p className="text-xs text-gray-500">products</p>
            </div>
            <div className="flex space-x-1">
              <button className="text-blue-600 hover:text-blue-900 p-1 rounded transition-colors">
                <Edit2 className="w-4 h-4" />
              </button>
              <button className="text-red-600 hover:text-red-900 p-1 rounded transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {category.isExpanded && category.children && (
        <div className="border-t border-gray-200 bg-gray-50">
          {category.children.map(child => renderCategory(child, level + 1))}
        </div>
      )}
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Category Management</h2>
          <p className="text-gray-600 mt-1">Organize your products with categories</p>
        </div>
        <button 
          onClick={() => setShowAddModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Add Category</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
              <Package className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Total Categories</p>
              <p className="text-2xl font-bold text-gray-900">{categories.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
              <FolderOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Subcategories</p>
              <p className="text-2xl font-bold text-gray-900">
                {categories.reduce((acc, cat) => acc + (cat.children?.length || 0), 0)}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
              <Package className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Total Products</p>
              <p className="text-2xl font-bold text-gray-900">
                {categories.reduce((acc, cat) => acc + cat.productCount, 0)}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Category Tree</h3>
        <div className="space-y-2">
          {categories.map(category => renderCategory(category))}
        </div>
      </div>
    </div>
  );
};

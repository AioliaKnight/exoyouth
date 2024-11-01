import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../lib/utils';

interface MenuItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface SidebarProps {
  menuItems: MenuItem[];
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  menuItems, 
  activeSection, 
  onSectionChange 
}) => {
  return (
    <aside className="w-64 min-h-screen bg-white border-r border-gray-200">
      <div className="p-6">
        <h1 className="text-xl font-bold text-gray-900">ExoYouth 管理系統</h1>
      </div>
      
      <nav className="mt-6">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={cn(
              "w-full flex items-center px-6 py-3 text-sm font-medium transition-colors",
              activeSection === item.id
                ? "text-blue-600 bg-blue-50"
                : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
            )}
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
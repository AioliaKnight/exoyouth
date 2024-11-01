import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../../lib/utils';

interface FeatureCardProps {
  name: string;
  description: string[];
  icon: LucideIcon;
  color: string;
  stats: {
    value: string;
    label: string;
  };
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  name,
  description,
  icon: Icon,
  color,
  stats,
  index
}) => {
  return (
    <div 
      className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl",
        `from-${color}-500/10 to-transparent`
      )} />
      
      <div className={cn(
        "relative flex items-center justify-center w-16 h-16 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300",
        `bg-${color}-100`
      )}>
        <Icon className={cn("w-8 h-8", `text-${color}-600`)} />
      </div>

      <div className="relative">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {name}
        </h3>
        <ul className="space-y-2">
          {description.map((item, idx) => (
            <li key={idx} className="text-gray-600">{item}</li>
          ))}
        </ul>
      </div>

      <div className={cn(
        "absolute inset-0 border-2 rounded-2xl transition-colors duration-300",
        `border-${color}-500/0 group-hover:border-${color}-500/20`
      )} />
    </div>
  );
};

export default FeatureCard;
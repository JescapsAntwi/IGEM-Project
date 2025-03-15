
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface InfoCardProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

const InfoCard = ({ title, icon, children, className }: InfoCardProps) => {
  return (
    <div className={cn(
      "bg-white rounded-xl shadow-md overflow-hidden border border-sea-100 hover:shadow-lg transition-shadow duration-300",
      className
    )}>
      <div className="px-6 py-5 bg-gradient-to-r from-sea-500 to-sea-600 text-white">
        <div className="flex items-center">
          {icon && <div className="mr-3">{icon}</div>}
          <h3 className="font-heading font-semibold text-xl">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};

export default InfoCard;

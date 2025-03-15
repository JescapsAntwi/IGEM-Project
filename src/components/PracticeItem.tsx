
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { motion } from "framer-motion";

interface PracticeItemProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

const PracticeItem = ({ icon, title, description, className }: PracticeItemProps) => {
  return (
    <motion.div 
      className={cn(
        "bg-white rounded-xl shadow-md overflow-hidden border border-sea-100 h-full flex flex-col",
        className
      )}
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      transition={{ duration: 0.2 }}
    >
      <div className="p-6 bg-gradient-to-r from-sea-600 to-sea-700 text-white flex items-center">
        <div className="mr-4 p-3 bg-white/10 rounded-full">
          {icon}
        </div>
        <h3 className="font-heading font-semibold text-xl">{title}</h3>
      </div>
      <div className="p-6 flex-grow">
        <p className="text-gray-700">{description}</p>
      </div>
    </motion.div>
  );
};

export default PracticeItem;

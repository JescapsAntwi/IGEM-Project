import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavItem {
  title: string;
  path: string;
}

interface SideNavProps {
  items: NavItem[];
}

const SideNav = ({ items }: SideNavProps) => {
  const location = useLocation();

  return (
    <div className="relative">
      <div className="sticky top-24 space-y-1">
        <div className="bg-coral-500/10 backdrop-blur-sm border border-coral-500/30 rounded-xl overflow-hidden shadow-md">
          {items.map((item, index) => {
            const isActive =
              location.hash === item.path ||
              (location.hash === "" && index === 0);

            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center py-3 px-4 text-sm font-medium transition-colors border-l-2",
                  isActive
                    ? "border-coral-500 bg-coral-500/20 text-coral-500"
                    : "border-transparent text-ocean-deep hover:text-coral-500 hover:bg-coral-500/10"
                )}
              >
                <div className="flex items-center">
                  <div
                    className={cn(
                      "mr-3 h-2 w-2 rounded-full",
                      isActive ? "bg-coral-500" : "bg-gray-300"
                    )}
                  ></div>
                  {item.title}
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 hidden lg:block">
          <img
            src="/images/gold.png"
            alt="iGEM Gold Medal"
            className="w-full max-w-[180px] mx-auto shadow-lg rounded-lg animate-float"
          />
        </div>
      </div>
    </div>
  );
};

export default SideNav;

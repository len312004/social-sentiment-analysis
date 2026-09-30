import { Home, BarChart2, TrendingUp, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Sidebar: React.FC = () => {
  const location = useLocation();

  const links = [
    { name: "Home", path: "/", icon: <Home size={20} /> },
    { name: "Dashboard", path: "/explore-dashboard", icon: <BarChart2 size={20} /> },
    { name: "Trends", path: "#", icon: <TrendingUp size={20} /> },
    { name: "Settings", path: "#", icon: <Settings size={20} /> },
  ];

  return (
    <aside className="w-64 bg-blue-900 text-white h-screen flex flex-col fixed left-0 top-0">
      <div className="px-6 py-6 text-2xl font-bold border-b border-blue-800">
        SentimentPulse
      </div>
      <nav className="flex flex-col mt-8 gap-2">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`flex items-center gap-3 px-6 py-3 text-sm font-medium transition ${
              location.pathname === link.path
                ? "bg-blue-700 text-white"
                : "hover:bg-blue-800 text-gray-300"
            }`}
          >
            {link.icon}
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;

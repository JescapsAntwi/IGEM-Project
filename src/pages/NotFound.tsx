
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center bg-sea-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <div className="mb-6 text-coral-500">
              <AlertTriangle className="h-20 w-20 mx-auto" />
            </div>
            
            <h1 className="text-6xl font-bold mb-4 text-ocean-deep">404</h1>
            <p className="text-xl text-gray-600 mb-8">
              Oops! The page you're looking for seems to have drifted away.
            </p>
            
            <Link 
              to="/" 
              className="px-6 py-3 bg-sea-600 text-white rounded-lg font-medium hover:bg-sea-700 transition-colors inline-flex items-center justify-center"
            >
              <Home className="mr-2 h-5 w-5" />
              Return to Home
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;

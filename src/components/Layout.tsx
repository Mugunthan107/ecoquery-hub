
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { auth, signOut } from "@/lib/firebase";
import { Leaf, Search, FileText, Info, LogIn, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function Layout({ children }: { children: React.ReactNode }) {
  const { currentUser } = useAuth();
  const location = useLocation();
  
  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error("Failed to log out");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F5F5] to-white flex flex-col">
      <header className="bg-gradient-to-r from-eco-green to-[#1B5E20] text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0 space-x-2">
              <Leaf className="h-8 w-8 animate-pulse" />
              <Link to="/" className="text-2xl font-bold tracking-tight hover:text-white/90 transition-colors">
                Eco Code
              </Link>
            </div>
            <nav className="flex flex-wrap gap-3 md:gap-4">
              <Link to="/" 
                className={`nav-link ${location.pathname === "/" ? "active-nav-link" : ""}`}>
                Home
              </Link>
              <Link to="/search" 
                className={`nav-link flex items-center ${location.pathname === "/search" ? "active-nav-link" : ""}`}>
                <Search className="w-4 h-4 mr-1" /> Search
              </Link>
              <Link to="/documents" 
                className={`nav-link flex items-center ${location.pathname === "/documents" ? "active-nav-link" : ""}`}>
                <FileText className="w-4 h-4 mr-1" /> Documents
              </Link>
              <Link to="/about" 
                className={`nav-link flex items-center ${location.pathname === "/about" ? "active-nav-link" : ""}`}>
                <Info className="w-4 h-4 mr-1" /> About
              </Link>
              {currentUser ? (
                <Button 
                  variant="outline" 
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors"
                  onClick={handleLogout}
                >
                  <LogOut className="w-4 h-4 mr-1" /> Logout
                </Button>
              ) : (
                <Link to="/login">
                  <Button 
                    variant="outline" 
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors"
                  >
                    <LogIn className="w-4 h-4 mr-1" /> Login
                  </Button>
                </Link>
              )}
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
      <footer className="bg-[#424242] text-white py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <p className="text-sm text-white/80">&copy; 2025 EcoQuery Hub. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

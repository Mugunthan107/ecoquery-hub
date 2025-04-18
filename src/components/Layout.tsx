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
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col">
      <header className="bg-[#2E7D32] text-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <Leaf className="mr-2" />
              <Link to="/" className="text-2xl font-bold">Eco Code</Link>
            </div>
            <nav className="flex flex-wrap gap-2 md:gap-4">
              <Link to="/" className={`px-3 py-2 rounded hover:bg-white/10 transition ${location.pathname === "/" ? "bg-white/20" : ""}`}>
                Home
              </Link>
              <Link to="/search" className={`px-3 py-2 rounded hover:bg-white/10 transition flex items-center ${location.pathname === "/search" ? "bg-white/20" : ""}`}>
                <Search className="w-4 h-4 mr-1" /> Search
              </Link>
              <Link to="/documents" className={`px-3 py-2 rounded hover:bg-white/10 transition flex items-center ${location.pathname === "/documents" ? "bg-white/20" : ""}`}>
                <FileText className="w-4 h-4 mr-1" /> Documents
              </Link>
              <Link to="/about" className={`px-3 py-2 rounded hover:bg-white/10 transition flex items-center ${location.pathname === "/about" ? "bg-white/20" : ""}`}>
                <Info className="w-4 h-4 mr-1" /> About
              </Link>
              {currentUser ? (
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#2E7D32]" onClick={handleLogout}>
                  <LogOut className="w-4 h-4 mr-1" /> Logout
                </Button>
              ) : (
                <Link to="/login">
                  <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#2E7D32]">
                    <LogIn className="w-4 h-4 mr-1" /> Login
                  </Button>
                </Link>
              )}
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="bg-[#424242] text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">&copy; 2025 EcoQuery Hub. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-white/80 hover:text-white transition">Privacy Policy</a>
              <a href="#" className="text-white/80 hover:text-white transition">Terms of Service</a>
              <a href="#" className="text-white/80 hover:text-white transition">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

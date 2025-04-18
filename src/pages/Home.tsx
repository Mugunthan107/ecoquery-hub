
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Search, Database, FileText, BarChart3 } from "lucide-react";

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2E7D32] to-[#2E7D32]/90 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Smart Search for Environmental Standards</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Searching environmental and industrial standards is time-consuming. 
            Find relevant codes in seconds using smart search.
          </p>
          <Link to="/search">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
              <Search className="mr-2 h-5 w-5" /> Try Search Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#212121]">How EcoQuery Hub Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F5F5F5] p-6 rounded-lg shadow-md">
              <div className="bg-[#2E7D32]/10 p-3 rounded-full w-fit mb-4">
                <Search className="h-8 w-8 text-[#2E7D32]"/>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#212121]">AI-Powered Search</h3>
              <p className="text-[#616161]">
                Our natural language processing understands your questions and finds the most relevant environmental standards.
              </p>
            </div>
            
            <div className="bg-[#F5F5F5] p-6 rounded-lg shadow-md">
              <div className="bg-[#2E7D32]/10 p-3 rounded-full w-fit mb-4">
                <Database className="h-8 w-8 text-[#2E7D32]"/>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#212121]">Comprehensive Database</h3>
              <p className="text-[#616161]">
                Access thousands of standards from CPCB, BIS, ISO, and other regulatory bodies in one place.
              </p>
            </div>
            
            <div className="bg-[#F5F5F5] p-6 rounded-lg shadow-md">
              <div className="bg-[#2E7D32]/10 p-3 rounded-full w-fit mb-4">
                <FileText className="h-8 w-8 text-[#2E7D32]"/>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#212121]">Smart Summaries</h3>
              <p className="text-[#616161]">
                Get concise summaries of complex environmental codes with highlighted key sections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-eco-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#212121]">Who Can Benefit</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-[#212121]">Environmental Engineers</h3>
              <p className="text-[#616161] mb-4">
                Quickly find relevant environmental standards for compliance and project planning.
              </p>
              <ul className="list-disc list-inside text-[#616161] ml-2">
                <li>Emission standards research</li>
                <li>Compliance verification</li>
                <li>Environmental impact assessment</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-[#212121]">Industrial Managers</h3>
              <p className="text-[#616161] mb-4">
                Stay updated with the latest efficiency standards and regulatory requirements.
              </p>
              <ul className="list-disc list-inside text-eco-textLight ml-2">
                <li>Energy efficiency guidelines</li>
                <li>Waste management protocols</li>
                <li>Sustainability certifications</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/search">
              <Button size="lg" className="bg-[#2E7D32] text-white hover:bg-[#2E7D32]/90">
                Start Searching Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-[#424242] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold mb-2">10,000+</p>
              <p className="text-sm opacity-80">Environmental Standards</p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-2">25+</p>
              <p className="text-sm opacity-80">Regulatory Sources</p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-2">95%</p>
              <p className="text-sm opacity-80">Search Accuracy</p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-2">500+</p>
              <p className="text-sm opacity-80">Industry Categories</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;

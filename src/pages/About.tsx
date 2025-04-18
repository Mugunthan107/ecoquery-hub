
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Search, Database, Zap, Lightbulb, BarChart3, Send } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <section className="mb-16">
            <h1 className="text-4xl font-bold mb-6 text-eco-text">About Eco Code</h1>
            <div className="space-y-6 text-eco-textLight">
              <p className="text-lg">
                Eco Code is a smart search tool designed to help environmental engineers, 
                industrial managers, researchers, and policymakers quickly find relevant environmental 
                and industrial standards, codes, and regulations.
              </p>
              <p>
                Our mission is to simplify access to critical environmental and industrial compliance 
                information, helping organizations make informed decisions that balance operational 
                efficiency with environmental responsibility.
              </p>
              <p>
                Using advanced natural language processing and semantic search technology, Eco Code 
                understands the context of your questions and retrieves the most relevant standards and 
                guidelines from a comprehensive database of environmental and industrial regulations.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-eco-text">Our Technology</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <Search className="h-8 w-8 text-eco-green mb-2" />
                  <CardTitle>Natural Language Search</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-eco-textLight">
                    Ask questions in plain language and get relevant results, not just keyword matches.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <Database className="h-8 w-8 text-eco-green mb-2" />
                  <CardTitle>Vector Database</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-eco-textLight">
                    Documents are indexed using advanced vector embeddings for semantic understanding.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <Zap className="h-8 w-8 text-eco-green mb-2" />
                  <CardTitle>Fast Retrieval</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-eco-textLight">
                    Optimized algorithms retrieve relevant standards in milliseconds from thousands of documents.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-eco-text">Impact</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <Lightbulb className="h-10 w-10 text-eco-green mb-4" />
                <h3 className="text-xl font-semibold mb-3">Environmental Impact</h3>
                <p className="text-eco-textLight">
                  By making environmental standards more accessible, we help organizations implement 
                  sustainable practices more effectively, leading to reduced emissions, better waste 
                  management, and improved resource utilization.
                </p>
              </div>
              
              <div>
                <BarChart3 className="h-10 w-10 text-eco-green mb-4" />
                <h3 className="text-xl font-semibold mb-3">Industry Efficiency</h3>
                <p className="text-eco-textLight">
                  Quick access to industry standards helps companies optimize their processes, 
                  reduce compliance costs, and avoid penalties while maintaining high environmental 
                  standards.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-eco-text">Contact Us</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Your feedback or questions..."
                  rows={4}
                />
              </div>
              
              <Button className="bg-eco-green hover:bg-eco-green/90">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default About;

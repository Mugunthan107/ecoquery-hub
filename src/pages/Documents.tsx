
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { standardsData, Standard } from "@/data/standards";
import { Search, Filter, ArrowUpDown } from "lucide-react";

const Documents = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSource, setSelectedSource] = useState("all");
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Standard;
    direction: 'ascending' | 'descending';
  } | null>(null);

  // Get unique categories and sources for filters
  const categories = [...new Set(standardsData.map(item => item.category))];
  const sources = [...new Set(standardsData.map(item => item.source))];

  // Filter and sort data
  const getFilteredData = () => {
    // Start with all data
    let filteredData = [...standardsData];
    
    // Apply search query filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filteredData = filteredData.filter(standard => 
        standard.title.toLowerCase().includes(query) ||
        standard.summary.toLowerCase().includes(query) ||
        standard.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    // Apply category filter
    if (selectedCategory && selectedCategory !== "all") {
      filteredData = filteredData.filter(standard => 
        standard.category === selectedCategory
      );
    }
    
    // Apply source filter
    if (selectedSource && selectedSource !== "all") {
      filteredData = filteredData.filter(standard => 
        standard.source === selectedSource
      );
    }
    
    // Apply sorting
    if (sortConfig) {
      filteredData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    
    return filteredData;
  };

  const requestSort = (key: keyof Standard) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    
    setSortConfig({ key, direction });
  };

  const getSortIndicator = (columnName: keyof Standard) => {
    if (sortConfig?.key !== columnName) {
      return <ArrowUpDown className="ml-1 h-4 w-4 opacity-50" />;
    }
    
    return sortConfig.direction === 'ascending' 
      ? <ArrowUpDown className="ml-1 h-4 w-4 text-eco-green" /> 
      : <ArrowUpDown className="ml-1 h-4 w-4 text-eco-green rotate-180" />;
  };

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedSource("all");
    setSortConfig(null);
  };
  
  const filteredData = getFilteredData();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-eco-text">Environmental & Industrial Standards</h1>
        
        {/* Filters */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search documents..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="w-full md:w-48">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="w-full md:w-48">
              <Select value={selectedSource} onValueChange={setSelectedSource}>
                <SelectTrigger>
                  <SelectValue placeholder="Source" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sources</SelectItem>
                  {sources.map((source) => (
                    <SelectItem key={source} value={source}>
                      {source}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <Button 
              variant="outline" 
              className="md:self-start"
              onClick={resetFilters}
            >
              <Filter className="mr-2 h-4 w-4" /> Reset
            </Button>
          </div>
        </div>
        
        {/* Results count */}
        <div className="mb-4 text-eco-textLight">
          Showing {filteredData.length} of {standardsData.length} documents
        </div>
        
        {/* Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[400px] cursor-pointer" onClick={() => requestSort('title')}>
                  <div className="flex items-center">
                    Title {getSortIndicator('title')}
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => requestSort('source')}>
                  <div className="flex items-center">
                    Source {getSortIndicator('source')}
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => requestSort('category')}>
                  <div className="flex items-center">
                    Category {getSortIndicator('category')}
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => requestSort('year')}>
                  <div className="flex items-center">
                    Year {getSortIndicator('year')}
                  </div>
                </TableHead>
                <TableHead>Tags</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.length > 0 ? (
                filteredData.map((standard) => (
                  <TableRow key={standard.id}>
                    <TableCell className="font-medium">
                      {standard.title}
                      <p className="text-sm text-eco-textLight mt-1 line-clamp-2">{standard.summary}</p>
                    </TableCell>
                    <TableCell>{standard.source}</TableCell>
                    <TableCell>{standard.category}</TableCell>
                    <TableCell>{standard.year}</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {standard.tags.slice(0, 2).map((tag, index) => (
                          <Badge key={index} variant="outline" className="bg-eco-green/5">
                            {tag}
                          </Badge>
                        ))}
                        {standard.tags.length > 2 && (
                          <Badge variant="outline">+{standard.tags.length - 2}</Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button size="sm" variant="outline" className="text-eco-green border-eco-green hover:bg-eco-green/10">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="h-24 text-center">
                    No results found. Try different filters.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </Layout>
  );
};

export default Documents;

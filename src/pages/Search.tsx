
import { useState, useEffect, useRef } from "react";
import { Layout } from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search as SearchIcon, Bookmark, FileText, Clock, Copy, Book } from "lucide-react";
import { standardsData, Standard } from "@/data/standards";

const Search = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Standard[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionRef = useRef<HTMLDivElement>(null);

  const exampleQueries = [
    "What are the noise pollution norms?",
    "Energy efficiency standards for industries",
    "Water quality standards for discharge",
    "E-waste management rules",
    "Emission limits for power plants",
    "Green building certification requirements"
  ];

  const performSearch = (searchQuery: string) => {
    setIsSearching(true);
    
    setTimeout(() => {
      const normalizedQuery = searchQuery.toLowerCase().trim();
      
      if (!normalizedQuery) {
        setSearchResults([]);
        setIsSearching(false);
        return;
      }
      
      const results = standardsData.filter(standard => {
        return (
          standard.title.toLowerCase().includes(normalizedQuery) ||
          standard.summary.toLowerCase().includes(normalizedQuery) ||
          standard.content.toLowerCase().includes(normalizedQuery) ||
          standard.category.toLowerCase().includes(normalizedQuery) ||
          standard.tags.some(tag => tag.toLowerCase().includes(normalizedQuery))
        );
      });
      
      setSearchResults(results);
      setIsSearching(false);
    }, 500);
  };

  useEffect(() => {
    if (query.length > 2) {
      const filtered = exampleQueries.filter(item => 
        item.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (suggestionRef.current && !suggestionRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = () => {
    performSearch(query);
    setShowSuggestions(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const selectSuggestion = (suggestion: string) => {
    setQuery(suggestion);
    setShowSuggestions(false);
    performSearch(suggestion);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8 text-[#212121]">
            Search Environmental Standards
          </h1>
          
          <div className="relative mb-12">
            <div className="flex">
              <div className="relative flex-grow">
                <Input
                  type="text"
                  placeholder="What environmental standard are you looking for?"
                  className="pl-10 pr-4 py-6 text-lg rounded-r-none border-r-0"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  onFocus={() => query.length > 2 && suggestions.length > 0 && setShowSuggestions(true)}
                />
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#616161] h-5 w-5" />
              </div>
              <Button 
                onClick={handleSearch}
                className="rounded-l-none bg-[#2E7D32] hover:bg-[#2E7D32]/90 px-6 text-lg"
                disabled={isSearching}
              >
                {isSearching ? "Searching..." : "Search"}
              </Button>
            </div>
            
            {showSuggestions && (
              <div 
                ref={suggestionRef}
                className="absolute z-10 bg-white w-full border border-gray-200 rounded-md shadow-lg mt-1 max-h-60 overflow-auto"
              >
                {suggestions.map((suggestion, index) => (
                  <div 
                    key={index}
                    className="px-4 py-2 hover:bg-[#2E7D32]/10 cursor-pointer"
                    onClick={() => selectSuggestion(suggestion)}
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            )}
            
            <div className="mt-3">
              <p className="text-sm text-[#616161] mb-2">Try searching for:</p>
              <div className="flex flex-wrap gap-2">
                {exampleQueries.slice(0, 3).map((example, index) => (
                  <Badge 
                    key={index}
                    variant="outline" 
                    className="cursor-pointer hover:bg-[#2E7D32]/10"
                    onClick={() => selectSuggestion(example)}
                  >
                    {example}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          {isSearching ? (
            <div className="text-center py-12">
              <div className="animate-pulse flex flex-col items-center">
                <div className="rounded-full bg-slate-200 h-12 w-12 mb-4"></div>
                <div className="h-2 bg-slate-200 rounded w-48 mb-4"></div>
                <div className="h-2 bg-slate-200 rounded w-40"></div>
              </div>
            </div>
          ) : searchResults.length > 0 ? (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold mb-4">
                Found {searchResults.length} relevant standards
              </h2>
              
              {searchResults.map((result) => (
                <Card key={result.id} className="overflow-hidden hover:shadow-md transition-shadow border-l-4 border-l-eco-green">
                  <CardHeader className="bg-eco-background pb-2">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <FileText className="h-5 w-5 text-eco-green" />
                          <CardTitle className="text-xl">{result.title}</CardTitle>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 text-sm text-eco-textLight">
                          <Badge variant="outline" className="bg-eco-green/10 flex items-center gap-1">
                            <Book className="h-3 w-3" />
                            {result.source}
                          </Badge>
                          <Badge variant="outline" className="bg-eco-green/10 flex items-center gap-1">
                            <FileText className="h-3 w-3" />
                            {result.category}
                          </Badge>
                          <Badge variant="outline" className="bg-eco-green/10 flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {result.year}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="flex items-center gap-2">
                          <Copy className="h-4 w-4" />
                          Copy
                        </Button>
                        <Button variant="outline" size="sm" className="flex items-center gap-2">
                          <Bookmark className="h-4 w-4" />
                          Save
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-sm text-eco-textLight mb-1">Summary</h4>
                        <p className="text-eco-text">{result.summary}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm text-eco-textLight mb-1">Keywords</h4>
                        <div className="flex flex-wrap gap-1">
                          {result.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary" className="bg-eco-grey/10">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="pt-2 flex justify-between items-center">
                        <Button variant="link" className="p-0 h-auto text-eco-green">
                          View full document
                        </Button>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" className="text-eco-textLight">
                            Was this helpful?
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : query && !isSearching ? (
            <div className="text-center py-8 space-y-4">
              <div className="bg-eco-background rounded-lg p-8 border border-eco-green/20">
                <SearchIcon className="h-12 w-12 text-eco-green/50 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No matching standards found</h3>
                <p className="text-eco-textLight max-w-md mx-auto">
                  Try using different keywords, checking your spelling, or browsing our complete collection of standards.
                </p>
                <Button 
                  variant="link" 
                  className="mt-4 text-eco-green"
                  onClick={() => setQuery("")}
                >
                  Clear search and try again
                </Button>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-eco-textLight">Try these example searches:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {exampleQueries.slice(0, 3).map((example, index) => (
                    <Badge 
                      key={index}
                      variant="outline" 
                      className="cursor-pointer hover:bg-eco-green/10"
                      onClick={() => selectSuggestion(example)}
                    >
                      {example}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </Layout>
  );
};

export default Search;

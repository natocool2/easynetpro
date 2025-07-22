import { Search, Mic, Camera } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchBar = () => {
  return (
    <div className="w-full max-w-2xl mx-auto relative">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
        <Input
          type="text"
          placeholder="Build anything"
          className="pl-12 pr-20 py-6 text-lg rounded-full border-2 border-border bg-background shadow-sm"
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="p-2 rounded-full hover:bg-accent">
            <Mic className="h-5 w-5 text-primary" />
          </Button>
          <Button variant="ghost" size="sm" className="p-2 rounded-full hover:bg-accent">
            <Camera className="h-5 w-5 text-primary" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
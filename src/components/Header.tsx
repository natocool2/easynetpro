import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-background border-b border-border">
      <div className="flex items-center">
        <h1 className="text-xl font-semibold text-foreground">Easynet Pro</h1>
      </div>
      
      <nav className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
          Ingenious Gen
        </a>
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
          Events
        </a>
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          ...
        </Button>
      </nav>
      
      <div className="flex items-center space-x-4">
        <Button variant="outline" size="sm">
          Sign In
        </Button>
      </div>
    </header>
  );
};

export default Header;
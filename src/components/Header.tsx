import { Search, Bell, Settings, Grid3X3, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="bg-card border-b border-border px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="text-xl font-bold text-primary">SIIK</div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <button className="text-sm font-medium text-primary border-b-2 border-primary pb-1">
              CONTENT
            </button>
            <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              DISCOVER
            </button>
            <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              ANALYTICS
            </button>
            <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              LIVE
            </button>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Bell className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Settings className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Grid3X3 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="rounded-full">
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};
import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface StatsCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
}

export const StatsCard = ({ icon: Icon, value, label }: StatsCardProps) => {
  return (
    <Card className="p-6 bg-gradient-to-br from-card to-muted/50 border shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center space-x-4">
        <div className="p-3 rounded-lg bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div>
          <div className="text-2xl font-bold text-foreground">{value}</div>
          <div className="text-sm text-muted-foreground font-medium">{label}</div>
        </div>
      </div>
    </Card>
  );
};
import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", value: 3000 },
  { month: "Feb", value: 4500 },
  { month: "Mar", value: 5200 },
  { month: "Apr", value: 3800 },
  { month: "May", value: 3100 },
];

export const AnalyticsChart = () => {
  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">ANALYTICS</h3>
          
          {/* Topline metrics */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">1.2M</div>
              <div className="text-sm text-muted-foreground">Video Views</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4:35</div>
              <div className="text-sm text-muted-foreground">Avg Watchtime</div>
            </div>
          </div>
        </div>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="month" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              />
              <Bar 
                dataKey="value" 
                fill="hsl(var(--chart-1))" 
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="text-center">
          <button className="text-sm text-primary hover:text-primary/80 font-medium">
            View All →
          </button>
        </div>
      </div>
    </Card>
  );
};
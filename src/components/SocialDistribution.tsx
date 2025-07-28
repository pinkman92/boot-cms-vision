import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Platform 1", value: 40, color: "hsl(var(--chart-1))" },
  { name: "Platform 2", value: 30, color: "hsl(var(--chart-2))" },
  { name: "Platform 3", value: 13, color: "hsl(var(--chart-3))" },
  { name: "Platform 4", value: 10, color: "hsl(var(--chart-4))" },
  { name: "Platform 5", value: 7, color: "hsl(var(--chart-5))" }
];

export const SocialDistribution = () => {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">SOCIAL PLATFORM DISTRIBUTION</h3>
        <button className="text-sm text-primary hover:text-primary/80 font-medium">
          View All →
        </button>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend 
              verticalAlign="bottom" 
              height={36}
              formatter={(value, entry) => (
                <span className="text-sm text-muted-foreground">
                  {entry.payload.value}%
                </span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};
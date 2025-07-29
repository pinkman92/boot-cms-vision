import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Platform 1", value: 40, color: "var(--chart-1)" },
  { name: "Platform 2", value: 30, color: "var(--chart-2)" },
  { name: "Platform 3", value: 13, color: "var(--chart-3)" },
  { name: "Platform 4", value: 10, color: "var(--chart-4)" },
  { name: "Platform 5", value: 7, color: "var(--chart-5)" }
];

export const SocialDistribution = () => {
  return (
    <div className="card p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="section-title">SOCIAL PLATFORM DISTRIBUTION</h5>
        <a href="#" className="view-all-link">
          View All →
        </a>
      </div>

      <div style={{ height: '264px' }}>
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
                <span className="small text-muted">
                  {entry.payload.value}%
                </span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
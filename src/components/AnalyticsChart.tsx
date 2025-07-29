import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 700 },
  { name: "Jun", value: 900 }
];

export const AnalyticsChart = () => {
  return (
    <div className="card p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="mb-0 fw-semibold">ANALYTICS</h5>
        <button className="btn btn-link text-primary text-decoration-none small fw-medium p-0">
          View All →
        </button>
      </div>

      <div className="row mb-4">
        <div className="col-6">
          <div className="h3 fw-bold mb-1">1.2M</div>
          <div className="small text-muted">Video Views</div>
        </div>
        <div className="col-6">
          <div className="h3 fw-bold mb-1">4:32</div>
          <div className="small text-muted">Avg Watchtime</div>
        </div>
      </div>

      <div style={{ height: '200px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#64748b', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#64748b', fontSize: 12 }}
            />
            <Bar 
              dataKey="value" 
              fill="var(--bs-primary)" 
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
}

export const StatsCard = ({ icon: Icon, value, label }: StatsCardProps) => {
  return (
    <div className="stats-card p-4 h-100">
      <div className="d-flex align-items-center">
        <div className="stats-icon me-3">
          <Icon size={24} />
        </div>
        <div>
          <div className="h3 fw-bold mb-1" style={{ color: '#1e293b' }}>{value}</div>
          <div className="small text-muted fw-medium" style={{ fontSize: '0.8rem', letterSpacing: '0.025em' }}>{label}</div>
        </div>
      </div>
    </div>
  );
};
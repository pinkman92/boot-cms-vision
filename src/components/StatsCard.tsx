import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
}

export const StatsCard = ({ icon: Icon, value, label }: StatsCardProps) => {
  return (
    <div className="card p-4 h-100" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)' }}>
      <div className="d-flex align-items-center">
        <div className="p-3 rounded me-3" style={{ backgroundColor: 'rgba(26, 26, 26, 0.1)' }}>
          <Icon size={24} style={{ color: 'var(--bs-primary)' }} />
        </div>
        <div>
          <div className="h4 fw-bold mb-1">{value}</div>
          <div className="small text-muted fw-medium">{label}</div>
        </div>
      </div>
    </div>
  );
};
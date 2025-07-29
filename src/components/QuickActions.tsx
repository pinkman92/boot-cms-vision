import { Video, Scissors, Mic, FolderOpen, Upload } from "lucide-react";

const actions = [
  {
    id: 1,
    icon: Video,
    title: "VIDEOS",
    description: "Stream directly from your browser",
    color: "#3b82f6"
  },
  {
    id: 2,
    icon: Scissors,
    title: "SHORTS", 
    description: "Stream from OBS, Wirecast, etc.",
    color: "#10b981"
  },
  {
    id: 3,
    icon: Mic,
    title: "AUDIO",
    description: "Livestream pre-recorded videos", 
    color: "#f59e0b"
  },
  {
    id: 4,
    icon: FolderOpen,
    title: "LIBRARY",
    description: "Save a recording without going live",
    color: "#8b5cf6"
  },
  {
    id: 5,
    icon: Upload,
    title: "CUSTOM UPLOAD",
    description: "Upload your own content directly",
    color: "#ef4444"
  }
];

export const QuickActions = () => {
  return (
    <div className="card p-4">
      <h5 className="section-title mb-4">QUICK ACTIONS</h5>
      
      <div className="row g-3">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <div key={action.id} className="col-12 col-sm-6 col-lg">
              <button className="action-button w-100 h-100 border-0">
                <div 
                  className="action-icon"
                  style={{ backgroundColor: action.color }}
                >
                  <Icon size={28} color="white" />
                </div>
                <h6 className="fw-semibold small mb-2" style={{ color: '#1e293b' }}>{action.title}</h6>
                <p className="text-muted small mb-0 lh-base" style={{ fontSize: '0.8rem' }}>{action.description}</p>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
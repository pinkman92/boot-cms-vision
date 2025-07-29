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
      <h5 className="fw-semibold mb-4">QUICK ACTIONS</h5>
      
      <div className="row g-3">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <div key={action.id} className="col-12 col-sm-6 col-lg">
              <button className="btn btn-light w-100 p-4 text-center border-0 h-100" style={{ backgroundColor: '#f8fafc' }}>
                <div 
                  className="d-flex align-items-center justify-content-center mx-auto mb-3 rounded"
                  style={{ 
                    width: '48px', 
                    height: '48px', 
                    backgroundColor: action.color,
                    transition: 'transform 0.2s'
                  }}
                >
                  <Icon size={24} color="white" />
                </div>
                <h6 className="fw-semibold small mb-1">{action.title}</h6>
                <p className="text-muted small mb-0 lh-base">{action.description}</p>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
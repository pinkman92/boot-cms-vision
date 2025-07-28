import { Card } from "@/components/ui/card";
import { Video, Scissors, Mic, FolderOpen, Upload } from "lucide-react";

const actions = [
  {
    id: 1,
    icon: Video,
    title: "VIDEOS",
    description: "Stream directly from your browser",
    color: "bg-blue-500"
  },
  {
    id: 2,
    icon: Scissors,
    title: "SHORTS", 
    description: "Stream from OBS, Wirecast, etc.",
    color: "bg-green-500"
  },
  {
    id: 3,
    icon: Mic,
    title: "AUDIO",
    description: "Livestream pre-recorded videos", 
    color: "bg-orange-500"
  },
  {
    id: 4,
    icon: FolderOpen,
    title: "LIBRARY",
    description: "Save a recording without going live",
    color: "bg-purple-500"
  },
  {
    id: 5,
    icon: Upload,
    title: "CUSTOM UPLOAD",
    description: "Upload your own content directly",
    color: "bg-red-500"
  }
];

export const QuickActions = () => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-foreground mb-6">QUICK ACTIONS</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <button
              key={action.id}
              className="p-4 text-center hover:bg-muted/50 rounded-lg transition-colors group"
            >
              <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-sm text-foreground mb-1">{action.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{action.description}</p>
            </button>
          );
        })}
      </div>
    </Card>
  );
};
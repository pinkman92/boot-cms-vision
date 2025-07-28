import { Card } from "@/components/ui/card";
import { Edit, MoreHorizontal } from "lucide-react";
import videoThumb1 from "@/assets/video-thumb-1.jpg";

const recentVideos = [
  {
    id: 1,
    title: "Smriti Irani In Aap Ki Adalat: क्या राजनीति छोड़ TV...",
    description: "Smriti Irani In Aap Ki Adalat: क्या राजनीति छोड़ TV",
    contentType: "Explainers",
    category: "Auto",
    modified: "47 secs ago",
    author: "Prachi Tayal",
    thumbnail: videoThumb1
  },
  {
    id: 2,
    title: "Smriti Irani In Aap Ki Adalat: क्या राजनीति छोड़ TV...",
    description: "Smriti Irani In Aap Ki Adalat: क्या राजनीति छोड़ TV",
    contentType: "Explainers",
    category: "Auto",
    modified: "47 secs ago",
    author: "Prachi Tayal",
    thumbnail: videoThumb1
  },
  {
    id: 3,
    title: "Smriti Irani In Aap Ki Adalat: क्या राजनीति छोड़ TV...",
    description: "Smriti Irani In Aap Ki Adalat: क्या राजनीति छोड़ TV",
    contentType: "Explainers", 
    category: "Auto",
    modified: "47 secs ago",
    author: "Prachi Tayal",
    thumbnail: videoThumb1
  },
  {
    id: 4,
    title: "Smriti Irani In Aap Ki Adalat: क्या राजनीति छोड़ TV...",
    description: "Smriti Irani In Aap Ki Adalat: क्या राजनीति छोड़ TV",
    contentType: "Explainers",
    category: "Auto", 
    modified: "47 secs ago",
    author: "Prachi Tayal",
    thumbnail: videoThumb1
  }
];

export const RecentlyPublished = () => {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">RECENTLY PUBLISHED</h3>
        <button className="text-sm text-primary hover:text-primary/80 font-medium">
          View All →
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left text-sm font-medium text-muted-foreground pb-3">TITLE</th>
              <th className="text-left text-sm font-medium text-muted-foreground pb-3">META</th>
              <th className="text-left text-sm font-medium text-muted-foreground pb-3">MODIFIED</th>
              <th className="text-left text-sm font-medium text-muted-foreground pb-3">ACTION</th>
            </tr>
          </thead>
          <tbody className="space-y-4">
            {recentVideos.map((video, index) => (
              <tr key={video.id} className={index !== recentVideos.length - 1 ? "border-b border-border" : ""}>
                <td className="py-4">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-12 h-8 object-cover rounded"
                    />
                    <div>
                      <h4 className="font-medium text-sm text-foreground">{video.title}</h4>
                      <p className="text-xs text-muted-foreground">{video.description}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4">
                  <div className="space-y-1">
                    <div className="text-sm text-foreground">Content Type</div>
                    <div className="text-sm text-muted-foreground">{video.contentType}</div>
                    <div className="text-sm text-foreground">Category</div>
                    <div className="text-sm text-muted-foreground">{video.category}</div>
                  </div>
                </td>
                <td className="py-4">
                  <div className="space-y-1">
                    <div className="text-sm text-muted-foreground">{video.modified}</div>
                    <div className="text-sm text-muted-foreground">{video.author}</div>
                  </div>
                </td>
                <td className="py-4">
                  <div className="flex items-center space-x-2">
                    <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                      <Edit className="h-4 w-4 text-muted-foreground" />
                    </button>
                    <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                      <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};
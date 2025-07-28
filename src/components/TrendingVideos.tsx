import { Card } from "@/components/ui/card";
import { Eye, Share2, ThumbsUp, MoreHorizontal } from "lucide-react";
import videoThumb1 from "@/assets/video-thumb-1.jpg";
import videoThumb2 from "@/assets/video-thumb-2.jpg";
import videoThumb3 from "@/assets/video-thumb-3.jpg";

const videos = [
  {
    id: 1,
    title: "Saudi Arabia has expan...",
    channel: "NBT News | Meenadshi",
    time: "2 hrs ago",
    duration: "00:45",
    thumbnail: videoThumb1,
    stats: { views: "12K", likes: "324", shares: "45" }
  },
  {
    id: 2,
    title: "Saudi Arabia has expan...",
    channel: "NBT News | Meenadshi",
    time: "2 hrs ago",
    duration: "00:45",
    thumbnail: videoThumb2,
    stats: { views: "8.5K", likes: "256", shares: "32" }
  },
  {
    id: 3,
    title: "Saudi Arabia has expan...",
    channel: "NBT News | Meenadshi",
    time: "2 hrs ago",
    duration: "00:45",
    thumbnail: videoThumb3,
    stats: { views: "15K", likes: "412", shares: "67" }
  }
];

export const TrendingVideos = () => {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">TRENDING VIDEOS</h3>
        <button className="text-sm text-primary hover:text-primary/80 font-medium">
          View All →
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {videos.map((video) => (
          <div key={video.id} className="group cursor-pointer">
            <div className="relative mb-3">
              <img 
                src={video.thumbnail} 
                alt={video.title}
                className="w-full h-32 object-cover rounded-lg"
              />
              <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                {video.duration}
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                {video.title}
              </h4>
              <p className="text-xs text-muted-foreground">{video.channel} • {video.time}</p>
              
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1">
                    <Eye className="h-3 w-3" />
                    <span>{video.stats.views}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <ThumbsUp className="h-3 w-3" />
                    <span>{video.stats.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Share2 className="h-3 w-3" />
                    <span>{video.stats.shares}</span>
                  </div>
                </div>
                <button className="p-1 hover:bg-muted rounded">
                  <MoreHorizontal className="h-3 w-3" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
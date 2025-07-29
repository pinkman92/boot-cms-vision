import { MoreHorizontal, Eye, Heart, Share2 } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Amazing Sunset Timelapse",
    channel: "Nature Films",
    time: "2 hours ago",
    duration: "3:24",
    thumbnail: "/src/assets/video-thumb-1.jpg",
    stats: {
      views: "24K",
      likes: "1.2K", 
      shares: "45"
    }
  },
  {
    id: 2,
    title: "City Life Documentary",
    channel: "Urban Stories",
    time: "5 hours ago", 
    duration: "12:15",
    thumbnail: "/src/assets/video-thumb-2.jpg",
    stats: {
      views: "156K",
      likes: "8.3K",
      shares: "234"
    }
  },
  {
    id: 3,
    title: "Cooking Masterclass",
    channel: "Chef's Table",
    time: "1 day ago",
    duration: "25:42", 
    thumbnail: "/src/assets/video-thumb-3.jpg",
    stats: {
      views: "89K",
      likes: "5.1K",
      shares: "167"
    }
  }
];

export const TrendingVideos = () => {
  return (
    <div className="card p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="section-title">TRENDING VIDEOS</h5>
        <a href="#" className="view-all-link">
          View All →
        </a>
      </div>

      <div className="row g-4">
        {videos.map((video) => (
          <div key={video.id} className="col-12 col-md-4">
            <div className="position-relative mb-3">
              <img 
                src={video.thumbnail} 
                alt={video.title}
                className="img-fluid rounded w-100"
                style={{ aspectRatio: '16/9', objectFit: 'cover' }}
              />
              <span 
                className="position-absolute bottom-0 end-0 bg-dark text-white px-2 py-1 rounded small me-2 mb-2"
                style={{ fontSize: '0.75rem' }}
              >
                {video.duration}
              </span>
            </div>
            
            <div className="d-flex justify-content-between align-items-start">
              <div className="flex-grow-1">
                <h6 className="fw-semibold mb-1" style={{ fontSize: '0.875rem' }}>
                  {video.title}
                </h6>
                <p className="text-muted small mb-2">{video.channel}</p>
                <p className="text-muted small mb-3">{video.time}</p>
                
                <div className="d-flex align-items-center gap-3">
                  <div className="d-flex align-items-center">
                    <Eye size={14} className="text-muted me-1" />
                    <span className="small text-muted">{video.stats.views}</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <Heart size={14} className="text-muted me-1" />
                    <span className="small text-muted">{video.stats.likes}</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <Share2 size={14} className="text-muted me-1" />
                    <span className="small text-muted">{video.stats.shares}</span>
                  </div>
                </div>
              </div>
              
              <button className="btn btn-link text-muted p-1">
                <MoreHorizontal size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
import { Edit, MoreHorizontal } from "lucide-react";

const recentVideos = [
  {
    id: 1,
    title: "How to Build Modern Web Apps",
    description: "Complete tutorial on React and TypeScript development",
    type: "Tutorial",
    category: "Development",
    modified: "2 hours ago",
    author: "John Doe",
    thumbnail: "/src/assets/video-thumb-1.jpg"
  },
  {
    id: 2,
    title: "Design System Best Practices",
    description: "Creating consistent UI components and patterns",
    type: "Guide",
    category: "Design",
    modified: "4 hours ago", 
    author: "Sarah Wilson",
    thumbnail: "/src/assets/video-thumb-2.jpg"
  },
  {
    id: 3,
    title: "API Integration Strategies",
    description: "Efficient ways to connect frontend with backend services",
    type: "Technical",
    category: "Backend",
    modified: "1 day ago",
    author: "Mike Chen",
    thumbnail: "/src/assets/video-thumb-3.jpg"
  }
];

export const RecentlyPublished = () => {
  return (
    <div className="card p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="mb-0 fw-semibold">RECENTLY PUBLISHED</h5>
        <button className="btn btn-link text-primary text-decoration-none small fw-medium p-0">
          View All →
        </button>
      </div>

      <div className="table-responsive">
        <table className="table table-borderless">
          <thead>
            <tr className="border-bottom">
              <th className="fw-semibold text-muted small border-0 pb-3">TITLE</th>
              <th className="fw-semibold text-muted small border-0 pb-3">META</th>
              <th className="fw-semibold text-muted small border-0 pb-3">MODIFIED</th>
              <th className="fw-semibold text-muted small border-0 pb-3">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {recentVideos.map((video) => (
              <tr key={video.id} className="border-0">
                <td className="border-0 py-3">
                  <div className="d-flex align-items-center">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="rounded me-3"
                      style={{ width: '48px', height: '48px', objectFit: 'cover' }}
                    />
                    <div>
                      <h6 className="fw-semibold mb-1">{video.title}</h6>
                      <p className="text-muted small mb-0">{video.description}</p>
                    </div>
                  </div>
                </td>
                <td className="border-0 py-3">
                  <div>
                    <span className="badge bg-light text-dark me-2">{video.type}</span>
                    <span className="badge bg-secondary">{video.category}</span>
                  </div>
                </td>
                <td className="border-0 py-3">
                  <div>
                    <div className="small mb-1">{video.modified}</div>
                    <div className="text-muted small">by {video.author}</div>
                  </div>
                </td>
                <td className="border-0 py-3">
                  <div className="d-flex gap-2">
                    <button className="btn btn-outline-secondary btn-sm">
                      <Edit size={14} />
                    </button>
                    <button className="btn btn-outline-secondary btn-sm">
                      <MoreHorizontal size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
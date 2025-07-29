import { Search, Bell, Settings, Grid3X3, User } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-white border-bottom border-secondary px-4 py-3">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center me-5">
            <div className="h4 fw-bold text-primary mb-0">SIIK</div>
          </div>
          
          <nav className="d-none d-md-flex align-items-center">
            <button className="btn btn-link text-primary text-decoration-none fw-medium me-4 border-bottom border-primary border-2 pb-1">
              CONTENT
            </button>
            <button className="btn btn-link text-muted text-decoration-none fw-medium me-4">
              DISCOVER
            </button>
            <button className="btn btn-link text-muted text-decoration-none fw-medium me-4">
              ANALYTICS
            </button>
            <button className="btn btn-link text-muted text-decoration-none fw-medium">
              LIVE
            </button>
          </nav>
        </div>

        <div className="d-flex align-items-center">
          <button className="btn btn-outline-secondary btn-sm me-2">
            <Search size={16} />
          </button>
          <button className="btn btn-outline-secondary btn-sm me-2">
            <Bell size={16} />
          </button>
          <button className="btn btn-outline-secondary btn-sm me-2">
            <Settings size={16} />
          </button>
          <button className="btn btn-outline-secondary btn-sm me-2">
            <Grid3X3 size={16} />
          </button>
          <button className="btn btn-outline-secondary btn-sm rounded-circle">
            <User size={16} />
          </button>
        </div>
      </div>
    </header>
  );
};
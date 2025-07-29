import { Search, Bell, Settings, Grid3X3, User } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-white border-bottom shadow-sm" style={{ borderColor: '#e2e8f0' }}>
      <div className="px-4 py-3">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center me-5">
              <div className="h3 fw-bold text-primary mb-0" style={{ letterSpacing: '-0.025em' }}>
                SIIK
              </div>
            </div>
            
            <nav className="d-none d-md-flex align-items-center gap-4">
              <button className="header-nav-btn active">
                CONTENT
              </button>
              <button className="header-nav-btn">
                DISCOVER
              </button>
              <button className="header-nav-btn">
                ANALYTICS
              </button>
              <button className="header-nav-btn">
                LIVE
              </button>
            </nav>
          </div>

          <div className="d-flex align-items-center gap-2">
            <button className="btn-icon">
              <Search size={16} />
            </button>
            <button className="btn-icon">
              <Bell size={16} />
            </button>
            <button className="btn-icon">
              <Settings size={16} />
            </button>
            <button className="btn-icon">
              <Grid3X3 size={16} />
            </button>
            <button className="btn-icon rounded-circle">
              <User size={16} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
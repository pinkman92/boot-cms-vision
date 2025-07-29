import { Video, Tv, Users, Clock } from "lucide-react";
import { Header } from "@/components/Header";
import { StatsCard } from "@/components/StatsCard";
import { AnalyticsChart } from "@/components/AnalyticsChart";
import { TrendingVideos } from "@/components/TrendingVideos";
import { RecentlyPublished } from "@/components/RecentlyPublished";
import { SocialDistribution } from "@/components/SocialDistribution";
import { QuickActions } from "@/components/QuickActions";

const Index = () => {
  return (
    <div className="min-vh-100" style={{ backgroundColor: '#ffffff' }}>
      <Header />
      
      <main className="p-4">
        {/* Top Stats */}
        <div className="row g-4 mb-4">
          <div className="col-12 col-md-6 col-lg-3">
            <StatsCard
              icon={Video}
              value="280"
              label="TOTAL VIDEOS UPLOADED"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <StatsCard
              icon={Tv}
              value="280"
              label="ON PLATFORM PUBLISHED"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <StatsCard
              icon={Users}
              value="280"
              label="SOCIAL PUBLISHED"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <StatsCard
              icon={Clock}
              value="280"
              label="AVERAGE DURATION"
            />
          </div>
        </div>

        {/* Analytics and Trending Videos */}
        <div className="row g-4 mb-4">
          <div className="col-12 col-lg-6">
            <AnalyticsChart />
          </div>
          <div className="col-12 col-lg-6">
            <TrendingVideos />
          </div>
        </div>

        {/* Recently Published and Social Distribution */}
        <div className="row g-4 mb-4">
          <div className="col-12 col-lg-8">
            <RecentlyPublished />
          </div>
          <div className="col-12 col-lg-4">
            <SocialDistribution />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="row">
          <div className="col-12">
            <QuickActions />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
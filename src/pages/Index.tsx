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
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="p-6 space-y-6">
        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            icon={Video}
            value="280"
            label="TOTAL VIDEOS UPLOADED"
          />
          <StatsCard
            icon={Tv}
            value="280"
            label="ON PLATFORM PUBLISHED"
          />
          <StatsCard
            icon={Users}
            value="280"
            label="SOCIAL PUBLISHED"
          />
          <StatsCard
            icon={Clock}
            value="280"
            label="AVERAGE DURATION"
          />
        </div>

        {/* Analytics and Trending Videos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AnalyticsChart />
          <TrendingVideos />
        </div>

        {/* Recently Published and Social Distribution */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-[70%]">
            <RecentlyPublished />
          </div>
          <div className="lg:w-[30%]">
            <SocialDistribution />
          </div>
        </div>

        {/* Quick Actions */}
        <QuickActions />
      </main>
    </div>
  );
};

export default Index;

"use client";

import { DashboardLayout } from "@/components/dashboard-layout";
import { StatCard } from "@/components/ui/stat-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  CreditCard,
  Link,
  MousePointer,
  Plus,
  TrendingUp,
  Users,
} from "lucide-react";

// Mock data for the dashboard
const mockStats = {
  totalLinks: 24,
  totalClicks: 1247,
  totalConversions: 89,
  totalVolume: "$2,847",
};

const mockRecentLinks = [
  {
    id: 1,
    title: "Premium Design Pack",
    type: "Digital Product",
    clicks: 45,
    conversions: 12,
    revenue: "$240",
  },
  {
    id: 2,
    title: "Notion Template Bundle",
    type: "Digital Product",
    clicks: 32,
    conversions: 8,
    revenue: "$160",
  },
  {
    id: 3,
    title: "Coffee Donation",
    type: "Donation",
    clicks: 18,
    conversions: 15,
    revenue: "$75",
  },
];

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-heading text-foreground">
              🌟 Welcome back!
            </h1>
            <p className="text-foreground/60 mt-1">
              Here&apos;s what&apos;s happening with your links today.
            </p>
          </div>
          <Button className="bg-main text-main-foreground hover:bg-main/90 shadow-shadow">
            <Plus className="h-4 w-4 mr-2" />
            Create Link
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Links"
            value={mockStats.totalLinks}
            icon={<Link className="h-4 w-4" />}
            trend={{ value: 12, isPositive: true }}
          />
          <StatCard
            title="Total Clicks"
            value={mockStats.totalClicks}
            icon={<MousePointer className="h-4 w-4" />}
            trend={{ value: 8, isPositive: true }}
          />
          <StatCard
            title="Conversions"
            value={mockStats.totalConversions}
            icon={<TrendingUp className="h-4 w-4" />}
            trend={{ value: 15, isPositive: true }}
          />
          <StatCard
            title="Total Volume"
            value={mockStats.totalVolume}
            icon={<CreditCard className="h-4 w-4" />}
            trend={{ value: 22, isPositive: true }}
          />
        </div>

        {/* Charts Section */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Performance Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] flex items-center justify-center text-foreground/60">
                📊 Performance chart will be implemented here
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Link Type Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] flex items-center justify-center text-foreground/60">
                🥧 Link type chart will be implemented here
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Links */}
        <Card>
          <CardHeader>
            <CardTitle>🔗 Recent Links</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockRecentLinks.map((link) => (
                <div
                  key={link.id}
                  className="flex items-center justify-between p-4 border-2 border-border rounded-base bg-secondary-background"
                >
                  <div className="flex-1">
                    <h3 className="font-heading text-foreground">
                      {link.title}
                    </h3>
                    <p className="text-sm text-foreground/60">{link.type}</p>
                  </div>
                  <div className="flex items-center gap-6 text-sm">
                    <div className="text-center">
                      <p className="font-heading text-foreground">
                        {link.clicks}
                      </p>
                      <p className="text-foreground/60">Clicks</p>
                    </div>
                    <div className="text-center">
                      <p className="font-heading text-foreground">
                        {link.conversions}
                      </p>
                      <p className="text-foreground/60">Conversions</p>
                    </div>
                    <div className="text-center">
                      <p className="font-heading text-main">{link.revenue}</p>
                      <p className="text-foreground/60">Revenue</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}

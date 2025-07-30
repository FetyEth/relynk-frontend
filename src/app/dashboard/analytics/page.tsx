"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { StatCard } from "@/components/ui/stat-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  BarChart3,
  Download,
  Eye,
  MousePointer,
  PieChart,
  TrendingUp
} from "lucide-react"

// Mock analytics data
const mockAnalytics = {
  totalClicks: 1247,
  totalViews: 2156,
  conversionRate: "7.1%",
  totalRevenue: "$2,847"
}

const mockTimeFilters = [
  { label: "Last 7 days", value: "7d", active: true },
  { label: "Last 30 days", value: "30d", active: false },
  { label: "Last 90 days", value: "90d", active: false },
  { label: "All time", value: "all", active: false }
]

const mockTopLinks = [
  {
    title: "Premium Design Pack",
    clicks: 456,
    conversions: 89,
    revenue: "$1,780",
    conversionRate: "19.5%"
  },
  {
    title: "Notion Template Bundle", 
    clicks: 324,
    conversions: 45,
    revenue: "$900",
    conversionRate: "13.9%"
  },
  {
    title: "Coffee Donation",
    clicks: 234,
    conversions: 156,
    revenue: "$780",
    conversionRate: "66.7%"
  },
  {
    title: "Course Presale Access",
    clicks: 189,
    conversions: 23,
    revenue: "$460",
    conversionRate: "12.2%"
  }
]

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-heading text-foreground">
              📊 Analytics
            </h1>
            <p className="text-foreground/60 mt-1">
              Deep insights into your link performance and revenue.
            </p>
          </div>
          <Button className="bg-main text-main-foreground hover:bg-main/90 shadow-shadow">
            <Download className="h-4 w-4 mr-2" />
            Export CSV
          </Button>
        </div>

        {/* Time Filter */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <span className="text-sm font-base text-foreground/60 mr-2">Time Period:</span>
              {mockTimeFilters.map((filter) => (
                <Button
                  key={filter.value}
                  variant={filter.active ? "default" : "neutral"}
                  size="sm"
                  className={filter.active 
                    ? "bg-main text-main-foreground shadow-shadow" 
                    : "border border-border shadow-shadow"
                  }
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* KPI Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Clicks"
            value={mockAnalytics.totalClicks}
            icon={<MousePointer className="h-4 w-4" />}
            trend={{ value: 12, isPositive: true }}
          />
          <StatCard
            title="Total Views"
            value={mockAnalytics.totalViews}
            icon={<Eye className="h-4 w-4" />}
            trend={{ value: 8, isPositive: true }}
          />
          <StatCard
            title="Conversion Rate"
            value={mockAnalytics.conversionRate}
            icon={<TrendingUp className="h-4 w-4" />}
            trend={{ value: 2.3, isPositive: true }}
          />
          <StatCard
            title="Total Revenue"
            value={mockAnalytics.totalRevenue}
            icon={<BarChart3 className="h-4 w-4" />}
            trend={{ value: 25, isPositive: true }}
          />
        </div>

        {/* Charts */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Clicks Over Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center text-foreground/60 border border-dashed border-border rounded-base">
                📈 Line chart showing clicks over time will be implemented here
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5" />
                Revenue by Link Type
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center text-foreground/60 border border-dashed border-border rounded-base">
                🥧 Donut chart showing revenue distribution will be implemented here
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Top Performing Links */}
        <Card>
          <CardHeader>
            <CardTitle>🏆 Top Performing Links</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockTopLinks.map((link, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 border border-border rounded-base bg-secondary-background"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-base bg-main text-main-foreground font-heading text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-heading text-foreground">{link.title}</h3>
                      <p className="text-sm text-foreground/60">
                        Conversion Rate: {link.conversionRate}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6 text-sm">
                    <div className="text-center">
                      <p className="font-heading text-foreground">{link.clicks}</p>
                      <p className="text-foreground/60">Clicks</p>
                    </div>
                    <div className="text-center">
                      <p className="font-heading text-foreground">{link.conversions}</p>
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
  )
}
"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { StatusBadge } from "@/components/ui/status-badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  Copy,
  Edit,
  ExternalLink,
  MoreHorizontal,
  Plus,
  Search,
  Trash2
} from "lucide-react"
import Link from "next/link"

// Mock data for links
const mockLinks = [
  {
    id: 1,
    title: "Premium Design Pack",
    url: "paylynk.app/design-pack-2024",
    type: "Digital Product",
    status: "active" as const,
    clicks: 245,
    conversions: 32,
    revenue: "$640",
    createdAt: "2024-01-15"
  },
  {
    id: 2,
    title: "Notion Template Bundle",
    url: "paylynk.app/notion-templates",
    type: "Digital Product",
    status: "active" as const,
    clicks: 189,
    conversions: 28,
    revenue: "$560",
    createdAt: "2024-01-12"
  },
  {
    id: 3,
    title: "Coffee Donation",
    url: "paylynk.app/coffee-tip",
    type: "Donation",
    status: "paused" as const,
    clicks: 67,
    conversions: 45,
    revenue: "$225",
    createdAt: "2024-01-10"
  },
  {
    id: 4,
    title: "Course Presale Access",
    url: "paylynk.app/course-presale",
    type: "Token Gated",
    status: "completed" as const,
    clicks: 156,
    conversions: 89,
    revenue: "$1,780",
    createdAt: "2024-01-08"
  }
]

const linkTypes = {
  "Digital Product": "bg-chart-1 text-white",
  "Donation": "bg-chart-4 text-white", 
  "Token Gated": "bg-chart-2 text-white",
  "Payment Link": "bg-chart-3 text-black"
}

export default function LinksPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-heading text-foreground">
              🔗 Your Links
            </h1>
            <p className="text-foreground/60 mt-1">
              Manage and track all your payment links.
            </p>
          </div>
          <Link href="/dashboard/links/create">
            <Button className="bg-main text-main-foreground hover:bg-main/90 shadow-shadow glow-hover hover:scale-105 transition-all duration-300">
              <Plus className="h-4 w-4 mr-2" />
              Create New Link
            </Button>
          </Link>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-foreground/60" />
                <Input 
                  placeholder="Search links by title or URL..."
                  className="pl-10 border border-border shadow-shadow"
                />
              </div>
              <Button variant="neutral" className="border border-border shadow-shadow">
                Filter
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Links Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Links ({mockLinks.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockLinks.map((link) => (
                <div 
                  key={link.id}
                  className="flex items-center justify-between p-4 border border-border rounded-base bg-secondary-background hover:bg-background transition-colors"
                >
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3">
                      <h3 className="font-heading text-foreground">{link.title}</h3>
                      <Badge 
                        className={`border font-base text-xs px-2 py-1 rounded-base ${linkTypes[link.type as keyof typeof linkTypes]}`}
                      >
                        {link.type}
                      </Badge>
                      <StatusBadge status={link.status} />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/60">
                      <span>{link.url}</span>
                      <Button 
                        variant="neutral" 
                        size="sm"
                        className="h-6 w-6 p-0 hover:bg-main/10"
                      >
                        <Copy className="h-3 w-3" />
                      </Button>
                      <Button 
                        variant="neutral" 
                        size="sm"
                        className="h-6 w-6 p-0 hover:bg-main/10"
                      >
                        <ExternalLink className="h-3 w-3" />
                      </Button>
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
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="neutral" 
                        size="sm"
                        className="border border-border shadow-shadow"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="neutral" 
                        size="sm"
                        className="border border-border shadow-shadow hover:bg-chart-1 hover:text-white"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="neutral" 
                        size="sm"
                        className="border border-border shadow-shadow"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
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
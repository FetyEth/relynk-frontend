"use client"

import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/components/dashboard-sidebar"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b border-border px-4 bg-gradient-to-r from-background to-secondary-background/50 backdrop-blur-sm">
          <SidebarTrigger className="-ml-1 hover:scale-110 transition-transform duration-300" />
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-heading bg-gradient-to-r from-main to-main/70 bg-clip-text text-transparent">Dashboard</h1>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 bg-gradient-to-br from-background via-background to-secondary-background/30">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
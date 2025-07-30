"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { CreateLinkForm } from "@/components/create-link-form"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CreateLinkPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Link href="/dashboard/links">
            <Button variant="neutral" size="sm" className="border border-border shadow-shadow">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Links
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-heading text-foreground">
              🔗 Create New Link
            </h1>
            <p className="text-foreground/60 mt-1">
              Set up a new payment or donation link in minutes.
            </p>
          </div>
        </div>

        {/* Create Link Form */}
        <CreateLinkForm />
      </div>
    </DashboardLayout>
  )
}
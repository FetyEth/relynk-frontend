"use client";

import { DashboardLayout } from "@/components/dashboard-layout";
import { StatusBadge } from "@/components/ui/status-badge";
import { StatCard } from "@/components/ui/stat-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowDownLeft,
  ArrowUpRight,
  Clock,
  CreditCard,
  ExternalLink,
  Filter,
  Search,
} from "lucide-react";

// Mock data for payments
const mockPaymentStats = {
  totalSent: "$1,247",
  totalReceived: "$3,892",
  pending: "$156",
  thisMonth: "$2,847",
};

const mockPayments = [
  {
    id: 1,
    type: "received",
    amount: "$45.00",
    currency: "USDC",
    from: "0x1234...5678",
    to: "0x9876...4321",
    status: "completed" as const,
    txHash: "0xabcd...efgh",
    timestamp: "2024-01-15 14:30",
    linkTitle: "Premium Design Pack",
  },
  {
    id: 2,
    type: "received",
    amount: "$20.00",
    currency: "USDC",
    from: "0x5678...1234",
    to: "0x9876...4321",
    status: "completed" as const,
    txHash: "0xefgh...ijkl",
    timestamp: "2024-01-15 12:15",
    linkTitle: "Notion Template Bundle",
  },
  {
    id: 3,
    type: "received",
    amount: "$5.00",
    currency: "USDC",
    from: "0x9999...8888",
    to: "0x9876...4321",
    status: "pending" as const,
    txHash: "0xmnop...qrst",
    timestamp: "2024-01-15 11:45",
    linkTitle: "Coffee Donation",
  },
  {
    id: 4,
    type: "sent",
    amount: "$100.00",
    currency: "USDC",
    from: "0x9876...4321",
    to: "0x1111...2222",
    status: "completed" as const,
    txHash: "0xuvwx...yzab",
    timestamp: "2024-01-14 16:20",
    linkTitle: "Platform Fee",
  },
];

export default function PaymentsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-heading text-foreground">
              💰 Payments
            </h1>
            <p className="text-foreground/60 mt-1">
              Track all your payment transactions and history.
            </p>
          </div>
        </div>

        {/* Payment Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Received"
            value={mockPaymentStats.totalReceived}
            icon={<ArrowDownLeft className="h-4 w-4 text-chart-4" />}
            trend={{ value: 18, isPositive: true }}
          />
          <StatCard
            title="Total Sent"
            value={mockPaymentStats.totalSent}
            icon={<ArrowUpRight className="h-4 w-4 text-chart-1" />}
            trend={{ value: 5, isPositive: false }}
          />
          <StatCard
            title="Pending"
            value={mockPaymentStats.pending}
            icon={<Clock className="h-4 w-4 text-chart-3" />}
          />
          <StatCard
            title="This Month"
            value={mockPaymentStats.thisMonth}
            icon={<CreditCard className="h-4 w-4 text-chart-2" />}
            trend={{ value: 25, isPositive: true }}
          />
        </div>

        {/* Search and Filters */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-foreground/60" />
                <Input
                  placeholder="Search by transaction hash, address, or amount..."
                  className="pl-10 border border-border shadow-shadow"
                />
              </div>
              <Button
                variant="neutral"
                className="border border-border shadow-shadow"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Payments Table */}
        <Card>
          <CardHeader>
            <CardTitle>Transaction History ({mockPayments.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockPayments.map((payment) => (
                <div
                  key={payment.id}
                  className="flex items-center justify-between p-4 border border-border rounded-base bg-secondary-background hover:bg-background transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-2 rounded-base ${
                        payment.type === "received"
                          ? "bg-chart-4/10 text-chart-4"
                          : "bg-chart-1/10 text-chart-1"
                      }`}
                    >
                      {payment.type === "received" ? (
                        <ArrowDownLeft className="h-4 w-4" />
                      ) : (
                        <ArrowUpRight className="h-4 w-4" />
                      )}
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-heading text-foreground">
                          {payment.amount} {payment.currency}
                        </span>
                        <StatusBadge status={payment.status} />
                      </div>
                      <div className="text-sm text-foreground/60">
                        {payment.linkTitle}
                      </div>
                      <div className="text-xs text-foreground/40">
                        {payment.timestamp}
                      </div>
                    </div>
                  </div>

                  <div className="text-right space-y-1">
                    <div className="text-sm text-foreground/60">
                      From: {payment.from}
                    </div>
                    <div className="text-sm text-foreground/60">
                      To: {payment.to}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-foreground/40">
                      <span>{payment.txHash}</span>
                      <Button
                        variant="neutral"
                        size="sm"
                        className="h-5 w-5 p-0 hover:bg-main/10"
                      >
                        <ExternalLink className="h-3 w-3" />
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
  );
}

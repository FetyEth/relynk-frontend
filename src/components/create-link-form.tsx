"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, DollarSign, Calendar, Settings, Save } from "lucide-react";

interface CreateLinkFormProps {
  onClose?: () => void;
}

export function CreateLinkForm({ onClose }: CreateLinkFormProps) {
  const [linkType, setLinkType] = useState<"payment" | "donation" | "product">(
    "payment"
  );
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    targetUrl: "",
    amount: "",
    currency: "USD",
    expiryDate: "",
    maxUses: "",
  });

  const linkTypes = [
    {
      id: "payment" as const,
      label: "💳 Payment Link",
      description: "Fixed amount payment",
    },
    {
      id: "donation" as const,
      label: "❤️ Donation Link",
      description: "Flexible amount donation",
    },
    {
      id: "product" as const,
      label: "🛍️ Product Link",
      description: "Product or service sale",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Creating link:", { linkType, ...formData });
    onClose?.();
  };

  return (
    <div className="space-y-6">
      {/* Link Type Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Link className="h-5 w-5" />
            Choose Link Type
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-3">
            {linkTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setLinkType(type.id)}
                className={`p-4 border-2 rounded-base text-left transition-all ${
                  linkType === type.id
                    ? "border-main bg-main/10 shadow-shadow"
                    : "border-border hover:border-main/50"
                }`}
              >
                <h3 className="font-heading text-foreground mb-1">
                  {type.label}
                </h3>
                <p className="text-sm text-foreground/60">{type.description}</p>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Link Details Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Link Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-base text-foreground/80 mb-2 block">
                Link Title *
              </label>
              <Input
                placeholder="e.g., Premium Design Pack"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="border-2 border-border shadow-shadow"
                required
              />
            </div>

            <div>
              <label className="text-sm font-base text-foreground/80 mb-2 block">
                Description
              </label>
              <textarea
                placeholder="Describe what you're selling or collecting for..."
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full min-h-[100px] px-3 py-2 border-2 border-border rounded-base shadow-shadow bg-background text-foreground placeholder:text-foreground/60 focus:outline-none focus:ring-2 focus:ring-main"
              />
            </div>

            {linkType === "product" && (
              <div>
                <label className="text-sm font-base text-foreground/80 mb-2 block">
                  Target URL (after payment)
                </label>
                <Input
                  type="url"
                  placeholder="https://example.com/download"
                  value={formData.targetUrl}
                  onChange={(e) =>
                    setFormData({ ...formData, targetUrl: e.target.value })
                  }
                  className="border-2 border-border shadow-shadow"
                />
              </div>
            )}
          </CardContent>
        </Card>

        {/* Payment Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              Payment Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm font-base text-foreground/80 mb-2 block">
                  {linkType === "donation" ? "Suggested Amount" : "Amount *"}
                </label>
                <Input
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  value={formData.amount}
                  onChange={(e) =>
                    setFormData({ ...formData, amount: e.target.value })
                  }
                  className="border-2 border-border shadow-shadow"
                  required={linkType !== "donation"}
                />
              </div>
              <div>
                <label className="text-sm font-base text-foreground/80 mb-2 block">
                  Currency
                </label>
                <select
                  value={formData.currency}
                  onChange={(e) =>
                    setFormData({ ...formData, currency: e.target.value })
                  }
                  className="w-full px-3 py-2 border-2 border-border rounded-base shadow-shadow bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-main"
                >
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="ETH">ETH (Ξ)</option>
                  <option value="BTC">BTC (₿)</option>
                </select>
              </div>
            </div>

            {linkType === "donation" && (
              <div className="p-4 border-2 border-border rounded-base bg-secondary-background">
                <p className="text-sm text-foreground/80">
                  💡 <strong>Donation Tip:</strong> Visitors can choose their
                  own amount. The suggested amount helps guide their decision.
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Advanced Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Advanced Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm font-base text-foreground/80 mb-2 block">
                  Expiry Date (optional)
                </label>
                <Input
                  type="date"
                  value={formData.expiryDate}
                  onChange={(e) =>
                    setFormData({ ...formData, expiryDate: e.target.value })
                  }
                  className="border-2 border-border shadow-shadow"
                />
              </div>
              <div>
                <label className="text-sm font-base text-foreground/80 mb-2 block">
                  Max Uses (optional)
                </label>
                <Input
                  type="number"
                  placeholder="Unlimited"
                  value={formData.maxUses}
                  onChange={(e) =>
                    setFormData({ ...formData, maxUses: e.target.value })
                  }
                  className="border-2 border-border shadow-shadow"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Button
            type="submit"
            className="bg-main text-main-foreground hover:bg-main/90 shadow-shadow"
          >
            <Save className="h-4 w-4 mr-2" />
            Create Link
          </Button>
          {onClose && (
            <Button
              type="button"
              variant="neutral"
              onClick={onClose}
              className="border-2 border-border shadow-shadow"
            >
              Cancel
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}

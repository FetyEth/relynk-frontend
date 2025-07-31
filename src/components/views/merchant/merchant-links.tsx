"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Copy,
  Globe,
  Gift,
  ShoppingBag,
  Lock,
} from "lucide-react";
import { useState } from "react";

interface Link {
  id: number;
  title: string;
  description: string;
  url: string;
  type: string;
  price: string;
  currency: string;
  isActive: boolean;
  clicks: number;
  sales: number;
}

interface MerchantLinksProps {
  links: Link[];
}

const linkTypeIcons = {
  "Digital Product": ShoppingBag,
  Donation: Gift,
  "Token Gated": Lock,
  "Payment Link": Globe,
};

const linkTypeColors = {
  "Digital Product": "bg-chart-1 text-white",
  Donation: "bg-chart-4 text-white",
  "Token Gated": "bg-chart-2 text-white",
  "Payment Link": "bg-chart-3 text-black",
};

export function MerchantLinks({ links }: MerchantLinksProps) {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleCopyLink = async (url: string, id: number) => {
    try {
      await navigator.clipboard.writeText(`https://${url}`);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  return (
    <div className="space-y-4">
      {links.map((link) => {
        const IconComponent =
          linkTypeIcons[link.type as keyof typeof linkTypeIcons];
        const isActive = link.isActive;

        return (
          <Card
            key={link.id}
            className={`border-2 border-border shadow-shadow transition-all duration-300 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)] hover:scale-[1.02] ${
              !isActive ? "opacity-60" : ""
            }`}
          >
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                <div className="flex-1 space-y-3 w-full">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-base bg-main/10 flex items-center justify-center">
                        <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 text-main" />
                      </div>
                    </div>

                    <div className="flex-1 space-y-2 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <h3 className="font-heading text-foreground text-base sm:text-lg leading-tight pr-2">
                          {link.title}
                        </h3>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <Badge
                            className={`border font-base text-xs px-2 py-1 rounded-base ${
                              linkTypeColors[
                                link.type as keyof typeof linkTypeColors
                              ]
                            }`}
                          >
                            {link.type}
                          </Badge>
                          {!isActive && (
                            <Badge variant="secondary" className="text-xs">
                              Inactive
                            </Badge>
                          )}
                        </div>
                      </div>

                      <p className="text-foreground/60 text-sm leading-relaxed">
                        {link.description}
                      </p>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                        <div className="flex items-center gap-4 text-sm text-foreground/60">
                          <span>{link.clicks} clicks</span>
                          <span>{link.sales} sales</span>
                        </div>
                        <div className="text-left sm:text-right">
                          <p className="font-heading text-lg text-main">
                            {link.price} {link.currency}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2 pt-2">
                    <Button
                      className={`flex-1 font-heading shadow-shadow transition-all duration-300 text-sm sm:text-base ${
                        isActive
                          ? "bg-main text-main-foreground hover:bg-main/90 glow-hover hover:scale-105"
                          : "bg-foreground/20 text-foreground/60 cursor-not-allowed"
                      }`}
                      disabled={!isActive}
                      onClick={() =>
                        window.open(`https://${link.url}`, "_blank")
                      }
                    >
                      {isActive ? "Buy Now" : "Unavailable"}
                      {isActive && (
                        <ExternalLink className="h-4 w-4 ml-2" />
                      )}
                    </Button>

                    <Button
                      variant="neutral"
                      size="sm"
                      className="border border-border shadow-shadow hover:bg-main/10 flex-shrink-0"
                      onClick={() => handleCopyLink(link.url, link.id)}
                    >
                      {copiedId === link.id ? (
                        <span className="text-chart-2">✓</span>
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Share2 } from "lucide-react";
import { useState } from "react";

interface UserData {
  username: string;
  displayName: string;
  bio: string;
  avatar: string;
  verified: boolean;
  totalLinks: number;
  totalEarnings: string;
}

interface MerchantProfileProps {
  userData: UserData;
}

export function MerchantProfile({ userData }: MerchantProfileProps) {
  const [isSharing, setIsSharing] = useState(false);

  const handleShare = async () => {
    setIsSharing(true);
    try {
      if (navigator.share) {
        await navigator.share({
          title: `${userData.displayName} - Payment Links`,
          text: userData.bio,
          url: window.location.href,
        });
      } else {
        // Fallback to copying URL
        await navigator.clipboard.writeText(window.location.href);
      }
    } catch (err) {
      console.error("Error sharing:", err);
    } finally {
      setIsSharing(false);
    }
  };

  return (
    <Card className="border-2 border-border shadow-shadow">
      <CardContent className="pt-6 sm:pt-8 pb-4 sm:pb-6 text-center">
        <div className="flex flex-col items-center space-y-3 sm:space-y-4">
          <Avatar className="h-20 w-20 sm:h-24 sm:w-24 border-4 border-main shadow-shadow">
            <AvatarImage
              src={userData.avatar}
              alt={userData.displayName}
            />
            <AvatarFallback className="bg-main text-main-foreground text-xl sm:text-2xl font-heading">
              {userData.displayName.split(" ")[0][0]}
            </AvatarFallback>
          </Avatar>

          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
              <h1 className="text-xl sm:text-2xl font-heading text-foreground text-center">
                {userData.displayName}
              </h1>
              {userData.verified && (
                <Badge className="bg-chart-2 text-white border-0 text-xs">
                  ✓ Verified
                </Badge>
              )}
            </div>
            <p className="text-foreground/60 text-sm max-w-md px-2 sm:px-0">
              {userData.bio}
            </p>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8 sm:gap-6 pt-2">
            <div className="text-center">
              <p className="font-heading text-lg text-foreground">
                {userData.totalLinks}
              </p>
              <p className="text-xs text-foreground/60">Links</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-lg text-main">
                {userData.totalEarnings}
              </p>
              <p className="text-xs text-foreground/60">Earned</p>
            </div>
          </div>

          {/* Share Button */}
          <Button
            onClick={handleShare}
            variant="neutral"
            size="sm"
            className="border border-border shadow-shadow hover:bg-main/10"
            disabled={isSharing}
          >
            <Share2 className="h-4 w-4 mr-2" />
            {isSharing ? "Sharing..." : "Share Profile"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
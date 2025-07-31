import { notFound } from "next/navigation";
import { MerchantProfile } from "@/components/views/merchant/merchant-profile";
import { MerchantLinks } from "@/components/views/merchant/merchant-links";

// Mock user data - in real app, this would come from API/database
async function getUserData(username: string) {
  // Simulate API call
  if (username !== "xfajarr") {
    return null;
  }

  return {
    username: "alice_creator",
    displayName: "xfajarr | CEO Femboy Famz",
    bio: "Creating beautiful digital products & templates ✨ Supporting my journey through crypto payments 🌸",
    avatar: "/api/placeholder/150/150",
    verified: true,
    totalLinks: 6,
    totalEarnings: "$2,840",
    links: [
      {
        id: 1,
        title: "🎨 Premium Design Pack 2024",
        description: "Complete UI/UX design system with 50+ components",
        url: "paylynk.app/design-pack-2024",
        type: "Digital Product",
        price: "$29.99",
        currency: "USDC",
        isActive: true,
        clicks: 245,
        sales: 32,
      },
      {
        id: 2,
        title: "📝 Notion Template Bundle",
        description: "Productivity templates for creators and entrepreneurs",
        url: "paylynk.app/notion-templates",
        type: "Digital Product",
        price: "$19.99",
        currency: "USDC",
        isActive: true,
        clicks: 189,
        sales: 28,
      },
      {
        id: 3,
        title: "☕ Buy me a coffee",
        description: "Support my work with a small donation",
        url: "paylynk.app/coffee-tip",
        type: "Donation",
        price: "$5.00",
        currency: "USDC",
        isActive: true,
        clicks: 67,
        sales: 45,
      },
      {
        id: 4,
        title: "🎓 Course Presale Access",
        description: "Early access to my upcoming Web3 design course",
        url: "paylynk.app/course-presale",
        type: "Token Gated",
        price: "$99.99",
        currency: "USDC",
        isActive: false,
        clicks: 156,
        sales: 89,
      },
      {
        id: 5,
        title: "🎵 Music Pack Vol. 1",
        description: "Royalty-free background music for content creators",
        url: "paylynk.app/music-pack-1",
        type: "Digital Product",
        price: "$15.00",
        currency: "USDC",
        isActive: true,
        clicks: 98,
        sales: 23,
      },
      {
        id: 6,
        title: "💎 VIP Community Access",
        description: "Join my exclusive Discord community for creators",
        url: "paylynk.app/vip-community",
        type: "Token Gated",
        price: "$49.99",
        currency: "USDC",
        isActive: true,
        clicks: 134,
        sales: 67,
      },
    ],
  };
}

interface MerchantPageProps {
  params: Promise<{
    username: string;
  }>;
}

export default async function MerchantPage({ params }: MerchantPageProps) {
  const { username } = await params;

  const userData = await getUserData(username);

  if (!userData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header with gradient background */}
      <div className="bg-gradient-to-br from-main/20 via-chart-2/10 to-chart-4/20 pt-4 sm:pt-8 pb-12 sm:pb-16">
        <div className="max-w-2xl mx-auto px-3 sm:px-4">
          <MerchantProfile userData={userData} />
        </div>
      </div>

      {/* Links Section */}
      <div className="max-w-2xl mx-auto px-3 sm:px-4 -mt-6 sm:-mt-8 pb-8 sm:pb-12">
        <MerchantLinks links={userData.links} />

        {/* Footer */}
        <div className="text-center pt-6 sm:pt-8 pb-4">
          <p className="text-foreground/40 text-sm">
            Powered by <span className="text-main font-heading">Paylynk</span>{" "}
            🌸
          </p>
        </div>
      </div>
    </div>
  );
}

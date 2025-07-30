import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import ConnectWallet from "./ui/connect-wallet";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full pt-4">
      <Card className="bg-main text-white max-w-6xl w-full mx-auto flex-row items-center justify-between py-4 border-2 border-shadow">
        <CardHeader>
          <CardTitle>Paylynk</CardTitle>
        </CardHeader>
        <CardContent>
          <ConnectWallet className="bg-white text-main shadow-rose-200 border-rose-200 border-2" />
        </CardContent>
      </Card>
    </nav>
  );
}

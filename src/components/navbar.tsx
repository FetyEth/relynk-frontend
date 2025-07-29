import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full pt-4">
      <Card className="bg-main text-white shadow-[8px_8px_0px_0px_var(--shadow)] max-w-6xl w-full mx-auto flex-row items-center justify-between py-4">
        <CardHeader>
          <CardTitle>Paylisk</CardTitle>
        </CardHeader>
        <CardContent>Home</CardContent>
      </Card>
    </nav>
  );
}

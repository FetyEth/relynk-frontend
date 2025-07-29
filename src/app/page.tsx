import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GridPattern from "@/components/ui/grid-pattern";
import { MousePointer } from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="relative h-dvh lg:max-h-[800px] flex flex-col pt-[calc(4rem+40px)] items-center">
        <GridPattern className="opacity-50 z-[-1]" />
        <div className="relative">
          <div className="space-y-2 text-center">
            <h1 className="text-5xl font-bold relative">
              Web3 Actions
              <br />
              in Just <i>one Click</i>
            </h1>
            <MousePointer className="absolute right-0 top-4" />
            <p>
              <b>Send. Request. Mint. Claim.</b> All in one click.
              <br />
              The simplest way to share Web3 actions with anyone.
            </p>
          </div>

          <div className="relative group w-full mt-4">
            <Card className="w-full max-w-[240px] mx-auto transition-all duration-300 group-hover:-rotate-2 bg-white">
              <CardHeader>
                <CardTitle>Send 0.01 ETH</CardTitle>
                <CardContent className="px-0">
                  <div className="flex justify-between items-center">
                    <div>
                      <p>to:</p>
                      <code className="text-sm text-gray-500 p-1 bg-gray-100/50 rounded-md">
                        0x0E1eC..
                      </code>
                      <p className="text-xs">actionlink.app/abc123</p>
                    </div>
                    <Button variant="reverse" className="bg-gray-200">
                      Send
                    </Button>
                  </div>
                </CardContent>
              </CardHeader>
            </Card>
            <Card className="w-full max-w-[240px] mx-auto transition-all duration-300 group-hover:left-[calc(80%_-_80px)] group-hover:z-0 rotate-4 bg-white absolute top-0 -translate-x-1/2 left-1/2 z-[-1]">
              <CardHeader>
                <CardTitle>Receieve 0.01 ETH</CardTitle>
                <CardContent className="px-0">
                  <div className="flex justify-between items-center">
                    <div>
                      <p>from:</p>
                      <code className="text-sm text-gray-500 p-1 bg-gray-100/50 rounded-md">
                        0x0E2bA..
                      </code>
                      <p className="text-xs">actionlink.app/abc123</p>
                    </div>
                  </div>
                </CardContent>
              </CardHeader>
            </Card>
          </div>

          <div className="flex items-center mt-8 gap-4 justify-center">
            <Button>Create a Link</Button>
            <Button variant="neutral">View Demo</Button>
          </div>
        </div>
      </section>
      <section className="w-full max-w-6xl mx-auto bg-white min-h-[600px] rounded-t-4xl border-2 border-shadow shadow-shadow">
        <div></div>
      </section>
    </>
  );
}

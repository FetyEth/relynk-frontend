import { cn } from "@/lib/utils";

export default function GridPattern({ className }: { className?: string }) {
  return (
    <div
      className={cn("absolute inset-0 z-0", className)}
      style={{
        backgroundImage: `
        linear-gradient(to right, #F0F0F0 1px, transparent 1px),
        linear-gradient(to bottom, #F0F0F0 1px, transparent 1px)
      `,
        backgroundSize: "50px 50px",
        WebkitMaskImage:
          "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
        maskImage:
          "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
      }}
    />
  );
}

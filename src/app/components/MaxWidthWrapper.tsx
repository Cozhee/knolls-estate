import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function MaxWidthWrapper({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-4 lg:px-0", className)}>
      {children}
    </div>
  );
}

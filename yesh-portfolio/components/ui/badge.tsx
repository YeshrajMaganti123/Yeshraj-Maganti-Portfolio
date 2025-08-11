import * as React from "react";
import { cn } from "../utils";
export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn("inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/90", className)} {...props} />;
}

import { cn } from "@/utils/cn";
import React from "react";

type SkeltonProps = {
  className?: string;
};

function Skelton({ className }: SkeltonProps) {
  return (
    <div
      className={cn(
        "animated-plus h-4 w-[550px] rounded-md bg-white/5",
        className
      )}
    />
  );
}

export default Skelton;

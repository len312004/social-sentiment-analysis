import React from "react";
import { cn } from "../../lib/utils";

export const Card: React.FC<{ className?: string }> = ({ children, className }) => {
  return <div className={cn("card p-8", className)}>{children}</div>;
};

export const CardContent: React.FC<{ className?: string }> = ({ children, className }) => {
  return <div className={cn("text-center", className)}>{children}</div>;
};

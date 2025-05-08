import type { FC } from "react";

import { cn } from "@workspace/ui/lib/utils";

import "./corner-tips.css";

interface CornerTipsProps {
  title: string;

  href?: string;

  className?: string | undefined;
}

const CornerTips: FC<CornerTipsProps> = (props) => {
  return (
    <a
      className={cn("corner-tips-container", props.className)}
      href={props.href}
      title={props.title}
    >
      {props.title}
    </a>
  );
};

CornerTips.displayName = "CornerTips";

export type { CornerTipsProps };
export { CornerTips };
export default CornerTips;

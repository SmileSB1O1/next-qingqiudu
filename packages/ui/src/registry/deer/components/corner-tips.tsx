import type { FC } from "react";

import './corner-tips.css';

interface CornerTipsProps {
  title: string;

  href?: string;
}

const CornerTips: FC<CornerTipsProps> = (props) => {
  return (
    <a
      className="corner-tips-container"
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

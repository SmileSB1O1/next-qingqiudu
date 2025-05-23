"use client";

import { PropsWithChildren, useRef } from "react";
import RDraggable from "react-draggable";
import type { DraggableProps as RDraggableProps } from "react-draggable";

interface DraggableProps extends Omit<Partial<RDraggableProps>, "nodeRef"> {}

const Draggable: React.FC<PropsWithChildren<DraggableProps>> = (props) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <RDraggable {...props} nodeRef={ref as any}>
      <div ref={ref}>{props.children}</div>
    </RDraggable>
  );
};

Draggable.displayName = "DragMarbles";

export default Draggable;
export type { DraggableProps };
export { Draggable };

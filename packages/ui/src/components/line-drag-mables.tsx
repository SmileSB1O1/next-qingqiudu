import Draggable from "@workspace/ui/components/draggable";
import { PropsWithChildren } from "react";

interface LineDragMarblesProps {
  length?: number;
}

const LineDragMarbles: React.FC<PropsWithChildren<LineDragMarblesProps>> = (
  props
) => {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="w-[6rem] bg-red-400 h-[0.5rem]"></div>

      <Draggable
        bounds={{ left: 0, top: 0, right: props.length ?? 300, bottom: 0 }}
      >
        {props.children}
      </Draggable>
    </div>
  );
};

LineDragMarbles.displayName = "LineDragMarbles";
export default LineDragMarbles;
export type { LineDragMarblesProps };
export { LineDragMarbles };

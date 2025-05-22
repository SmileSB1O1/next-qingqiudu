"use client";

import { useEffect, useRef } from "react";
import * as fabric from "fabric"; // v6

interface LineDraggableProps {}

const LineDraggable: React.FC<LineDraggableProps> = () => {
  const canvasEl = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasEl.current) {
      return;
    }

    const canvas = new fabric.Canvas(canvasEl.current, {
      width: 800,
      height: 600,
      backgroundColor: "#f0f0f0",
    });

    const line = new fabric.Line([50, 100, 200, 100], {
      stroke: "red",
      strokeWidth: 5,
      selectable: false,
    });

    canvas.add(line);

    // Enable dragging
    line.set({
      hasControls: true,
      lockRotation: true,
      lockScalingX: true,
      lockScalingY: true,
    });

    canvas.renderAll();

    return () => {
      canvas.dispose();
    };
  }, [canvasEl.current]);

  return <canvas width="300" height="300" ref={canvasEl} />;
};

LineDraggable.displayName = "LineDraggable";

export default LineDraggable;
export type { LineDraggableProps };
export { LineDraggable };

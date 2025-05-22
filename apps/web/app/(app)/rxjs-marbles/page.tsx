import LineDraggable from "@workspace/ui/components/line-draggable";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <LineDraggable />
      </div>
    </div>
  );
}

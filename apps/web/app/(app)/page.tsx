import { Button } from "@workspace/ui/components/button";
import LineDraggable from "@workspace/ui/components/line-draggable";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">You are finally here.</h1>
        <Button size="sm">Start Trip</Button>
        <LineDraggable />
      </div>
    </div>
  );
}

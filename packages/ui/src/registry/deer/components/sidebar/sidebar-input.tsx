import { Input } from "@workspace/ui/components/input.js";
import { cn } from "@workspace/ui/lib/utils";

function SidebarInput({
  className,
  ...props
}: React.ComponentProps<typeof Input>) {
  return (
    <Input
      data-slot="sidebar-input"
      data-sidebar="input"
      className={cn("bg-background h-8 w-full shadow-none", className)}
      {...props}
    />
  );
}

export { SidebarInput };

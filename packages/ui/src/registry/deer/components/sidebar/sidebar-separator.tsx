import { Separator } from "@radix-ui/react-separator";
import { cn } from "@workspace/ui/lib/utils.js";

function SidebarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="sidebar-separator"
      data-sidebar="separator"
      className={cn("bg-sidebar-border mx-2 w-auto", className)}
      {...props}
    />
  );
}

export { SidebarSeparator };

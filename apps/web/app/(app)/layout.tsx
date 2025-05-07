import { ModeSwitcher } from "@/components/mode-switcher";
import { NavHeader } from "@/components/nav-header";
import { ThemeSelector } from "@/components/theme-selector";
import { Separator } from "@workspace/ui/components/separator";
import { SidebarInset } from "@workspace/ui/deer/components/sidebar/sidebar-inset";
import { CornerTips } from "@workspace/ui/deer/components/corner-tips";

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarInset>
      <CornerTips title={process.env.NEXT_PUBLIC_STAGE ?? "development"} />
      <header className="sticky inset-x-0 top-0 isolate z-10 flex shrink-0 items-center gap-2 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 w-full items-center gap-2 px-4">
          {/* <SidebarTrigger className="-ml-1.5" /> */}
          {/* <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          /> */}
          <NavHeader />
          <div className="ml-auto flex items-center gap-2">
            <ThemeSelector />
            <ModeSwitcher />
          </div>
        </div>
      </header>
      {children}
    </SidebarInset>
  );
}

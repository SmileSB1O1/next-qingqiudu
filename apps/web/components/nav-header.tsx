"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@workspace/ui/components/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavHeader() {
  const pathname = usePathname();

  return (
    <NavigationMenu className="hidden sm:flex">
      <NavigationMenuList className="gap-2 *:data-[slot=navigation-menu-item]:h-7 **:data-[slot=navigation-menu-link]:py-1 **:data-[slot=navigation-menu-link]:font-medium">
        <NavigationMenuItem>
          <NavigationMenuLink asChild data-active={pathname === "/"}>
            <Link href="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild data-active={pathname === "/charts"}>
            <Link href="/rxjs-marbles">Rxjs Marbles</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild data-active={pathname === "/forms"}>
            <Link href="/forms">Forms</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

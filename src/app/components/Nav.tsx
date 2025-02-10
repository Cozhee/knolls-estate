"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Community Rules",
    href: "/rules",
    description: "Bylaws, CC&R's, and new home contruction guidelines",
  },
  {
    title: "Events",
    href: "/docs/primitives/hover-card",
    description: "Local community events",
  },
  {
    title: "Pets and Wildlife",
    href: "/docs/primitives/progress",
    description: "Local nature around Knolls Estate",
  },
  {
    title: "Social Commitee",
    href: "/docs/primitives/progress",
    description: "Community voted members",
  },
];

export function Nav() {
  return (
    <MaxWidthWrapper className="py-5">
      <NavigationMenu>
        <NavigationMenuList>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-md">
              The Association
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <ListItem href="/board-of-directors" title="Board of Directors">
                  Community leadership
                </ListItem>
                <ListItem
                  href="/docs/primitives/typography"
                  title="Board Meeting Minutes"
                >
                  Meeting overviews
                </ListItem>
                <ListItem
                  href="/docs/primitives/typography"
                  title="Annual Reports"
                >
                  Knolls Estates summaries
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-md">
              Community
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-md">
              Finance
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[200px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <ListItem href="/docs" title="Approved Budgets">
                  Yearly budget reports
                </ListItem>
                <ListItem href="/docs" title="Homes For Sale">
                  Browse available homes for sale
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </MaxWidthWrapper>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

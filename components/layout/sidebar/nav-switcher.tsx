"use client"

import * as React from "react"

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavSwitcher({
  system,
}: {
  system: {
    name: string
    logo: React.ElementType
  }[]
}) {
  const activeSystem = system[0]

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground p-0 hover:bg-transparent active:bg-transparent"
        >
          <div className="bg-sidebar-primary border text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
            <activeSystem.logo className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">{activeSystem.name}</span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

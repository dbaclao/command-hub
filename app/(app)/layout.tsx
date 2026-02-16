import { AppSidebar } from "@/components/layout/sidebar/app-sidebar"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation";

export default async function Layout({ children }: { children: React.ReactNode }) {
    const { userId } = await auth();

    if (!userId) {
        redirect("/sign-in");
    }

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex border-b h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator
                            orientation="vertical"
                            className="mr-2 data-vertical:h-4 data-vertical:self-auto"
                        />
                    </div>
                </header>
                {children}
            </SidebarInset>
        </SidebarProvider>
    )
}

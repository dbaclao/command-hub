"use client"

import * as React from "react"
import { ClerkProvider } from "@clerk/nextjs"
import { dark } from "@clerk/themes"
import { TooltipProvider } from "@/components/ui/tooltip"
import { useGlobalStore } from "@/stores/use-global-store"
import { ThemeEffect } from "@/components/layout/theme/theme-effect"

export function Providers({ children }: { children: React.ReactNode }) {
    const theme = useGlobalStore((state) => state.theme)
    const [clerkTheme, setClerkTheme] = React.useState<typeof dark | undefined>(undefined)

    React.useEffect(() => {
        const updateTheme = () => {
            if (theme === "system") {
                const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches
                setClerkTheme(isDark ? dark : undefined)
            } else if (theme === "dark") {
                setClerkTheme(dark)
            } else {
                setClerkTheme(undefined)
            }
        }

        updateTheme()

        if (theme === "system") {
            const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
            const handleChange = () => updateTheme()
            mediaQuery.addEventListener("change", handleChange)
            return () => mediaQuery.removeEventListener("change", handleChange)
        }
    }, [theme])

    return (
        <ClerkProvider
            afterSignOutUrl="/sign-in"
            appearance={{
                baseTheme: clerkTheme,
                variables: {
                    borderRadius: "0",
                },
            }}
        >
            <TooltipProvider>
                <ThemeEffect />
                {children}
            </TooltipProvider>
        </ClerkProvider>
    )
}

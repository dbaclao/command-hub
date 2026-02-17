"use client"

import { useGlobalStore } from "@/stores/use-global-store"
import * as React from "react"

export function ThemeEffect() {
    const theme = useGlobalStore((state) => state.theme)

    React.useEffect(() => {
        const root = window.document.body
        root.classList.remove("light", "dark")

        if (theme === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
                .matches
                ? "dark"
                : "light"

            root.classList.add(systemTheme)
            return
        }

        if (theme === "dark") {
            root.classList.add("dark")
        } else {
            root.classList.add("light") // Explicitly add light if not dark or system
        }
    }, [theme])

    React.useEffect(() => {
        if (theme !== "system") return

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

        const handleChange = () => {
            const root = window.document.body
            const systemTheme = mediaQuery.matches ? "dark" : "light"
            root.classList.remove("light", "dark")
            root.classList.add(systemTheme)
        }

        mediaQuery.addEventListener("change", handleChange)
        return () => mediaQuery.removeEventListener("change", handleChange)
    }, [theme])

    return null
}

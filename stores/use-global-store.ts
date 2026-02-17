import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type Theme = 'dark' | 'light' | 'system';

interface GlobalState {
    isSidebarOpen: boolean
    theme: Theme
    toggleSidebar: () => void
    setSidebarOpen: (isOpen: boolean) => void
    setTheme: (theme: Theme) => void
}

export const useGlobalStore = create<GlobalState>()(
    persist(
        (set) => ({
            isSidebarOpen: true,
            theme: 'system',
            toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
            setSidebarOpen: (isOpen) => set({ isSidebarOpen: isOpen }),
            setTheme: (theme) => set({ theme }),
        }),
        {
            name: 'global-store',
            storage: createJSONStorage(() => localStorage),
        }
    )
)

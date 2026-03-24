// Shared theme store for managing dark mode across the app
// Uses useSyncExternalStore pattern for React 18+ compatibility

export const themeStore = {
    getSnapshot: (): boolean => {
        if (globalThis.window === undefined) return false
        return document.documentElement.classList.contains('dark')
    },
    getServerSnapshot: (): boolean => false,
    subscribe: (callback: () => void): (() => void) => {
        const observer = new MutationObserver(callback)
        if (globalThis.window !== undefined) {
            observer.observe(document.documentElement, {
                attributes: true,
                attributeFilter: ['class']
            })
        }
        return () => observer.disconnect()
    },
    setDarkTheme: (): void => {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
    },
    setLightTheme: (): void => {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
    },
    initTheme: (): void => {
        if (globalThis.window === undefined) return
        const savedTheme = localStorage.getItem('theme')
        const systemPrefersDark = globalThis.window.matchMedia('(prefers-color-scheme: dark)').matches
        if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }
}
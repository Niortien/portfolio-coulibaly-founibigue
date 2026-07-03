"use client"

import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

type Theme = "dark" | "light"

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "light"
    return (localStorage.getItem("theme") as Theme) || "light"
  })

  useEffect(() => {
    document.documentElement.classList.remove("dark", "light", "matrix")
    document.documentElement.classList.add(theme)
  }, [theme])

  const toggle = () => {
    const next: Theme = theme === "light" ? "dark" : "light"
    setTheme(next)
    localStorage.setItem("theme", next)
  }

  return (
    <button
      onClick={toggle}
      aria-label="Changer de thème"
      title={theme === "light" ? "Passer en mode sombre" : "Passer en mode clair"}
      className="flex h-9 w-9 items-center justify-center border border-border bg-card text-foreground hover:border-primary/50 transition-colors cursor-pointer shrink-0"
      suppressHydrationWarning
    >
      {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </button>
  )
}

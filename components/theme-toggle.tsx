"use client"

import { Moon, Sun, Contrast } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

type Theme = "dark" | "matrix" | "light"

const themes: Theme[] = ["dark", "matrix", "light"]

const themeIcons = {
  dark: <Moon className="h-4 w-4" />,
  matrix: <Contrast className="h-4 w-4 text-green-400" />,
  light: <Sun className="h-4 w-4" />,
}

const themeLabels = {
  dark: "Sombre",
  matrix: "Matrix",
  light: "Blanc",
}

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>("dark")
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as Theme) || "dark"
    applyTheme(saved)
    setTheme(saved)
  }, [])

  const applyTheme = (t: Theme) => {
    document.documentElement.classList.remove("dark", "matrix", "light")
    document.documentElement.classList.add(t)
    localStorage.setItem("theme", t)
  }

  const selectTheme = (t: Theme) => {
    setTheme(t)
    applyTheme(t)
    setOpen(false)
  }

  return (
    <div className="fixed top-20 right-4 z-50 flex flex-col items-end gap-2">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setOpen((o) => !o)}
        className="hover-glow"
        title={`Thème : ${themeLabels[theme]}`}
      >
        {themeIcons[theme]}
        <span className="sr-only">Changer le thème</span>
      </Button>

      {open && (
        <div className="glass rounded-xl overflow-hidden shadow-xl border border-border/40 flex flex-col min-w-[120px]">
          {themes.map((t) => (
            <button
              key={t}
              onClick={() => selectTheme(t)}
              className={`flex items-center gap-2.5 px-4 py-2.5 text-sm font-body transition-colors hover:bg-primary/10 ${
                theme === t ? "text-primary font-semibold" : "text-muted-foreground"
              }`}
            >
              {themeIcons[t]}
              {themeLabels[t]}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

"use client"

import { Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../components/ui/dropdown-menu"
import { motion } from "framer-motion"

const colorThemes = [
  { name: "Blue", value: "blue", color: "bg-blue-500" },
  { name: "Green", value: "green", color: "bg-green-500" },
  { name: "Purple", value: "purple", color: "bg-purple-500" },
  { name: "Orange", value: "orange", color: "bg-orange-500" },
  { name: "Red", value: "red", color: "bg-red-500" },
  { name: "Pink", value: "pink", color: "bg-pink-500" },
]

export function ColorThemeToggle() {
  const setColorTheme = (theme: string) => {
    document.documentElement.setAttribute("data-color-theme", theme)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
            <Palette className="h-4 w-4" />
          </motion.div>
          <span className="sr-only">Change color theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {colorThemes.map((theme) => (
          <DropdownMenuItem
            key={theme.value}
            onClick={() => setColorTheme(theme.value)}
            className="flex items-center gap-2"
          >
            <div className={`w-4 h-4 rounded-full ${theme.color}`} />
            {theme.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

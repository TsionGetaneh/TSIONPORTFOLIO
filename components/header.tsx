"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface HeaderProps {
  darkMode: boolean
  setDarkMode: (dark: boolean) => void
  colorTheme: "pink" | "purple" | "blue" | "green" | "orange"
  setColorTheme: React.Dispatch<React.SetStateAction<"pink" | "purple" | "blue" | "green" | "orange">>
}

const colorThemes = [
  { name: "Pink", value: "pink", colors: { primary: "#ec4899", secondary: "#f472b6" } },
  { name: "Purple", value: "purple", colors: { primary: "#a855f7", secondary: "#c084fc" } },
  { name: "Blue", value: "blue", colors: { primary: "#3b82f6", secondary: "#60a5fa" } },
  { name: "Green", value: "green", colors: { primary: "#10b981", secondary: "#34d399" } },
  { name: "Orange", value: "orange", colors: { primary: "#f59e0b", secondary: "#fbbf24" } },
]

export default function Header({ darkMode, setDarkMode, colorTheme, setColorTheme }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isColorMenuOpen, setIsColorMenuOpen] = useState(false)
  const pathname = usePathname()

  const currentTheme = colorThemes.find((t) => t.value === colorTheme) || colorThemes[0]

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: darkMode ? "rgba(17, 24, 39, 0.95)" : "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(10px)",
        borderBottom: `1px solid ${darkMode ? "rgba(75, 85, 99, 0.3)" : "rgba(229, 231, 235, 0.3)"}`,
        padding: "1rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            background: `linear-gradient(45deg, ${currentTheme.colors.primary}, ${currentTheme.colors.secondary})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textDecoration: "none",
          }}
        >
          ✨ TSION
        </Link>

        {/* Desktop Navigation */}
        <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  textDecoration: "none",
                  color: pathname === item.href ? currentTheme.colors.primary : darkMode ? "#e5e7eb" : "#374151",
                  fontWeight: pathname === item.href ? "600" : "500",
                  padding: "0.5rem 1rem",
                  borderRadius: "0.5rem",
                  transition: "all 0.3s ease",
                  background: pathname === item.href ? `${currentTheme.colors.primary}20` : "transparent",
                }}
                onMouseOver={(e) => {
                  if (pathname !== item.href) {
                    (e.target as HTMLElement).style.color = currentTheme.colors.primary;
                    (e.target as HTMLElement).style.background = `${currentTheme.colors.primary}10`
                  }
                }}
                onMouseOut={(e) => {
                  if (pathname !== item.href) {
                    (e.target as HTMLElement).style.color = darkMode ? "#e5e7eb" : "#374151";
                    (e.target as HTMLElement).style.background = "transparent"
                  }
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Theme Controls */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            {/* Color Theme Selector */}
            <div style={{ position: "relative" }}>
              <button
                onClick={() => setIsColorMenuOpen(!isColorMenuOpen)}
                style={{
                  background: currentTheme.colors.primary,
                  border: "none",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                }}
                onMouseOver={(e) => ((e.target as HTMLButtonElement).style.transform = "scale(1.1)")}
                onMouseOut={(e) => ((e.target as HTMLButtonElement).style.transform = "scale(1)")}
              >
                🎨
              </button>

              {isColorMenuOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "50px",
                    right: 0,
                    background: darkMode ? "#1f2937" : "white",
                    borderRadius: "0.5rem",
                    padding: "0.5rem",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    minWidth: "120px",
                  }}
                >
                  {colorThemes.map((theme) => (
                    <button
                      key={theme.value}
                      onClick={() => {
                        setColorTheme(theme.value as "pink" | "purple" | "blue" | "green" | "orange")
                        setIsColorMenuOpen(false)
                      }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "0.5rem",
                        border: "none",
                        background: colorTheme === theme.value ? `${theme.colors.primary}20` : "transparent",
                        borderRadius: "0.25rem",
                        cursor: "pointer",
                        color: darkMode ? "#e5e7eb" : "#374151",
                      }}
                    >
                      <div
                        style={{
                          width: "16px",
                          height: "16px",
                          borderRadius: "50%",
                          background: theme.colors.primary,
                        }}
                      />
                      {theme.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Dark/Light Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              style={{
                background: darkMode ? "#374151" : "#f3f4f6",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                cursor: "pointer",
                fontSize: "1.2rem",
                transition: "transform 0.3s ease",
              }}
              onMouseOver={(e) => ((e.target as HTMLButtonElement).style.transform = "scale(1.1)")}
              onMouseOut={(e) => ((e.target as HTMLButtonElement).style.transform = "scale(1)")}
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            fontSize: "1.5rem",
            cursor: "pointer",
            color: darkMode ? "#e5e7eb" : "#374151",
          }}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: darkMode ? "#1f2937" : "white",
            borderTop: `1px solid ${darkMode ? "rgba(75, 85, 99, 0.3)" : "rgba(229, 231, 235, 0.3)"}`,
            padding: "1rem",
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              style={{
                display: "block",
                padding: "0.75rem",
                textDecoration: "none",
                color: pathname === item.href ? currentTheme.colors.primary : darkMode ? "#e5e7eb" : "#374151",
                fontWeight: pathname === item.href ? "600" : "500",
                borderRadius: "0.5rem",
                marginBottom: "0.5rem",
                background: pathname === item.href ? `${currentTheme.colors.primary}20` : "transparent",
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Header from "@/components/header"

const colorThemes = {
  pink: { primary: "#ec4899", secondary: "#f472b6", gradient: "linear-gradient(135deg, #ec4899 0%, #f472b6 100%)" },
  purple: { primary: "#a855f7", secondary: "#c084fc", gradient: "linear-gradient(135deg, #a855f7 0%, #c084fc 100%)" },
  blue: { primary: "#3b82f6", secondary: "#60a5fa", gradient: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)" },
  green: { primary: "#10b981", secondary: "#34d399", gradient: "linear-gradient(135deg, #10b981 0%, #34d399 100%)" },
  orange: { primary: "#f59e0b", secondary: "#fbbf24", gradient: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)" },
}

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [colorTheme, setColorTheme] = useState<"pink" | "purple" | "blue" | "green" | "orange">("pink")

  useEffect(() => {
    setMounted(true)
    const savedDarkMode = localStorage.getItem("darkMode")
    const savedColorTheme = localStorage.getItem("colorTheme")
    if (savedDarkMode) setDarkMode(JSON.parse(savedDarkMode))
    if (
      savedColorTheme &&
      ["pink", "purple", "blue", "green", "orange"].includes(savedColorTheme)
    ) {
      setColorTheme(savedColorTheme as "pink" | "purple" | "blue" | "green" | "orange")
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("darkMode", JSON.stringify(darkMode))
      localStorage.setItem("colorTheme", colorTheme)
    }
  }, [darkMode, colorTheme, mounted])

  if (!mounted) return null

  const theme = colorThemes[colorTheme]

  return (
    <div
      style={{
        minHeight: "100vh",
        background: darkMode ? "linear-gradient(135deg, #1f2937 0%, #111827 100%)" : theme.gradient,
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        color: darkMode ? "#f9fafb" : "white",
        transition: "all 0.3s ease",
      }}
    >
      <Header darkMode={darkMode} setDarkMode={setDarkMode} colorTheme={colorTheme} setColorTheme={setColorTheme} />

      <div
        style={{
          paddingTop: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          padding: "100px 20px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "60px",
            alignItems: "center",
          }}
        >
          {/* Profile Section */}
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                width: "320px",
                height: "320px",
                borderRadius: "50%",
                background: darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.2)",
                margin: "0 auto 30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: darkMode ? "0 20px 40px rgba(0,0,0,0.3)" : "0 20px 40px rgba(0,0,0,0.1)",
                animation: "float 4s ease-in-out infinite",
                border: `3px solid ${theme.primary}`,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `conic-gradient(from 0deg, ${theme.primary}, ${theme.secondary}, ${theme.primary})`,
                  animation: "rotate 8s linear infinite",
                  opacity: 0.3,
                }}
              />
              <img
                src="/images/profile.jpg"
                alt="Tsion Getaneh"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                  position: "relative",
                  zIndex: 1,
                }}
                onError={(e) => {
                  // Fallback to emoji if image doesn't load
                  const img = e.target as HTMLImageElement
                  img.style.display = "none"
                  const sibling = img.nextSibling as HTMLElement | null
                  if (sibling) sibling.style.display = "flex"
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "none",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "120px",
                  zIndex: 1,
                }}
              >
                👩‍💻
              </div>
            </div>

            {/* Floating Elements */}
            <div
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  background: theme.primary,
                  borderRadius: "50%",
                  width: "60px",
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  animation: "bounce 2s ease-in-out infinite",
                  animationDelay: "0s",
                }}
              >
                💖
              </div>
              <div
                style={{
                  background: theme.secondary,
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  animation: "bounce 2s ease-in-out infinite",
                  animationDelay: "0.5s",
                }}
              >
                ✨
              </div>
              <div
                style={{
                  background: theme.primary,
                  borderRadius: "50%",
                  width: "55px",
                  height: "55px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                  animation: "bounce 2s ease-in-out infinite",
                  animationDelay: "1s",
                }}
              >
                🚀
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div>
            <h1
              style={{
                fontSize: "3.5rem",
                marginBottom: "20px",
                fontWeight: "800",
                background: darkMode
                  ? `linear-gradient(45deg, ${theme.primary}, ${theme.secondary})`
                  : "linear-gradient(45deg, #fff, #f0f0f0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "colorShift 4s ease-in-out infinite",
                lineHeight: "1.1",
              }}
            >
              Hi, I'm Tsion! 👋
            </h1>

            <div
              style={{
                fontSize: "1.8rem",
                marginBottom: "25px",
                fontWeight: "600",
                opacity: 0.9,
                minHeight: "60px",
              }}
            >
              <span
                style={{
                  animation: "typewriter 4s steps(40) infinite",
                  borderRight: `2px solid ${theme.primary}`,
                  paddingRight: "5px",
                }}
              >
                Software Engineer✨
              </span>
            </div>

            <p
              style={{
                fontSize: "1.2rem",
                lineHeight: "1.7",
                marginBottom: "35px",
                opacity: 0.85,
                maxWidth: "600px",
              }}
            >
              a passionate Software Engineering student at AAiT and a creative problem-solver participate in a2sv for DSA course in Python and backend developer . I love building functional, user-friendly applications with clean design and efficient code. Whether I’m working on mobile apps, web platforms, or exploring cybersecurity and system design, I bring curiosity, consistency, and creativity to everything I do.
Let’s build something awesome together. 🚀 💫
            </p>

            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginBottom: "40px" }}>
              <Link
                href="/about"
                style={{
                  background: darkMode ? theme.primary : "rgba(255,255,255,0.2)",
                  color: darkMode ? "white" : "white",
                  padding: "15px 30px",
                  borderRadius: "30px",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "1.1rem",
                  transition: "all 0.3s ease",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                }}
                onMouseOver={(e) => {
                  const target = e.target as HTMLElement
                  target.style.transform = "translateY(-3px)"
                  target.style.boxShadow = "0 8px 25px rgba(0,0,0,0.2)"
                }}
                onMouseOut={(e) => {
                  const target = e.target as HTMLElement
                  target.style.transform = "translateY(0)"
                  target.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)"
                }}
              >
                About Me 💫
              </Link>

              <Link
                href="/projects"
                style={{
                  border: `2px solid ${darkMode ? theme.primary : "rgba(255,255,255,0.5)"}`,
                  color: darkMode ? theme.primary : "white",
                  padding: "13px 30px",
                  borderRadius: "30px",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "1.1rem",
                  transition: "all 0.3s ease",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "transparent",
                }}
                onMouseOver={(e) => {
                  const target = e.target as HTMLElement
                  target.style.background = darkMode ? theme.primary : "rgba(255,255,255,0.2)"
                  target.style.color = "white"
                  target.style.transform = "translateY(-3px)"
                }}
                onMouseOut={(e) => {
                  const target = e.target as HTMLElement
                  target.style.background = "transparent"
                  target.style.color = darkMode ? theme.primary : "white"
                  target.style.transform = "translateY(0)"
                }}
              >
                My Projects 🚀
              </Link>
            </div>

            {/* Animated Stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "30px",
                paddingTop: "30px",
                borderTop: `1px solid ${darkMode ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.3)"}`,
              }}
            >
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    color: theme.primary,
                    marginBottom: "8px",
                    animation: "pulse 2s ease-in-out infinite",
                  }}
                >
                  9+
                </div>
                <div style={{ opacity: 0.8, fontSize: "1rem" }}>Projects</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    color: theme.secondary,
                    marginBottom: "8px",
                    animation: "pulse 2s ease-in-out infinite",
                    animationDelay: "0.5s",
                  }}
                >
                  A2SV
                </div>
                <div style={{ opacity: 0.8, fontSize: "1rem" }}>Member</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    marginBottom: "8px",
                    animation: "pulse 2s ease-in-out infinite",
                    animationDelay: "1s",
                  }}
                >
                  💖
                </div>
                <div style={{ opacity: 0.8, fontSize: "1rem" }}>Coding</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes colorShift {
          0%, 100% { filter: hue-rotate(0deg); }
          50% { filter: hue-rotate(30deg); }
        }
        
        @keyframes typewriter {
          0%, 50% { border-right-color: transparent; }
          51%, 100% { border-right-color: ${theme.primary}; }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        @media (max-width: 768px) {
          h1 { font-size: 2.5rem !important; }
          .typewriter { font-size: 1.4rem !important; }
        }
      `}</style>
    </div>
  )
}

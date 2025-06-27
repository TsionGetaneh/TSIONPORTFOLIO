"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"

const colorThemes = {
  pink: { primary: "#ec4899", secondary: "#f472b6", gradient: "linear-gradient(135deg, #ec4899 0%, #f472b6 100%)" },
  purple: { primary: "#a855f7", secondary: "#c084fc", gradient: "linear-gradient(135deg, #a855f7 0%, #c084fc 100%)" },
  blue: { primary: "#3b82f6", secondary: "#60a5fa", gradient: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)" },
  green: { primary: "#10b981", secondary: "#34d399", gradient: "linear-gradient(135deg, #10b981 0%, #34d399 100%)" },
  orange: { primary: "#f59e0b", secondary: "#fbbf24", gradient: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)" },
} as const

type ColorThemeKey = keyof typeof colorThemes

const skills = [
  { name: "UI/UX Design", icon: "🎨", color: "#e91e63", description: "Figma, Adobe XD, Sketch, Prototyping" },
  { name: "Frontend Development", icon: "💻", color: "#2196f3", description: "HTML, CSS, JavaScript, TypeScript" },
  { name: "React & Next.js", icon: "⚛️", color: "#61dafb", description: "Modern React, Hooks, Server Components" },
  { name: "Backend Development", icon: "🔧", color: "#68a063", description: "Node.js, Express, APIs, Databases" },
  { name: "Mobile Development", icon: "📱", color: "#42a5f5", description: "Flutter, React Native, iOS, Android" },
  { name: "Data Structures & Algorithms", icon: "🧮", color: "#ff9800", description: "Problem Solving, Optimization" },
  { name: "Database Management", icon: "🗄️", color: "#4caf50", description: "MongoDB, PostgreSQL, MySQL, Firebase" },
  { name: "Cloud & DevOps", icon: "☁️", color: "#00bcd4", description: "AWS, Docker, CI/CD, Deployment" },
  { name: "Cybersecurity", icon: "🔒", color: "#f44336", description: "PKI, Encryption, Security Protocols" },
  { name: "Machine Learning", icon: "🤖", color: "#9c27b0", description: "Python, TensorFlow, Data Analysis" },
  { name: "Graphics & Animation", icon: "🎬", color: "#ff5722", description: "3D Modeling, WebGL, Three.js" },
  { name: "Version Control", icon: "📚", color: "#795548", description: "Git, GitHub, Collaboration" },
]
export default function AboutPage() {
  const [mounted, setMounted] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [colorTheme, setColorTheme] = useState<ColorThemeKey>("pink")

  useEffect(() => {
    setMounted(true)
    const savedDarkMode = localStorage.getItem("darkMode")
    const savedColorTheme = localStorage.getItem("colorTheme")
    if (savedDarkMode) setDarkMode(JSON.parse(savedDarkMode))
    if (savedColorTheme && Object.keys(colorThemes).includes(savedColorTheme)) setColorTheme(savedColorTheme as ColorThemeKey)
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

      <div style={{ paddingTop: "100px", padding: "100px 20px 40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h1
              style={{
                fontSize: "3.5rem",
                fontWeight: "800",
                marginBottom: "20px",
                background: darkMode
                  ? `linear-gradient(45deg, ${theme.primary}, ${theme.secondary})`
                  : "linear-gradient(45deg, #fff, #f0f0f0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              About Me ✨
            </h1>
            <p
              style={{
                fontSize: "1.3rem",
                opacity: 0.9,
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Passionate about creating innovative solutions and continuous learning
            </p>
          </div>

          {/* Story Section */}
          <div
            style={{
              background: darkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.15)",
              borderRadius: "25px",
              padding: "50px",
              marginBottom: "60px",
              backdropFilter: "blur(20px)",
              border: `1px solid ${darkMode ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.2)"}`,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "25px" }}>
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
                }}
              >
                🎓
              </div>
              <h2 style={{ fontSize: "2.5rem", fontWeight: "700", margin: 0 }}>My Journey</h2>
            </div>

            <p
              style={{
                fontSize: "1.2rem",
                lineHeight: "1.8",
                marginBottom: "25px",
                opacity: 0.9,
              }}
            >
              I studied at <strong style={{ color: theme.primary }}>Addis Ababa Institute of Technology</strong> and
              took additional courses at <strong style={{ color: theme.primary }}>Kibur College</strong>. I'm also proud
              to be part of <strong style={{ color: theme.primary }}>A2SV</strong>, where I continuously challenge
              myself with algorithmic problems to grow as an engineer.

Along the way, I’ve had the chance to work with real companies and teams:

💼 At Weyra Tech, I gained hands-on experience working on web and mobile applications, collaborating in a fast-paced development environment.

🌐 Through my internship at Prodigy InfoTech, I worked remotely on frontend tasks and system simulations that helped sharpen my practical knowledge and independence.

💡 Some of My Projects
🔐 PKI (Public Key Infrastructure)
Built a simplified PKI system using shell scripting to demonstrate encryption, certificate creation, and digital signatures — showcasing my interest in cybersecurity.

🎮 3D Graphics Simulation
Created an interactive 3D product viewer with Three.js, using lighting, camera movement, and user interaction to simulate a real-world product environment.

📱 Coffee Shop Management App
Developed an Android app using Jetpack Compose with clean architecture, featuring shift scheduling, inventory tracking, and employee navigation.

📊 Sigma Tech Admin Dashboard
Implemented a responsive, data-driven admin dashboard using Next.js, Tailwind CSS, ShadCN, and Recharts, designed to manage and visualize projects and funding metrics.
            </p>

            <p
              style={{
                fontSize: "1.2rem",
                lineHeight: "1.8",
                opacity: 0.9,
              }}
            >
              I'm driven by the idea of building meaningful digital products that make people's lives better. I believe
              in continuous learning and love tackling real-world problems with code. I've worked on several academic
              and personal projects, including a PKI-based security lab, a 3D product viewer, and an Android coffee shop
              management system.
            </p>
          </div>

          {/* Skills Section */}
          <div style={{ marginBottom: "60px" }}>
            <div style={{ textAlign: "center", marginBottom: "50px" }}>
              <h2
                style={{
                  fontSize: "3rem",
                  fontWeight: "700",
                  marginBottom: "15px",
                  background: darkMode
                    ? `linear-gradient(45deg, ${theme.primary}, ${theme.secondary})`
                    : "linear-gradient(45deg, #fff, #f0f0f0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Technical Skills 🚀
              </h2>
              <p style={{ fontSize: "1.2rem", opacity: 0.8 }}>Technologies and tools I work with</p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "25px",
              }}
            >
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  style={{
                    background: darkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.15)",
                    borderRadius: "20px",
                    padding: "30px",
                    textAlign: "center",
                    backdropFilter: "blur(20px)",
                    border: `1px solid ${darkMode ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.2)"}`,
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                  onMouseOver={(e) => {
                    const target = e.target as HTMLDivElement
                    target.style.transform = "translateY(-10px) scale(1.02)"
                    target.style.background = darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.25)"
                  }}
                  onMouseOut={(e) => {
                    const target = e.target as HTMLDivElement
                    target.style.transform = "translateY(0) scale(1)"
                    target.style.background = darkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.15)"
                  }}
                >
                  <div
                    style={{
                      fontSize: "3rem",
                      marginBottom: "20px",
                      animation: "bounce 2s ease-in-out infinite",
                      animationDelay: `${index * 0.2}s`,
                    }}
                  >
                    {skill.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: "600",
                      marginBottom: "12px",
                      color: darkMode ? theme.primary : "white",
                    }}
                  >
                    {skill.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "1rem",
                      opacity: 0.8,
                      lineHeight: "1.5",
                      margin: 0,
                    }}
                  >
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CV Section */}
          <div
            style={{
              background: darkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.15)",
              borderRadius: "25px",
              padding: "50px",
              textAlign: "center",
              backdropFilter: "blur(20px)",
              border: `1px solid ${darkMode ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.2)"}`,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "15px",
                marginBottom: "25px",
              }}
            >
              <div
                style={{
                  background: theme.secondary,
                  borderRadius: "50%",
                  width: "60px",
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                }}
              >
                📄
              </div>
              <h2 style={{ fontSize: "2.5rem", fontWeight: "700", margin: 0 }}>Resume</h2>
            </div>

            <p
              style={{
                fontSize: "1.2rem",
                opacity: 0.9,
                marginBottom: "30px",
                maxWidth: "500px",
                margin: "0 auto 30px",
              }}
            >
              Download my resume to learn more about my experience and qualifications
            </p>

            <a href="/images/projects/cv.pdf" download>
  <button
    style={{
      background: darkMode ? theme.primary : "rgba(255,255,255,0.2)",
      color: "white",
      padding: "18px 40px",
      borderRadius: "30px",
      border: "none",
      fontSize: "1.2rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    }}
    onMouseOver={(e) => {
      const target = e.target as HTMLButtonElement;
      target.style.transform = "translateY(-3px) scale(1.05)";
      target.style.boxShadow = "0 12px 35px rgba(0,0,0,0.2)";
    }}
    onMouseOut={(e) => {
      const target = e.target as HTMLButtonElement;
      target.style.transform = "translateY(0) scale(1)";
      target.style.boxShadow = "0 8px 25px rgba(0,0,0,0.1)";
    }}
  >
    📥 Download CV
  </button>
</a>


          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @media (max-width: 768px) {
          h1 { font-size: 2.5rem !important; }
          h2 { font-size: 2rem !important; }
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}

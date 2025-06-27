"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"

const colorThemes = {
  pink: { primary: "#ec4899", secondary: "#f472b6", gradient: "linear-gradient(135deg, #ec4899 0%, #f472b6 100%)" },
  purple: { primary: "#a855f7", secondary: "#c084fc", gradient: "linear-gradient(135deg, #a855f7 0%, #c084fc 100%)" },
  blue: { primary: "#3b82f6", secondary: "#60a5fa", gradient: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)" },
  green: { primary: "#10b981", secondary: "#34d399", gradient: "linear-gradient(135deg, #10b981 0%, #34d399 100%)" },
  orange: { primary: "#f59e0b", secondary: "#fbbf24", gradient: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)" },
}

const projects = [
  {
    title: "Restaurant Website",
    description:
      "A modern restaurant website built with HTML, CSS, and JavaScript featuring responsive design and interactive menu.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/images/projects/restaurant.jpg",
    github: "https://github.com/TsionGetaneh/Resturant.git",
  },
  {
    title: "Coffee Shop App",
    description:
      "Flutter mobile application for coffee shop management with inventory tracking, order management, and customer analytics.",
    tech: ["Flutter", "Dart", "Firebase"],
    image: "/images/projects/coffee-shop.jpg",
    github: "https://github.com/nuhajoy/Coffee-Shop-App-Flutter.git",
  },
  {
    title: "PKI Security Lab",
    description:
      "Comprehensive PKI-based security laboratory implementing digital certificates, encryption, and secure communication protocols.",
    tech: ["Python", "Cryptography", "OpenSSL"],
    image: "/images/projects/security-lab.jpg",
    github: "https://github.com/TsionGetaneh/Cyber.git",
  },
  {
    title: "3D Product Viewer",
    description:
      "Interactive 3D product visualization tool with WebGL rendering, allowing users to explore products in 3D space.",
    tech: ["Three.js", "WebGL", "React"],
    image: "/images/projects/3d-viewer.jpg",
    github: "https://github.com/TsionGetaneh/danceinrain.git",
  },
  {
    title: "Sigma",
    description: "Full-stack task management application with real-time collaboration, built with Next.js.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/images/projects/task-management.jpg",
    github: "https://github.com/TsionGetaneh/sigma.git",
  },
  {
    title: "E-commerce Platform",
    description: "Modern e-commerce platform with payment integration, inventory management, and admin dashboard.",
    tech: ["React", "Express.js", "PostgreSQL"],
    image: "/images/projects/ecommerce.jpg",
    github: "https://github.com/TsionGetaneh/ecommerce",
  },
  {
    title: "Wey Tech ",
    description: "UI design for Wey Tech company .",
    tech: ["nextjs", "TypeScript", "Tailwind CSS"],
    image: "/images/projects/weather-dashboard.jpg",
    github: "https://github.com/TsionGetaneh/weyra-master.git",
  },
  {
    title: "Social Media Analytics",
    description: "Analytics dashboard for social media metrics with data visualization and reporting features.",
    tech: ["Python", "Django", "D3.js"],
    image: "/images/projects/social-analytics.jpg",
    github: "https://github.com/yourusername/social-analytics",
  },
  {
    title: "Blockchain Voting System",
    description: "Secure voting system built on blockchain technology ensuring transparency and immutability of votes.",
    tech: ["Solidity", "Web3.js", "Ethereum"],
    image: "/images/projects/blockchain-voting.jpg",
    github: "https://github.com/yourusername/blockchain-voting",
  },
]

export default function ProjectsPage() {
  const [mounted, setMounted] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [colorTheme, setColorTheme] = useState<"pink" | "purple" | "blue" | "green" | "orange">("pink")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

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

      <div style={{ paddingTop: "100px", padding: "100px 20px 40px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
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
              My Projects 🚀
            </h1>
            <p
              style={{
                fontSize: "1.3rem",
                opacity: 0.9,
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              A collection of projects showcasing my skills and passion for development
            </p>
          </div>

          {/* Projects Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
              gap: "30px",
              marginBottom: "60px",
            }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                style={{
                  background: darkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.15)",
                  borderRadius: "25px",
                  overflow: "hidden",
                  backdropFilter: "blur(20px)",
                  border: `1px solid ${darkMode ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.2)"}`,
                  transition: "all 0.4s ease",
                  cursor: "pointer",
                  position: "relative",
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-15px) scale(1.02)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 25px 50px rgba(0,0,0,0.2)";
                }}
                onMouseOut={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0) scale(1)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                {/* Project Image */}
                <div
                  style={{
                    position: "relative",
                    height: "250px",
                    overflow: "hidden",
                    background: `linear-gradient(45deg, ${theme.primary}, ${theme.secondary})`,
                  }}
                >
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.4s ease",
                      transform: hoveredProject === index ? "scale(1.1)" : "scale(1)",
                    }}
                    onError={(e) => {
                      // Fallback to gradient background if image doesn't load
                      (e.target as HTMLImageElement).style.display = "none"
                    }}
                  />

                  {/* Hover Overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(0,0,0,0.7)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: hoveredProject === index ? 1 : 0,
                      transition: "opacity 0.3s ease",
                    }}
                  >
                    <div style={{ textAlign: "center", padding: "20px" }}>
                      <p
                        style={{
                          color: "white",
                          fontSize: "1.1rem",
                          lineHeight: "1.6",
                          marginBottom: "20px",
                        }}
                      >
                        {project.description}
                      </p>
                      <button
                        onClick={() => window.open(project.github, "_blank")}
                        style={{
                          background: theme.primary,
                          color: "white",
                          border: "none",
                          padding: "12px 24px",
                          borderRadius: "25px",
                          fontSize: "1rem",
                          fontWeight: "600",
                          cursor: "pointer",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          transition: "all 0.3s ease",
                        }}
                        onMouseOver={(e) => {
                          (e.target as HTMLButtonElement).style.background = theme.secondary;
                          (e.target as HTMLButtonElement).style.transform = "scale(1.05)";
                        }}
                        onMouseOut={(e) => {
                          (e.target as HTMLButtonElement).style.background = theme.primary;
                          (e.target as HTMLButtonElement).style.transform = "scale(1)"
                        }}
                      >
                        View Project →
                      </button>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div style={{ padding: "25px" }}>
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "700",
                      marginBottom: "15px",
                      color: darkMode ? theme.primary : "white",
                    }}
                  >
                    {project.title}
                  </h3>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                      marginBottom: "20px",
                    }}
                  >
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          background: darkMode ? `${theme.primary}20` : "rgba(255,255,255,0.2)",
                          color: darkMode ? theme.primary : "white",
                          padding: "6px 14px",
                          borderRadius: "20px",
                          fontSize: "0.9rem",
                          fontWeight: "500",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <button
                      onClick={() => window.open(project.github, "_blank")}
                      style={{
                        background: "transparent",
                        border: `2px solid ${theme.primary}`,
                        color: theme.primary,
                        padding: "8px 16px",
                        borderRadius: "20px",
                        fontSize: "0.9rem",
                        fontWeight: "600",
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        transition: "all 0.3s ease",
                      }}
                      onMouseOver={(e) => {
                        (e.target as HTMLButtonElement).style.background = theme.primary;
                        (e.target as HTMLButtonElement).style.color = "white"
                      }}
                      onMouseOut={(e) => {
                        (e.target as HTMLButtonElement).style.background = "transparent";
                        (e.target as HTMLButtonElement).style.color = theme.primary
                      }}
                    >
                      GitHub 🔗
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
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
            <h2 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "20px" }}>
              Interested in collaborating? 🤝
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                opacity: 0.9,
                marginBottom: "30px",
                maxWidth: "500px",
                margin: "0 auto 30px",
              }}
            >
              I'm always open to discussing new opportunities and interesting projects
            </p>
            <button
              onClick={() => (window.location.href = "/contact")}
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
                (e.target as HTMLButtonElement).style.transform = "translateY(-3px) scale(1.05)";
                (e.target as HTMLButtonElement).style.boxShadow = "0 12px 35px rgba(0,0,0,0.2)"
              }}
              onMouseOut={(e) => {
                (e.target as HTMLButtonElement).style.transform = "translateY(0) scale(1)";
                (e.target as HTMLButtonElement).style.boxShadow = "0 8px 25px rgba(0,0,0,0.1)"
              }}
            >
              Get In Touch 💫
            </button>
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

        @media (max-width: 768px) {
          h1 { font-size: 2.5rem !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}

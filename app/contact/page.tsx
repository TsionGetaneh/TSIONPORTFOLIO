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

const contactInfo = [
  {
    icon: "📧",
    label: "Email",
    value: "getanehtsion67@gmail.com",
    href: "mailto:getanehtsion67@gmail.com",
  },
  {
    icon: "📱",
    label: "Phone",
    value: "+251 966830060",
    href: "tel:+251966830060",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/tsiongetaneh",
    href: "https://www.linkedin.com/in/tsion-getaneh-849a25258/",
  },
  {
    icon: "💻",
    label: "GitHub",
    value: "github.com/tsiongetaneh",
    href: "https://github.com/TsionGetaneh",
  },
  {
    icon: "🧩",
    label: "LeetCode",
    value: "leetcode.com/tsiongetaneh",
    href: "https://leetcode.com/getanehtsion67",
  },
  {
    icon: "🏆",
    label: "Codeforces",
    value: "codeforces.com/profile/tsiongetaneh",
    href: "https://codeforces.com/profile/tsiyeG21",
  },
]

export default function ContactPage() {
  const [mounted, setMounted] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [colorTheme, setColorTheme] = useState<keyof typeof colorThemes>("pink")

  useEffect(() => {
    setMounted(true)
    const savedDarkMode = localStorage.getItem("darkMode")
    const savedColorTheme = localStorage.getItem("colorTheme")
    if (savedDarkMode) setDarkMode(JSON.parse(savedDarkMode))
    if (savedColorTheme && Object.keys(colorThemes).includes(savedColorTheme)) {
      setColorTheme(savedColorTheme as keyof typeof colorThemes)
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
        width: "100vw",
        maxWidth: "100vw",
        overflowX: "hidden",
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
              Get In Touch 💫
            </h1>
            <p
              style={{
                fontSize: "1.3rem",
                opacity: 0.9,
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Let's connect and discuss opportunities, collaborations, or just have a chat about technology
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
              gap: "50px",
            }}
          >
            {/* Contact Information */}
            <div>
              <h2
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  marginBottom: "30px",
                  background: darkMode
                    ? `linear-gradient(45deg, ${theme.primary}, ${theme.secondary})`
                    : "linear-gradient(45deg, #fff, #f0f0f0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Contact Information ✨
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "30px" }}>
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: darkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.15)",
                      borderRadius: "20px",
                      padding: "25px",
                      textDecoration: "none",
                      color: "inherit",
                      backdropFilter: "blur(20px)",
                      border: `1px solid ${darkMode ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.2)"}`,
                      transition: "all 0.3s ease",
                      display: "block",
                      animation: `fadeInLeft 0.6s ease-out ${index * 0.1}s both`,
                    }}
                    onMouseOver={(e) => {
                      (e.target as HTMLAnchorElement).style.transform = "translateX(10px) scale(1.02)";
                      (e.target as HTMLAnchorElement).style.background = darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.25)";
                    }}
                    onMouseOut={(e) => {
                      const target = e.target as HTMLAnchorElement
                      target.style.transform = "translateX(0) scale(1)"
                      target.style.background = darkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.15)"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
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
                          animationDelay: `${index * 0.2}s`,
                        }}
                      >
                        {contact.icon}
                      </div>
                      <div>
                        <h3 style={{ fontSize: "1.3rem", fontWeight: "600", marginBottom: "8px" }}>{contact.label}</h3>
                        <p style={{ opacity: 0.8, margin: 0, fontSize: "1rem" }}>{contact.value}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Location */}
              <div
                style={{
                  background: darkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.15)",
                  borderRadius: "20px",
                  padding: "25px",
                  backdropFilter: "blur(20px)",
                  border: `1px solid ${darkMode ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.2)"}`,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
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
                    📍
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.3rem", fontWeight: "600", marginBottom: "8px" }}>Location</h3>
                    <p style={{ opacity: 0.8, margin: 0, fontSize: "1rem" }}>Addis Ababa, Ethiopia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              style={{
                background: darkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.15)",
                borderRadius: "25px",
                padding: "40px",
                backdropFilter: "blur(20px)",
                border: `1px solid ${darkMode ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.2)"}`,
                height: "fit-content",
              }}
            >
              <h2
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  marginBottom: "30px",
                  background: darkMode
                    ? `linear-gradient(45deg, ${theme.primary}, ${theme.secondary})`
                    : "linear-gradient(45deg, #fff, #f0f0f0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Send a Message 💌
              </h2>

              <form style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                  <div>
                    <label
                      style={{
                        color: darkMode ? "#e5e7eb" : "white",
                        display: "block",
                        marginBottom: "10px",
                        fontSize: "1rem",
                        fontWeight: "500",
                      }}
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Tsion"
                      style={{
                        width: "100%",
                        padding: "15px",
                        borderRadius: "12px",
                        border: "none",
                        background: darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.2)",
                        color: darkMode ? "#f9fafb" : "white",
                        fontSize: "1rem",
                        outline: "none",
                        transition: "all 0.3s ease",
                      }}
                      onFocus={(e) => {
                        e.target.style.background = darkMode ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.3)"
                        e.target.style.transform = "scale(1.02)"
                      }}
                      onBlur={(e) => {
                        e.target.style.background = darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.2)"
                        e.target.style.transform = "scale(1)"
                      }}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        color: darkMode ? "#e5e7eb" : "white",
                        display: "block",
                        marginBottom: "10px",
                        fontSize: "1rem",
                        fontWeight: "500",
                      }}
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Getaneh"
                      style={{
                        width: "100%",
                        padding: "15px",
                        borderRadius: "12px",
                        border: "none",
                        background: darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.2)",
                        color: darkMode ? "#f9fafb" : "white",
                        fontSize: "1rem",
                        outline: "none",
                        transition: "all 0.3s ease",
                      }}
                      onFocus={(e) => {
                        e.target.style.background = darkMode ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.3)"
                        e.target.style.transform = "scale(1.02)"
                      }}
                      onBlur={(e) => {
                        e.target.style.background = darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.2)"
                        e.target.style.transform = "scale(1)"
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      color: darkMode ? "#e5e7eb" : "white",
                      display: "block",
                      marginBottom: "10px",
                      fontSize: "1rem",
                      fontWeight: "500",
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="hello@example.com"
                    style={{
                      width: "100%",
                      padding: "15px",
                      borderRadius: "12px",
                      border: "none",
                      background: darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.2)",
                      color: darkMode ? "#f9fafb" : "white",
                      fontSize: "1rem",
                      outline: "none",
                      transition: "all 0.3s ease",
                    }}
                    onFocus={(e) => {
                      e.target.style.background = darkMode ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.3)"
                      e.target.style.transform = "scale(1.02)"
                    }}
                    onBlur={(e) => {
                      e.target.style.background = darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.2)"
                      e.target.style.transform = "scale(1)"
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      color: darkMode ? "#e5e7eb" : "white",
                      display: "block",
                      marginBottom: "10px",
                      fontSize: "1rem",
                      fontWeight: "500",
                    }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Let's discuss a project ✨"
                    style={{
                      width: "100%",
                      padding: "15px",
                      borderRadius: "12px",
                      border: "none",
                      background: darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.2)",
                      color: darkMode ? "#f9fafb" : "white",
                      fontSize: "1rem",
                      outline: "none",
                      transition: "all 0.3s ease",
                    }}
                    onFocus={(e) => {
                      e.target.style.background = darkMode ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.3)"
                      e.target.style.transform = "scale(1.02)"
                    }}
                    onBlur={(e) => {
                      e.target.style.background = darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.2)"
                      e.target.style.transform = "scale(1)"
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      color: darkMode ? "#e5e7eb" : "white",
                      display: "block",
                      marginBottom: "10px",
                      fontSize: "1rem",
                      fontWeight: "500",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    placeholder="Tell me about your project or just say hello! 💫"
                    rows={6}
                    style={{
                      width: "100%",
                      padding: "15px",
                      borderRadius: "12px",
                      border: "none",
                      background: darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.2)",
                      color: darkMode ? "#f9fafb" : "white",
                      fontSize: "1rem",
                      resize: "vertical",
                      outline: "none",
                      transition: "all 0.3s ease",
                      fontFamily: "inherit",
                    }}
                    onFocus={(e) => {
                      e.target.style.background = darkMode ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.3)"
                      e.target.style.transform = "scale(1.02)"
                    }}
                    onBlur={(e) => {
                      e.target.style.background = darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.2)"
                      e.target.style.transform = "scale(1)"
                    }}
                  />
                </div>

                <button
                  type="submit"
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
                    justifyContent: "center",
                    gap: "10px",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                    width: "100%",
                  }}
                  onMouseOver={(e) => {
                    const target = e.target as HTMLButtonElement
                    target.style.transform = "translateY(-3px) scale(1.02)"
                    target.style.boxShadow = "0 12px 35px rgba(0,0,0,0.2)"
                  }}
                  onMouseOut={(e) => {
                    const target = e.target as HTMLButtonElement
                    target.style.transform = "translateY(0) scale(1)"
                    target.style.boxShadow = "0 8px 25px rgba(0,0,0,0.1)"
                  }}
                >
                  Send Message 💌
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .root-container { width: 100vw; max-width: 100vw; overflow-x: hidden; }
        @media (max-width: 1024px) {
          .contact-grid { grid-template-columns: 1fr 1fr !important; gap: 20px !important; }
          .form-row { grid-template-columns: 1fr 1fr !important; gap: 12px !important; }
        }
        @media (max-width: 768px) {
          h1 { font-size: 2rem !important; }
          h2 { font-size: 1.3rem !important; }
          .contact-grid { grid-template-columns: 1fr !important; gap: 8px !important; }
          .form-row { grid-template-columns: 1fr !important; gap: 6px !important; }
        }
        @media (max-width: 480px) {
          h1 { font-size: 1.1rem !important; }
          h2 { font-size: 0.9rem !important; }
          .contact-grid { gap: 3px !important; }
          .form-row { gap: 2px !important; }
        }
      `}</style>
    </div>
  )
}

import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tsion Getaneh - Software Engineer & A2SVian",
  description: "Passionate software engineer and A2SVian focused on solving problems through code",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, padding: 0, fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>
        {children}
      </body>
    </html>
  )
}

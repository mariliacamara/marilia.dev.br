import "./globals.css"

export const metadata = {
  title: "Marie Camara",
  description: "Frontend & Full Stack Developer",
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
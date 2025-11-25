import './globals.css'

export const metadata = {
  title: 'OptiCore Analytics - DevOps Optimization Platform',
  description: 'Accelerate Your DevOps Pipeline Success',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

import './globals.css'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Layout(props: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-neutral-900 leading-relaxed text-neutral-400 antialiased selection:bg-neutral-200 selection:text-neutral-900`}
        {...props}
      />
    </html>
  )
}

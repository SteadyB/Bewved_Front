import { Header } from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toolbar } from '@/components/toolbar'
import Forms from '@/components/Forms'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-gray-50 h-full">
        <div className="sticky top-0">
          <Header />
          <Toolbar />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 bg-gray-800">
          <div className="m-4  bg-slate-500">
           {children}
          </div>
          <div className="m-4 bg-slate-500">
           {children}
          </div>
          <div className="m-4 bg-slate-500">
           {children}
          </div>
        </div>
        <Forms />
      </body>
    </html>
  )
}

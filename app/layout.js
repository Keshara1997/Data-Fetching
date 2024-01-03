import './globals.css'
import {Inter } from 'next/font/google'

const inter = Inter ({subsets : ['latin']})

export const metadata = {
    title: 'My App',
    description: 'My app description',
    
}

export default function Layout({children}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}

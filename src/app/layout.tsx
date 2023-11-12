import type { Metadata } from 'next'
import { FC, PropsWithChildren } from 'react'
import { Roboto } from 'next/font/google'
import './globals.css'

const font = Roboto({
  subsets: ['cyrillic-ext'],
  weight: ['300', '400', '500', '700']
})

export const metadata: Metadata = {
  title: 'Instagram',
  description: 'Made by Tuguldur Khostsengel',
}

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
      </body>
    </html>
  )
}

export default RootLayout
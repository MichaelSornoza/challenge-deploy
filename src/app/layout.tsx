import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import '@/css/styles.css'
import Header from '@/components/layout/header'
import Modal from '@/components/modal'
import Providers from './providers'
import { Toaster } from 'react-hot-toast'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Challenge',
  description: 'Created with Next.js and TypeScript'
}

export interface IPageProps {
  children: React.ReactNode
}

const RootLayout = ({ children }: IPageProps): JSX.Element => {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <Providers>
          <Header />
          <Modal />
          <Toaster />
          {children}
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout

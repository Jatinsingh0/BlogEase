import './globals.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/footer';
import { Inter } from 'next/font/google';
import AuthProvider from './providers/authProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BlogEase',
  description: 'You can share Thought or anything through writing.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AuthProvider>
        <div className="container">
          <div className='wrapper'>
             <Navbar />
              {children}
             <Footer />
          </div>
        </div>
      </AuthProvider>      
      </body>
    </html>
  )
}

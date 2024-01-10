'use client'

import AdminIcon from '@/components/icons/admin'
import Cart from '@/components/icons/cart'
import Link from 'next/link'

const Header = (): JSX.Element => {
  return (
    <header className="header">
      <div className="logo">
        <Link href="/">
          <h1>Logo</h1>
        </Link>
      </div>
      <div className="buttons">
        <Link href="/cart">
          <button type="button" className="primary">
            <Cart />
          </button>
        </Link>
        <Link href="/admin">
          <button type="button" className="primary">
            <AdminIcon />
          </button>
        </Link>
      </div>
    </header>
  )
}

export default Header

import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
      <Link href="/">home</Link>
      <Link href="/test">test</Link>
      <Link href="/auth">signin</Link>
    </div>
  )
}

export default Header

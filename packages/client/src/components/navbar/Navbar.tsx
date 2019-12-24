import * as React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.less'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="navbar__link" to="/">
        User Tasker
      </Link>
    </nav>
  )
}

export default Navbar

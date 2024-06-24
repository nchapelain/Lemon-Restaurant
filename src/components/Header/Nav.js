import logo from './assets/Logo.svg';
import burger from './assets/hambuerger.svg';
import React, { useState } from 'react';
function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`topbar container ${menuOpen ? 'menuactif' : ''}`}>
      <section className="branding">
        <img src={logo} alt="Little Lemon Restaurant" />
      </section>
      <section className='MobileBurger' onClick={toggleMenu}>
        <img src={burger} alt='Toggle menu' />
      </section>
      <ul className='menu'>
        <li><a href='/'>Home</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='#'>Menu</a></li>
        <li><a href='/reservation'>Reservations</a></li>
        <li><a href='#'>Order Online</a></li>
        <li><a href='#'>Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;

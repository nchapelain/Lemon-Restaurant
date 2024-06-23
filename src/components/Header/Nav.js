import logo from './assets/Logo.svg';

function Nav() {
  return (
    <nav className='topbar container'>
        <section className="branding">
          <img src={logo} alt="Little Limon Restaurant" />
        </section>
        <ul className='menu'>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Menu</a></li>
          <li><a href='#'>Reservations</a></li>
          <li><a href='#'>Order Online</a></li>
          <li><a href='#'>Login</a></li>
        </ul>
        </nav>
  );
}

export default Nav;
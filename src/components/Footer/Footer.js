import './Footer.css';

function Footer() {
  return (
    <>
    <footer >
    <section className='container grid4'>
        <section>
          <img src='/icons_assets/restaurant.jpg' alt='' />
        </section>
        <section>
          <h4>Doormat Navigation</h4>
          <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
        </section>
        <section>
          <h4>Contact</h4>
          <ul>
          <li>Adress</li>
          <li>phone number</li>
          <li>email</li>
        </ul>
        </section>
        <section>
          <h4>Social Media Links</h4>
          <ul>
          <li>Adress</li>
          <li>phone number</li>
          <li>email</li>
        </ul>
        </section>
      </section> 

    </footer>
    </>
  );
}

export default Footer;

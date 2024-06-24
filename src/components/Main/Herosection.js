import image from '../../icons_assets/restauranfood.jpg';
import Cta from './components/Cta';
function TopHeroSection(){
  return (
    <>
      <section className='herosection bg-grey'>
        <ul className="container grid2">
            <li>
                <h1 className='yellow'>Little Lemon</h1>
                <h2 className="subtitle">Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes, served with a modern twist.</p>
                <Cta href="/Reservation" titre="Reserve a table" />
            </li>
            <li><img src={image} alt='Lemon Restauurant' /></li>
        </ul>
      </section>
    </>
  );
}
export default TopHeroSection;
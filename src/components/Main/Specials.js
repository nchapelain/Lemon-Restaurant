import image from '../../icons_assets/restauranfood.jpg';
import Cta from './components/Cta';
function Specials(){
  return (
    <>
      <section className='specials container'>
      <Cta href="#" titre="Online Menu" right="true" />
        <h1>This weeks Specials!</h1>
        
        <ul className='grid3 dish'>
            <li>
                <img />
                <h4 >Chicago</h4>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes, served with a modern twist.</p>
                <p><a>link</a></p>
            </li>
        </ul>
      </section>
    </>
  );
}
export default Specials;
import delivery from '../../icons_assets/delivery.svg';
import pizza from '../../icons_assets/pizza.jpg';
import greek from '../../icons_assets/greek salad.jpg';
import carbonara from '../../icons_assets/carbonara.jpg';
import Cta from './components/Cta';
function Specials(){
  return (
    <>
      <section className='specials container'>
      <Cta href="#" titre="Online Menu" right="true" />
        <h1>This weeks Specials!</h1>
        <ul className='grid3 dish'>
            <li>
                <img src={greek} alt='' />
                <p className='right orange bold'>$12</p>
                <h4 >Greek Salad</h4>
                <p>Fresh and crisp Greek salad made with ripe tomatoes, cucumbers, red onions, green bell peppers, kalamata olives, and feta cheese, all tossed in a light olive oil and oregano dressing.</p>
                <p><a href='#' className='cta-black'>Order a delivery <img src={delivery} alt='Delivery' className='icon' /></a></p>
            </li>
            <li>
            <img src={pizza} alt='' />
            <p className='right orange bold'>$14</p>
                <h4 >Margherita Pizza</h4>
                <p>Classic Margherita pizza with a thin, crispy crust, topped with fresh mozzarella cheese, vine-ripened tomatoes, and aromatic basil leaves, drizzled with extra virgin olive oil.</p>
                <p><a href='#' className='cta-black'>Order a delivery <img src={delivery} alt='Delivery' className='icon' /></a></p>
            </li>
            <li>
            <img src={carbonara} alt='' />
            <p className='right orange bold'>$12</p>
                <h4 >Spaghetti Carbonara</h4>
                <p>Traditional Italian pasta dish made with al dente spaghetti, crispy pancetta, and a creamy sauce of eggs and Parmesan cheese, seasoned with black pepper.</p>
                <p><a href='#' className='cta-black'>Order a delivery <img src={delivery} alt='Delivery' className='icon' /></a></p>
            </li>
        </ul>
      </section>
    </>
  );
}
export default Specials;
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/CocktailCard';

const CocktailCard = ({ ...item }) => {
  return (
    <Wrapper>
      <div className='img-container'>
        <img src={item.image} alt={item.name} className='img' />
        <div className='footer'>
          <h4>{item.name}</h4>
          <h5>{item.glass}</h5>
          <p>{item.info}</p>
        </div>
        <Link to={`/cocktail/${item.id}`} className='btn'>
          details
        </Link>
      </div>
    </Wrapper>
  );
};
export default CocktailCard;

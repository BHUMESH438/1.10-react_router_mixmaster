import { useLoaderData } from 'react-router-dom';
import axios from 'axios';

const singleCocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export const loader = async ids => {
  const id = ids.params.id;
  const response = await axios.get(`${singleCocktailUrl}${id}`);
  return { id, data: response.data };
};
const Cocktail = () => {
  const { id, data } = useLoaderData();

  return (
    <>
      <div>jiiiiiiiiiiiiii</div>
    </>
  );
};
export default Cocktail;

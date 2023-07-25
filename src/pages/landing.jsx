import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import SearchForm from '../components/SearchForm';
import CocktailCard from '../components/CocktailCard';
import CocktailList from '../components/CocktailList';

const cocktailSearchUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
export const loader = async () => {
  const searchTerm = '';
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
  return { drinks: response.data.drinks, searchTerm };
};
const Landing = () => {
  const { drinks, searchterm } = useLoaderData();
  return (
    <>
      <h1>Landing</h1>
      <SearchForm />
      <CocktailList drinks={drinks} />
    </>
  );
};
export default Landing;

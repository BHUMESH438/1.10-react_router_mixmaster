import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import SearchForm from '../components/SearchForm';
import CocktailList from '../components/CocktailList';
import { useQuery } from '@tanstack/react-query';
const cocktailSearchUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const searchCocktailQuery = searchTerm => {
  return {
    queryKey: ['search', searchTerm || 'all'],
    queryFn: async () => {
      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
      console.log('response>>>>', response);
      return response.data.drinks;
    }
  };
};

export const loader =
  queryClient =>
  async ({ request }) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get('search') || '';
    // const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
    await queryClient.ensureQueryData(searchCocktailQuery(searchTerm));
    return { /**drinks: response.data.drinks, */ searchTerm };
  };

const Landing = () => {
  const { /*drinks,*/ searchTerm } = useLoaderData();
  const { data: drinks } = useQuery(searchCocktailQuery(searchTerm));
  return (
    <>
      <h1>Landing</h1>
      <SearchForm searchterm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  );
};
export default Landing;

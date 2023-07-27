import { Form, useNavigation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/SearchForm';

const SearchForm = ({ searchterm }) => {
  const navigation = useNavigation();
  const isSearching = navigation.state === 'submitting';
  return (
    <Wrapper>
      <Form className='form'>
        <input type='search' name='search' className='form-input' defaultValue={searchterm} />
        <button className='btn'>{isSearching ? 'searching....' : 'search'}</button>
      </Form>
    </Wrapper>
  );
};
export default SearchForm;

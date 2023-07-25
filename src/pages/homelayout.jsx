import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Homelayout = () => {
  const navigation = useNavigation();
  const isPageloading = navigation.state === 'loading';
  return (
    <>
      <Navbar />
      <section className='page'>{isPageloading ? <div className='loading' /> : <Outlet />}</section>
    </>
  );
};
export default Homelayout;

import { Link, Outlet } from 'react-router-dom';

const Homelayout = () => {
  return (
    <>
      <Link to='/home/about'>about</Link>
      &nbsp;
      <Link to='/home/landing'>landing</Link> &nbsp;
      <Link to='/home/cocktail'>cocktail</Link> &nbsp;
      <Link to='/home/newsletter'>newsletter</Link> &nbsp;
      <Link to='/home/error'>error</Link> &nbsp;
      <br></br>
      <nav></nav>
      <h1>navbar</h1>
      <Outlet />
      <footer>
        <h1>footer</h1>
      </footer>
    </>
  );
};
export default Homelayout;

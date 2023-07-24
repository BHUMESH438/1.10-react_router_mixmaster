import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About, Landing, Cocktail, HomeLayout, Error, Newsletter } from './pages';

const router = createBrowserRouter([
  {
    path: '/home',
    element: <HomeLayout />,
    children: [
      {
        path: 'landing',
        element: <Landing />
      },
      {
        path: 'cocktail',
        element: <Cocktail />
      },
      {
        path: 'newsletter',
        element: <Newsletter />
      },
      {
        path: 'error',
        element: <Error />
      },
      {
        index: true,
        element: <About />
      }
    ]
  }
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;

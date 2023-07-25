import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About, Landing, Cocktail, HomeLayout, Error, Newsletter, SinglePageError } from './pages';
import { loader as landingloader } from './pages/landing';
import { loader as singlecocktailloader } from './pages/cocktail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: landingloader,
        errorElement: <SinglePageError />,
        element: <Landing />
      },
      {
        path: 'cocktail/:id',
        loader: singlecocktailloader,
        errorElement: <SinglePageError />,
        element: <Cocktail />
      },
      {
        path: 'newsletter',
        element: <Newsletter />
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  }
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;

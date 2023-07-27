import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { About, Landing, Cocktail, HomeLayout, Error, Newsletter, SinglePageError } from './pages';
import { loader as landingloader } from './pages/landing';
import { loader as singlecocktailloader } from './pages/cocktail';
import { action as newsletterAction } from './pages/newsletter';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5
    }
  }
});
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: landingloader(queryClient),
        errorElement: <SinglePageError />,
        element: <Landing />
      },
      {
        path: 'cocktail/:id',
        loader: singlecocktailloader(queryClient),
        errorElement: <SinglePageError />,
        element: <Cocktail />
      },
      {
        path: 'newsletter',
        element: <Newsletter />,
        errorElement: <SinglePageError />,
        action: newsletterAction
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  }
]);
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default App;

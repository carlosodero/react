import { useRoutes } from 'react-router-dom';
import Flags from './pages/Flags/Flags.jsx';
import App from './pages/App/App.jsx';
import Bookings from './pages/Bookings/Bookings.jsx';
import URLParams from './pages/URLParams.jsx';

function AppRouter() {
  return useRoutes(
    [
      {
        element: <Bookings />,
        path: '/',
      },
      {
        element: <App />,
        path: '/app',
      },
      {
        element: <Flags />,
        path: '/flags',
      },
      {
        element: <URLParams />,
        path: '/url-params/:params',
      },
    ]
  );
}

export default AppRouter;

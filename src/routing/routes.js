import { createBrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import DetailPage from './DetailPage';

const router = createBrowserRouter([
    { path: "", element: <HomePage />},
    { path: "/category/:name", element: <DetailPage />},
]);

export default router;
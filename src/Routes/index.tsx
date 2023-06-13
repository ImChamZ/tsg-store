import {
  Route,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import { lazy } from 'react';

const Layout = lazy(() => import('../components/Layout'));
const ProductListHome = lazy(() => import('../components/ProductListHome'));
const ProductHome = lazy(() => import('../components/ProductHome'));
const CategoryHome = lazy(() => import('../components/CategoryHome'));
const Category = lazy(() => import('../components/Category'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/products" element={<ProductListHome />} />
      <Route path="/products/:id" element={<ProductHome />} />
      <Route path="/category" element={<CategoryHome />} />
      <Route path="/category/:id" element={<Category />} />
      <Route path="/category/:id/:id" element={<ProductHome />} />
      <Route path="/" element={<Navigate replace to="/products" />} />
    </Route>
  )
);

const AppRoutes = () => <RouterProvider router={router} />;
export default AppRoutes;

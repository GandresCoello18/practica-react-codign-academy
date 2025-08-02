import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TestComponents } from '../view/test-components';
import { HomeView } from '../view/Home';
import { CartPage } from '../view/Cart';
import { NotFoundView } from '../view/404';
import { ContactView } from '../view/contacto';
import { ContadorView } from '../view/contador';
import { FormHookView } from '../view/form_hook';
import { lazy, Suspense, useContext } from 'react';

import PublicRouter from './public.route';
import ProtectedRoute from './protected.route';
import { MeContext } from '../context/me.provider.context';

const LoginView = lazy(() => import('../view/Login'));
const ProductIdView = lazy(() => import('../view/productId'));

export const RouterApp = () => {
  const isAuthenticated = useContext(MeContext).me !== null;

  console.log('isAuthenticated ', isAuthenticated);

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Cargando pagina...</div>}>
        <Routes>

          <Route element={<PublicRouter isAuth={isAuthenticated} />}>
            <Route path="/login" element={<LoginView />} />
            <Route path="/test-component" element={<TestComponents />} />
          </Route>

          <Route element={<ProtectedRoute isAuth={isAuthenticated} />}>
            <Route path="/" element={<HomeView />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/product/:id" element={<ProductIdView />} />
            <Route path="/contacts" element={<ContactView />} />
            <Route path="/contador" element={<ContadorView />} />
            <Route path="/form-hook" element={<FormHookView />} />
          </Route>

          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

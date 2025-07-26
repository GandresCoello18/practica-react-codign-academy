import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TestComponents } from '../view/test-components';
// import { LoginView } from '../view/Login';
import { HomeView } from '../view/Home';
import { CartPage } from '../view/Cart';
import { NotFoundView } from '../view/404';
import { ContactView } from '../view/contacto';
import { ContadorView } from '../view/contador';
import { FormHookView } from '../view/form_hook';
import { lazy, Suspense } from 'react';

const LoginView = lazy(() => import('../view/Login'));
const ProductIdView = lazy(() => import('../view/productId'));

export const RouterApp = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Cargando pagina...</div>}>
        <Routes>
          <Route path="/login" element={<LoginView />} />
          <Route path="/home" element={<HomeView />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductIdView />} />
          <Route path="/contacts" element={<ContactView />} />
          <Route path="/contador" element={<ContadorView />} />
          <Route path="/form-hook" element={<FormHookView />} />
          <Route path="/test-component" element={<TestComponents />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

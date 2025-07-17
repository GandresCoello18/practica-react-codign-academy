import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginView } from '../view/Login';
import { HomeView } from '../view/Home';
import { NotFoundView } from '../view/404';
import { ContactView } from '../view/contacto';
import { ContadorView } from '../view/contador'
import { FormHookView } from '../view/form_hook';

export const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginView />} />
        <Route path="/home" element={<HomeView />} />
        <Route path="/contacts" element={<ContactView />} />
        <Route path="/contador" element={<ContadorView />} />
        <Route path="/form-hook" element={<FormHookView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
  );
};

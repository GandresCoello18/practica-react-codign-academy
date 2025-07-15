import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginView } from '../view/Login';
import { HomeView } from '../view/Home';
import { NotFoundView } from '../view/404';
import { ContactView } from '../view/contacto';

export const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginView />} />
        <Route path="/home" element={<HomeView />} />
        <Route path="/contacts" element={<ContactView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
  );
};

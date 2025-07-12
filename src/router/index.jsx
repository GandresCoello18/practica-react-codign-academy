import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginView } from '../view/Login';
import { HomeView } from '../view/Home';
import { NotFoundView } from '../view/404';

export const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginView />} />
        <Route path="/home" element={<HomeView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
  );
};

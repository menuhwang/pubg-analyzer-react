import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '@fortawesome/fontawesome-free/css/all.min.css'
import reportWebVitals from './reportWebVitals';
import AdminHomePage from "./pages/admin";
import AdminMatchesPage from './pages/admin/matches';
import AdminFetchPage from "./pages/admin/fetch-api";
import Footer from "./components/footer";
import HomePage from "./pages/home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/admin",
        element: <AdminHomePage />
    },
    {
        path: "/admin/matches",
        element: <AdminMatchesPage />
    },
    {
        path: "/admin/fetch-api",
        element: <AdminFetchPage />
    },
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '@fortawesome/fontawesome-free/css/all.min.css'
import reportWebVitals from './reportWebVitals';
import Footer from "./components/footer";
import HomePage from "./pages/HomePage";
import PlayerPage from "./pages/PlayerPage";
import ScrollTop from "./components/util/ScrollTop";
import BookmarkContext from "./contexts/BookmarkContext";
import BookmarkUtil from "./util/BookmarkUtil";
import ReportPage from "./pages/ReportPage";
import Navbar from "./components/navbar/Navbar";
import {Application} from "./constants/application";
import RedirectPage from "./pages/RedirectPage";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ScrollTop />
            <Navbar href="/" text={Application.brand} />
            <BookmarkContext.Provider value={BookmarkUtil.get()}>
                <Routes>
                    <Route path={"/"} element={<HomePage />} />
                    <Route path={"/player/:nickname"} element={<PlayerPage />} />
                    <Route path={"/report/match/:matchId/player/:nickname"} element={<ReportPage />} />
                    <Route path={"/share/:id"} element={<RedirectPage />} />
                </Routes>
            </BookmarkContext.Provider>
        </BrowserRouter>
        <Footer/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

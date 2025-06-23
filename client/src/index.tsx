import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ItemsList from "./components/ItemsComonent/ItemsBlock";
import ItemDetailPage from "./components/ItemsDetailPage/ItemDetailPage";
import Layout from "./components/Layout/Layout";
import Auth from "./pages/Auth/Auth";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "./utils/constants";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
  <Routes>
    {/* без Header */}
    <Route path={LOGIN_ROUTE} element={<Auth />} />
    <Route path={REGISTRATION_ROUTE} element={<Auth />} />

    {/* все остальные с Layout и Header */}
    <Route path="/" element={<Layout />}>
      <Route index element={<ItemsList />} />
      <Route path="item/:id" element={<ItemDetailPage />} />
    </Route>
  </Routes>
</BrowserRouter>
    </Provider>
  </React.StrictMode>
);

import { ADMIN_ROUTE, CART_ROUTE, HOME_ROUTE, ITEM_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/constants";
import Admin from "./pages/AdminPanel";
import Cart from "./pages/Сart";
import MainPage from "./pages/Shop";
import Auth from "./pages/Auth";
import Item from "./pages/Item";

export const authRoutes = [
  {
    path: ADMIN_ROUTE, 
    Component: Admin, 
  },
  {
    path: CART_ROUTE, 
    Component: Cart, 
  },
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: MainPage
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth
  },
  {
    path: ITEM_ROUTE + '/:id',
    Component: Item
  },
  {
    path:HOME_ROUTE,
    Component: MainPage
  },
];

import Home from "./pages/home/Home";
import { WatchList } from "./pages/watchList/WatchList";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useRoutes,
} from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Trading from "./pages/trading/Trading";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import "./styles/global.scss";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FormPage from "./pages/formPage/FormPage";
import Investing from "./pages/investing/Investing";
import { AuthStateProvider } from "./contexts/AuthStateContext";
import CookieConsent from "react-cookie-consent";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
// import LoginForm from "./components/loginForm/LoginForm";

/*
the main component of the application
it renders the navbar, the menu, main section and the footer 
it also renders the routes based on the url
*/

const queryClient = new QueryClient(); // create a new query client instance from react-query

interface LayoutProps {
  showMenu: boolean;
}

const Layout: React.FC<LayoutProps> = ({ showMenu }) => {
  // Layout component to render the navbar, menu, main section and the footer
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  // Check if the current route is the home page
  // const isHome = window.location.pathname === '/';

  // Render the menu if showMenu is true and the current route is not the home page
  //   const renderMenu = showMenu && !isHome ? ( // use this to hide menu on the homepage

  const renderMenu = showMenu ? (
    <div className="menuContainer">
      <Menu />
    </div>
  ) : null;

  return (
    <div className="main">
      {/* Wrap the application with the QueryClientProvider */}
      <QueryClientProvider client={queryClient}>
        <Navbar />

        <div className="container">
          {renderMenu}
          <div className="contentContainer">{routes || <Outlet />}</div>
          <CookieConsent
            location="bottom"
            buttonText="hell ye!!"
            cookieName="myconsent"
            style={{ background: "#222b3c" }}
            buttonStyle={{
              color: "#4e503b",
              fontSize: "13px",
              background: "#",
            }}
            expires={150}
          >
            This website uses cookies to enhance the user experience.{"#dddddd"}
            <span style={{ fontSize: "10px" }}></span>
          </CookieConsent>
        </div>
        <Footer />
      </QueryClientProvider>
    </div>
  );
};

const router = createBrowserRouter([
  // create the router
  {
    path: "/",
    element: <Layout showMenu={true} />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/trading",
        element: <ProtectedRoute element={<Trading />} />,
      },

      {
        path: "/invest",
        element: <ProtectedRoute element={<Investing />} />,
      },

      {
        path: "/watchlist",
        element: <ProtectedRoute element={<WatchList />} />,
      },
      {
        path: "/about",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Home />,
      },
      { path: "/subscribe", element: <Home /> },

      {
        path: "/reset-password/:uid/:token",
        element: <FormPage />,
      },
      {
        path: "/confirm-email/:key",
        element: <FormPage />,
      },
      {
        path: "/login",
        element: <FormPage />,
      },
      {
        path: "/signup",
        element: <FormPage />,
      },
    ],
  },
  // dont show menu on login and signup and form pages
  {
    path: "/",
    element: <Layout showMenu={false} />,
    children: [
      {
        path: "/login",
        element: <FormPage />,
      },
      {
        path: "/signup",
        element: <FormPage />,
      },
      {
        path: "/reset-password/:uid/:token",
        element: <FormPage />,
      },
      {
        path: "/confirm-email/:key",
        element: <FormPage />,
      },
    ],
  },
]);

function App() {
  return (
    <AuthStateProvider>
      <RouterProvider router={router} />
    </AuthStateProvider>
  );
}

export default App;

import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "pages/HomePage";
import ContactUsPage from "pages/ContactUsPage";

const routes = [
  {
    path: "accueil",
    element: <HomePage />,
  },
  {
    path: "contact-us",
    element: <ContactUsPage />,
  },
];

const homePage = () => {
  return "/accueil";
};

const Router = () => {
  return (
    <Routes>
      {routes.flatMap((route) => {
        return (
          <Route
            path={`${route.path}`}
            element={route.element}
            key={`${route.path}`}
          />
        );
      })}
      <Route path="*" element={<Navigate to={homePage()} replace />} />
    </Routes>
  );
};

export default Router;

import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "pages/HomePage";
import ContactUsPage from "pages/ContactUsPage";
import AboutPage from "pages/AboutPage";
import Form from "containers/Form";

const routes = [
  {
    path: "accueil",
    element: <HomePage />,
  },
  {
    path: "contact-us",
    element: <ContactUsPage />,
  },
  {
    path: "a-propos",
    element: <AboutPage />,
  },
  {
    path: "formulaire",
    element: <Form />,
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

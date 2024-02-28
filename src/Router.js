import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "pages/HomePage";
import ContactUsPage from "pages/ContactUsPage";
import AboutPage from "pages/AboutPage";
import Form from "containers/Form";
import FaqPage from "pages/FaqPage";
import LegalNotice from "containers/LegalNotice";
import CgvPage from "pages/CgvPage";
import TermsOfUsePage from "pages/TermsOfUsePage";

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
    path: "faq",
    element: <FaqPage />,
  },
  {
    path: "conditions-utilisation",
    element: <TermsOfUsePage />,
  },
  {
    path: "cgv",
    element: <CgvPage />,
  },
  {
    path: "mentions-legales",
    element: <LegalNotice />,
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

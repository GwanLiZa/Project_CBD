import { lazy } from "react";
import { Routes, Route } from "react-router-dom";


/****Layouts*****/
const FullLayout = lazy(() => import("./layouts/FullLayout.js"));

/***** Pages ****/
const Starter = lazy(() => import("./views/Starter.js"));
const About = lazy(() => import("./views/About.js"));
const Alerts = lazy(() => import("./views/ui/Alerts"));
const Badges = lazy(() => import("./views/ui/Badges"));
const Buttons = lazy(() => import("./views/ui/Buttons"));
const Cards = lazy(() => import("./views/ui/Cards"));
const Grid = lazy(() => import("./views/ui/Grid"));
const Tables = lazy(() => import("./views/ui/Tables"));
const Forms = lazy(() => import("./views/ui/Forms"));
const Breadcrumbs = lazy(() => import("./views/ui/Breadcrumbs"));

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<FullLayout />}>
        <Route path="/starter" element={<Starter />} />
        <Route path="/about" element={<About />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/badges" element={<Badges />} />
        <Route path="/buttons" element={<Buttons />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/grid" element={<Grid />} />
        <Route path="/table" element={<Tables />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/breadcrumbs" element={<Breadcrumbs />} />
      </Route>
    </Routes>
  );
};

export default App;


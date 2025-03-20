import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/GeneralLayout";
import { GlobalProvider } from "./context/GlobalContext";

// Lazy loading de las páginas para mejorar el rendimiento
const Home = lazy(() => import("./pages/Home"));
const Nosotros = lazy(() => import("./pages/Nosotros"));
const Activities = lazy(() => import("./pages/Actividades"));
const Noticias = lazy(() => import("./pages/Noticias"));
const Dojos = lazy(() => import("./pages/Dojos"));
const Kyokushin = lazy(() => import("./pages/Kyokushin"));
const Error404 = lazy(() => import("./pages/Error404"));

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <Layout>
          <Suspense fallback={<p className="text-center">Cargando...</p>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/actividades" element={<Activities />} />
              <Route path="/noticias" element={<Noticias />} />
              <Route path="/dojos" element={<Dojos />} />
              <Route path="/kyokushin" element={<Kyokushin />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </GlobalProvider>
  );
};

export default App;

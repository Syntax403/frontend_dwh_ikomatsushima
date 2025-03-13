// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/GeneralLayout';
import { GlobalProvider } from './context/GlobalContext';

import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Activities from './pages/Actividades';
import Noticias from './pages/Noticias';
import Dojos from './pages/Dojos';

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/actividades" element={<Activities />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/dojos" element={<Dojos />} />
          </Routes>
        </Layout>
      </Router>
    </GlobalProvider>
  );
};

export default App;

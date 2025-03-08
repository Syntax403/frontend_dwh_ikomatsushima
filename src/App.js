// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/GeneralLayout';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Clases from './pages/Clases';
import Contacto from './pages/Contacto';
import Activities from './pages/Actividades';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/actividades" element={<Activities />} />
          <Route path="/clases" element={<Clases />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import SpinnerPersonalizado from "../components/Loaders/Loader1";
import { useGlobalContext } from "../context/GlobalContext";

const Layout = ({ children }) => {
  const { loading } = useGlobalContext();
  const [showContent, setShowContent] = useState(false);
  const isFirstLoad = useRef(true);
  const startTime = useRef(null);
  const [spinnerDuration, setSpinnerDuration] = useState(3000); // Tiempo dinámico del Loader

  useEffect(() => {
    let timer;

    if (loading) {
      startTime.current = Date.now(); // Guardamos el tiempo de inicio
    } else {
      const loadDuration = Date.now() - startTime.current;
      const minDuration = isFirstLoad.current ? 8000 : 1000;
      const finalDuration = Math.max(minDuration - loadDuration, 0);

      setSpinnerDuration(finalDuration + 600); // Ajustamos para sincronizar con el fade-out

      timer = setTimeout(() => {
        setShowContent(true);
        isFirstLoad.current = false;
      }, finalDuration);
    }

    return () => clearTimeout(timer);
  }, [loading]);

  // Mostrar el Spinner mientras `showContent` es `false`
  if (!showContent) {
    return <SpinnerPersonalizado duration={spinnerDuration} onComplete={() => setShowContent(true)} />;
  }

  return (
    <div className="flex flex-col min-h-screen transition-opacity duration-700 opacity-100">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

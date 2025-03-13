import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Loader from "../components/Loaders/Loader1";
import { useGlobalContext } from "../context/GlobalContext";

const Layout = ({ children }) => {
  const { loading } = useGlobalContext();

  useEffect(() => {
    let timer;
    if (!loading) {
      timer = setTimeout(() => setShowLoader(false), 1000); // duración del loader entre 6 a 7 segundos
    }
    return () => clearTimeout(timer);
  }, [loading]);

  const [showLoader, setShowLoader] = useState(true);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        {showLoader ? <Loader /> : <main className="flex-grow">{children}</main>}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
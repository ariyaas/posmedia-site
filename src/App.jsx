import { useState, useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import TopBar from "./components/layout/TopBar";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/ScrollToTop";
function App() {
 
  return (
    <>
     <ScrollToTop />
      <TopBar />
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
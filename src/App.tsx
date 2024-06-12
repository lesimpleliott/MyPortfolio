import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Modal from "./components/modal/Modal";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Home from "./pages/Home";
import { useStoreModal } from "./stores/modal.store";
import useStoreTheme from "./stores/theme.store";

const App = () => {
  const { modalIsOpen } = useStoreModal();
  const { theme, initSysTheme } = useStoreTheme();

  useEffect(() => {
    initSysTheme();
  }, [initSysTheme]);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />

      {modalIsOpen && <Modal />}
    </BrowserRouter>
  );
};

export default App;

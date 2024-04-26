import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  document.body.setAttribute("data-theme", "dark");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
        <Route path="*" element={<div>error</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
    {/* Le path * est utilisé lorsque l'url demandé n'est pas déclaré ou est inexsistant */}
        <Route path="*" element={<Home />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;

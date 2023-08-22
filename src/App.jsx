import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Lore from "./pages/Lore";
import NotFound from "./pages/NotFound";
import Header from "./shared/Header";
import Footer from "./shared/Footer";

function App() {
  return (
    <div className="global-container">
      {/* <Popup /> */}
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="lore" element={<Lore />} />
            <Route path="404" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

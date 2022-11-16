import "./App.scss";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Catalogue from "./pages/Catalogue";
import Homepage from "./pages/Home";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Homepage />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

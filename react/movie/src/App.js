import "./App.css";
import Favourites from "./components/Favourites";
import Banner from "./components/Banner";
import Lists from "./components/Lists";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Lists />
              </>
            }
          />
          <Route path="/fav" element={<Favourites />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

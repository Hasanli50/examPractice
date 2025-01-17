import "./App.css";
import Header from "./components/Header";
import MusicContext from "./context/MusicContext";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import { Details } from "./pages/Details";
import AddMusic from "./pages/AddMusic";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <MusicContext>
        <Toaster position="top-right" reverseOrder={false} />
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/:id" element={<Details />} />
            <Route path="/add-music" element={<AddMusic />} />
          </Route>
        </Routes>
      </MusicContext>
    </>
  );
}

export default App;

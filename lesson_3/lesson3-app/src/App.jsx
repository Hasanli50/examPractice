import { ToastContainer } from "react-toastify";
import "./App.css";
import MovieProvider from "./context/movieContext";
import MovieRouter from "./routes/MovieRouter";

function App() {
  return (
    <>
    <ToastContainer />
      <MovieProvider>
        <MovieRouter/>
      </MovieProvider>
    </>
  );
}

export default App;

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Overview from "./pages/Overview/Overview";
import Structure from "./pages/Structure/Structure";
import Surface from "./pages/Surface/Surface";
import { createBrowserRouter } from "react-router-dom";
import { Container } from "./App.styles";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:planet",
    element: <Overview />,
  },
  {
    path: "/:planet/structure",
    element: <Structure />,
  },
  {
    path: "/:planet/surface",
    element: <Surface />,
  },
]);

function App() {
  return (
    <Container>
      <Navbar />
    </Container>
  );
}

export default App;

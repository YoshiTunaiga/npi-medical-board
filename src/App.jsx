import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import NPPage from "./pages/NPPage";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/api/:id", element: <NPPage /> },
  ]);

  return routes;
}

export default App;

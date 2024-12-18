import { useRoutes } from "react-router-dom";
import "./App.css";
import { routes } from "./routers/routers";

function App() {
  return <div>{useRoutes(routes)}</div>;
}
export default App;

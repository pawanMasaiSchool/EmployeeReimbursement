import AllRoutes from "./AllRoutes/AllRoutes";
import Navbar from "./Components/Navbar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

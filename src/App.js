import "./App.css";
import { Navbar, Sidebar } from "./components";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages";

function App() {
  return (
    <div className="h-[100vh] flex w-[100vw]">
      <Sidebar />
      <div className="grow">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<>Page not found</>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

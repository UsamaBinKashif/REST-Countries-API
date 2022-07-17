import "./App.css";
import Countries from "./components/Countries";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Country from "./components/Country";
import Error from "./components/Error";

function App() {
  return (
    <div className="bg-gray-300 dark:bg-gray-900 h-full">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Countries />} index={true} />
          <Route path=":capital" index={false} element={<Country />} />
          <Route path="/undefined" index={false} element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

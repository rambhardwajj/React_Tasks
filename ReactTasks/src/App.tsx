import Counter from "./Tasks/Counter";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
    return (
          <Router>
                <Routes>
                  <Route path="/counter" element={<Counter />} />
                 
                </Routes>
          </Router>
    );
  };
  

export default App

import Navbar from "./components/Navbar";
import BlogContext from "./context/BlogContext";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BlogContext>
      <Router>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Blog />} path="/blog" />
        </Routes>
      </Router>
    </BlogContext>
  );
}

export default App;

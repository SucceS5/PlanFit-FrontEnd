import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import LoginHome from "./pages/loginHome";
import MyPage from "./pages/MyPage";
import EditPage from "./pages/EditPage";
import Likes from "./pages/Likes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/LoginHome" element={<LoginHome />} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/edit/:field" element={<EditPage />} />
        <Route path="/Likes" element={<Likes />} />
      </Routes>
    </Router>
  );
}

export default App;

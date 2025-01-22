import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/홈페이지/Home";
import Login from "./pages/로그인/Login";
import SignUp from "./pages/회원가입/SignUp";
import LoginHome from "./pages/홈페이지/loginHome";
import MyPage from "./pages/마이페이지/MyPage";
import EditPage from "./pages/마이페이지/EditPage";
import Likes from "./pages/좋아요/Likes";
import CreateCourse from "./pages/코스제작/CreateCourse";
import Calender from "./pages/캘린더/Calender";

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
        <Route path="/CreateCourse" element={<CreateCourse />} />
        <Route path="/Calender" element={<Calender />} />
      </Routes>
    </Router>
  );
}

export default App;

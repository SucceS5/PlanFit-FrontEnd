import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/로그인/Login";
import SignUp from "./pages/회원가입/SignUp";
import MyPage from "./pages/마이페이지/MyPage";
import NewHome from "./pages/홈페이지/NewHome";
import MainHome from "./pages/홈페이지/MainHome";

function App() {
  return (
    <Router>
      <Routes>
        /* 홈페이지 */
        <Route path="/" element={<NewHome />} />
        <Route path="/NewHome" element={<NewHome />} />
        <Route path="/MainHome" element={<MainHome />} />
        /* 로그인 및 회원가입 */
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        /* 마이페이지 */
        <Route path="/MyPage" element={<MyPage />} />
      </Routes>
    </Router>
  );
}

export default App;

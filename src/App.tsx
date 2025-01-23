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
import SelectDay from "./pages/캘린더/SelectDay";
import CourseResult from "./pages/코스제작/CourseResult";
import CourseEdit from "./pages/코스제작/CourseEdit";
import CourseOrder from "./pages/코스제작/CourseOrder";
import CourseSave from "./pages/코스제작/CourseSave";

function App() {
  return (
    <Router>
      <Routes>
        /* 홈페이지 */
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/LoginHome" element={<LoginHome />} />
        /* 로그인 및 회원가입 */
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        /* 마이페이지 */
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/edit/:field" element={<EditPage />} />
        /* 좋아요 */
        <Route path="/Likes" element={<Likes />} />
        /* 캘린더 */
        <Route path="/Calender" element={<Calender />} />
        <Route path="/SelectDay" element={<SelectDay />} />
        /* 코스제작 */
        <Route path="/CreateCourse" element={<CreateCourse />} />
        <Route path="/CourseResult" element={<CourseResult />} />
        <Route path="/CourseEdit" element={<CourseEdit />} />
        <Route path="/CourseOrder" element={<CourseOrder />} />
        <Route path="/CourseSave" element={<CourseSave />} />
        /* 포스트 */
      </Routes>
    </Router>
  );
}

export default App;

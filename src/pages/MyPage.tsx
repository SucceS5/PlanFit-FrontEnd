import style from "../less/MyPage.module.less";
import profileImg from "../assets/기본프로필.jpg";
import { MdOutlineAddBox } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";
import { FiHome } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import { FaChevronRight } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

type EditField = "id" | "password" | "profile" | "name" | "birth" | "phone" | "email" | "position";

function MyPage() {
  const navigate = useNavigate();

  const homeClick = () => {
    navigate("/LoginHome");
  };

  const logoutClick = () => {
    navigate("/Home");
  };

  const likeClick = () => {
    navigate("/Likes");
  };

  const createClick = () => {
    navigate("/CreateCourse");
  };

  const handleEditClick = (field: EditField) => {
    console.log(field); // field가 사용되고 있음을 명시적으로 확인
    navigate(`/edit/${field}`);
  };

  const myClick = () => {
    alert("이미 마이페이지에 계십니다!");
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.headTop}>마이페이지</div>
        <div className={style.headBottom}>
          <div className={style.profilePicture}>
            <img src={profileImg} alt="Profile" />
          </div>
          <div className={style.headInfo}>
            <p>OOO 님</p>
            <p>OO세 대학생</p>
          </div>
          <div className={style.logOut} onClick={logoutClick}>
            로그아웃
            <LuLogOut className={style.icon} />
          </div>
        </div>
      </div>
      <div className={style.main}>
        <div className={style.mainHead}>내 계정 관리</div>
        <div className={style.mainBody}>
          <div className={style.list}>
            <div className={style.listLeft}>아이디 수정</div>
            <div className={style.listRight}>
              <FaChevronRight className={style.icon} onClick={() => handleEditClick("id")} />
            </div>
          </div>
          <div className={style.list}>
            <div className={style.listLeft}>비밀번호 수정</div>
            <div className={style.listRight}>
              <FaChevronRight className={style.icon} onClick={() => handleEditClick("password")} />
            </div>
          </div>
          <div className={style.list}>
            <div className={style.listLeft}>프로필 사진 수정</div>
            <div className={style.listRight}>
              <FaChevronRight className={style.icon} onClick={() => handleEditClick("profile")} />
            </div>
          </div>
          <div className={style.list}>
            <div className={style.listLeft}>이름 수정</div>
            <div className={style.listRight}>
              <FaChevronRight className={style.icon} onClick={() => handleEditClick("name")} />
            </div>
          </div>
          <div className={style.list}>
            <div className={style.listLeft}>생년월일 수정</div>
            <div className={style.listRight}>
              <FaChevronRight className={style.icon} onClick={() => handleEditClick("birth")} />
            </div>
          </div>
          <div className={style.list}>
            <div className={style.listLeft}>전화번호 수정</div>
            <div className={style.listRight}>
              <FaChevronRight className={style.icon} onClick={() => handleEditClick("phone")} />
            </div>
          </div>
          <div className={style.list}>
            <div className={style.listLeft}>이메일 수정</div>
            <div className={style.listRight}>
              <FaChevronRight className={style.icon} onClick={() => handleEditClick("email")} />
            </div>
          </div>
          <div className={style.list}>
            <div className={style.listLeft}>신분 수정</div>
            <div className={style.listRight}>
              <FaChevronRight className={style.icon} onClick={() => handleEditClick("position")} />
            </div>
          </div>
        </div>
      </div>
      <div className={style.footer}>
        <div onClick={createClick}>
          <MdOutlineAddBox className={style.button} />
          코스제작
        </div>
        <div>
          <RiBillLine className={style.button} />
          포스트
        </div>
        <div onClick={homeClick}>
          <FiHome className={style.button} />
          플랜핏 홈
        </div>
        <div onClick={likeClick}>
          <FaRegHeart className={style.button} />
          좋아요
        </div>
        <div onClick={myClick}>
          <RiAccountCircleLine className={style.button} />
          마이페이지
        </div>
      </div>
    </div>
  );
}

export default MyPage;

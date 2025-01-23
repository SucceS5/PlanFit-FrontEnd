import style from "../../less/코스제작/CourseEdit.module.less";
import { MdOutlineAddBox } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";
import { FiHome } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import { IoChevronBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function CourseEdit() {
  const navigate = useNavigate();

  const homeClick = () => {
    navigate("/LoginHome");
  };
  const likeClick = () => {
    navigate("/Likes");
  };
  const myClick = () => {
    navigate("/MyPage");
  };
  const createClick = () => {
    navigate("/CreateCourse");
  };
  const backClick = () => {
    navigate("/CourseResult");
  };
  const nextClick = () => {
    navigate("/CourseOrder");
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.headerLeft}>
          <IoChevronBackOutline className={style.icon} onClick={backClick} />
        </div>
        <div className={style.headerCenter}>선택한 장소를 수정하세요</div>
        <p />
      </div>
      <div className={style.main}>
        <div className={style.mainBody}></div>
        <div className={style.mainButton} onClick={nextClick}>
          다음
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

export default CourseEdit;

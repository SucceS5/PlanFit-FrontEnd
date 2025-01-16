import style from "../less/Likes.module.less";
import { MdOutlineAddBox } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";
import { FiHome } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function Likes() {
  const navigate = useNavigate();

  const homeClick = () => {
    navigate("/LoginHome");
  };

  const createClick = () => {
    navigate("/CreateCourse");
  };

  const myClick = () => {
    navigate("/Mypage");
  };

  const likeClick = () => {
    alert("이미 좋아요에 계십니다!");
  };
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.headerTop}>좋아요</div>
        <div className={style.headerBottom}>
          <div className={style.headerBottomLeft}>장소</div>
          <div className={style.headerBottomRight}>코스</div>
        </div>
      </div>
      <div className={style.main}></div>
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

export default Likes;

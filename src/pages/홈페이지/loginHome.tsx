import style from "../../less/홈페이지/loginHome.module.less";
import { MdOutlineAddBox } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";
import { FiHome } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import { FaRegCalendar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function LoginHome() {
  const navigate = useNavigate();

  const homeClick = () => {
    alert("이미 홈에 계십니다!");
  };

  const myClick = () => {
    navigate("/MyPage");
  };

  const likeClick = () => {
    navigate("/Likes");
  };

  const createClick = () => {
    navigate("/CreateCourse");
  };

  const postClick = () => {
    navigate("/Post");
  };

  const calClick = () => {
    navigate("/Calender");
  };
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.headerLeft}>PlanFit</div>
        <div className={style.headerRight}>
          안녕하세요, OO님 <FaRegCalendar className={style.icon} onClick={calClick} />
        </div>
      </div>
      <div className={style.main}>
        <div className={style.content}>
          <div className={style.sentence1}>혹시, 어디서 놀지 고민중이니?</div>
          <div className={style.sentence2}>센스 만점인 사람이 되고 싶니?</div>
          <div className={style.sentence3}>보기 쉽게 계획을 짜고 싶다고?</div>
          <div className={style.PlanFit}>
            <div className={style.Plan}>플랜</div>
            <div className={style.Fit}>FIT</div>
          </div>
        </div>
      </div>
      <div className={style.footer}>
        <div onClick={createClick}>
          <MdOutlineAddBox className={style.button} />
          코스제작
        </div>
        <div onClick={postClick}>
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
export default LoginHome;

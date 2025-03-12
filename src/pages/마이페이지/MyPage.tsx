import style from "../../less/마이페이지/MyPage.module.less";
import { TbMap2 } from "react-icons/tb";
import { AiOutlineFileSearch } from "react-icons/ai";
import { FiHome } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import { FaChevronRight } from "react-icons/fa";
import profileImg from "../../assets/기본프로필.jpg";

function MyPage() {
  return (
    <div className={style.container}>
      <div className={style.header}>나의 정보</div>
      <div className={style.main}>
        <div className={style.myInfo}>
          <div className={style.profileImg}>
            <img src={profileImg} />
          </div>
          <div className={style.profileName}>사용자 이름</div>
          <div className={style.profileEdit}>
            <FaChevronRight className={style.icon} />
          </div>
        </div>

        <div className={style.myAct}></div>
      </div>
      <div className={style.footer}>
        <div>
          <FiHome className={style.button} onClick={() => alert("이미 홈에 계십니다!")} />
          플랜핏 홈
        </div>
        <div>
          <AiOutlineFileSearch className={style.button} />
          포스트
        </div>
        <div>
          <TbMap2 className={style.button} />
          코스
        </div>
        <div>
          <FaRegHeart className={style.button} />
          좋아요
        </div>
        <div>
          <RiAccountCircleLine className={style.button} />
          마이페이지
        </div>
      </div>
    </div>
  );
}

export default MyPage;

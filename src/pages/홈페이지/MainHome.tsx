import { useState, useRef, useEffect } from "react";
import style from "../../less/홈페이지/MainHome.module.less";
import { TbMap2 } from "react-icons/tb";
import { AiOutlineFileSearch } from "react-icons/ai";
import { FiHome } from "react-icons/fi";
import { FaRegHeart, FaPlus } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import { BsCaretRightFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function MainHome() {
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const toggleOptions = () => {
    setShowOptions((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
      setShowOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={style.container}>
      <div className={style.header}>PlanFit</div>
      <div className={style.main}>
        <div className={style.mainTop}>
          <div className={style.dDays}>
            <div className={style.mainDay}>
              <div className={style.info}>
                <div className={style.infoTop}>D-DAY</div>
                <div className={style.infoBody}>코스 제목</div>
                <div className={style.infoBottom}>코스 시작 날짜</div>
              </div>
              <div className={style.button}>
                <BsCaretRightFill className={style.icon} />
              </div>
            </div>
          </div>
        </div>
        <div className={style.mainBottom}>
          <div className={style.suggestTop}>
            <p className={style.name}>사용자님,</p>
            <p className={style.suggest}>이런 코스는 어떠세요?</p>
          </div>
          <div ref={wrapperRef} className={`${style.suggestBottom} ${showOptions ? style.showOptions : ""}`}>
            <div className={style.addCourse}>코스 생성</div>
            <div className={style.addPost}>포스트 생성</div>
            <div className={style.circle} onClick={toggleOptions}>
              <FaPlus className={style.icon} />
            </div>
          </div>
        </div>
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
        <div onClick={() => navigate("/MyPage")}>
          <RiAccountCircleLine className={style.button} />
          마이페이지
        </div>
      </div>
    </div>
  );
}

export default MainHome;

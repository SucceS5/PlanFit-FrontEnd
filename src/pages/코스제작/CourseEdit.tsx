import style from "../../less/코스제작/CourseEdit.module.less";
import { MdOutlineAddBox, MdDeleteForever } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";
import { FiHome } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import { IoChevronBackOutline } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

function CourseEdit() {
  const location = useLocation();
  const { places } = location.state || {}; // 전달된 장소 정보

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

  const progressPercentage = 60; // 진행도 설정

  // 선택된 장소 리스트 상태로 관리
  const [selectedPlaces, setSelectedPlaces] = useState(places || []);

  // 삭제 핸들러
  const handleDelete = (id: number) => {
    setSelectedPlaces((prevPlaces) => prevPlaces.filter((place) => place.id !== id));
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.headerTop}>
          <div className={style.headerLeft}>
            <IoChevronBackOutline className={style.icon} onClick={backClick} />
          </div>
          <div className={style.headerCenter}>선택한 장소를 수정하세요</div>
          <p />
        </div>
        <div className={style.progressBar}>
          <div className={style.innerProgress} style={{ width: `${progressPercentage}%` }} />
        </div>
      </div>

      <div className={style.main}>
        <div className={style.mainBody}>
          {/* 선택된 장소 출력 */}
          {selectedPlaces.map((place) => (
            <div key={place.id} className={style.addResult}>
              <div className={style.resultImg}>
                <img src={place.img} alt={place.name} width="100%" height="100%" />
              </div>
              <div className={style.resultInfo}>
                <div className={style.resultAddress}>{place.address}</div>
                <div className={style.resultName}>{place.name}</div>
              </div>
              <div className={style.delete} onClick={() => handleDelete(place.id)}>
                <MdDeleteForever className={style.icon} />
              </div>
            </div>
          ))}
        </div>
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

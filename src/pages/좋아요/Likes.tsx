import style from "../../less/좋아요/Likes.module.less";
import { MdOutlineAddBox } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";
import { FiHome } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// 임시 샘플데이터 (장소,이름,위치,이미지)
// 이미지 구글에서 대충 퍼왔어요
const likedPlaces = [
  { id: 1, name: "롯데타워", location: "서울특별시", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvPBGXg0d7W328HXWeIfp1AOnQdcgovgHmVw&s" },
  { id: 2, name: "한강공원", location: "서울특별시", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvPBGXg0d7W328HXWeIfp1AOnQdcgovgHmVw&s" },
];

const likedCourses = [
  {
    id: 1,
    title: "친구들과 가기 너무 좋은 코스^^",
    date: "2025-01-02",
    location: "서울특별시 / 서초, 강남",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvPBGXg0d7W328HXWeIfp1AOnQdcgovgHmVw&s",
  },
  {
    id: 2,
    title: "썸탈 때 데리고 가면, 그날 바로 커플 가능 코스",
    date: "2025-01-02",
    location: "서울특별시 / 서초, 강남",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvPBGXg0d7W328HXWeIfp1AOnQdcgovgHmVw&s",
  },
];

function Likes() {
  // 라우팅을 처리하기 위해 useNavigate 훅을 사용
  const navigate = useNavigate();
  
   // 현재 선택된 탭(장소/코스스) 저장
  const [selectedTab, setSelectedTab] = useState<"places" | "courses">("courses");
  
  // 좋아요된 장소 및 코스 데이터 관리
  const [places, setPlaces] = useState(likedPlaces);
  const [courses, setCourses] = useState(likedCourses);

  // 장소 삭제 함수
  const handleDeletePlace = (id: number) => {
    setPlaces((prev) => prev.filter((place) => place.id !== id));
  };

  // 코스 삭제제 함수
  const handleDeleteCourse = (id: number) => {
    setCourses((prev) => prev.filter((course) => course.id !== id));
  };


  //하단 메뉴바
  const homeClick = () => {
    navigate("/LoginHome"); //홈으로 이동
  };

  const createClick = () => {
    navigate("/CreateCourse"); //코스제작
  };

  const myClick = () => {
    navigate("/Mypage"); //마이페이지
  };

  const likeClick = () => {
    alert("이미 좋아요에 계십니다!"); 
  };

  const postClick = () => {
    navigate("/Post"); 
  };

  return (
    <div className={style.container}>
    
      <div className={style.header}>
        <div className={style.headerTop}>좋아요</div>
        <div className={style.headerBottom}>
          <div
            className={`${style.headerBottomLeft} ${
              selectedTab === "places" ? style.activeTab : ""
            }`}
            onClick={() => setSelectedTab("places")} 
          >
            장소 {places.length} {/*장소 개수*/}
          </div>
          <div
            className={`${style.headerBottomRight} ${
              selectedTab === "courses" ? style.activeTab : ""
            }`}
            onClick={() => setSelectedTab("courses")}
          >
            코스 {courses.length} {/*코스 개수*/}
          </div>
        </div>
      </div>

      <div className={style.main}>
        {selectedTab === "places" ? (
          <ul className={style.placeList}>
            {places.map((place) => (
              <li key={place.id} className={style.placeItem}>
                <div className={style.placeInfo}>
                  <img src={place.image} alt={place.name} className={style.avatar} />
                  <div>
                    <p className={style.placeName}>{place.name}</p>
                    <span className={style.placeLocation}>{place.location}</span>
                  </div>
                </div>
                <button
                  className={style.deleteButton}
                  // 삭제
                  onClick={() => handleDeletePlace(place.id)} 
                >
                  삭제
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <ul className={style.courseList}>
            {courses.map((course) => (
              <li key={course.id} className={style.courseItem}>
                <div className={style.courseInfo}>
                  <img src={course.image} alt={course.title} className={style.avatar} />
                  <div>
                    <p className={style.courseTitle}>{course.title}</p>
                    <span className={style.courseDetails}>
                      {course.date} / {course.location}
                    </span>
                  </div>
                </div>
                <button
                  className={style.deleteButton}
                  onClick={() => handleDeleteCourse(course.id)}
                >
                  삭제
                </button>
              </li>
            ))}
          </ul>
        )}
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

export default Likes;

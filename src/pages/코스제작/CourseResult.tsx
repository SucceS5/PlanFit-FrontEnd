import style from "../../less/코스제작/CourseResult.module.less";
import { MdOutlineAddBox } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";
import { FiHome } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import { IoChevronBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function CourseResult() {
  const navigate = useNavigate();

  const [selectedPlaces, setSelectedPlaces] = useState<any[]>([]); // 선택된 장소들을 저장할 상태

  // 각 버튼 클릭 핸들러
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
    navigate("/CreateCourse");
  };

  const progressPercentage = 40;

  const results = [
    {
      id: 1,
      address: "맛집1 주소",
      name: "맛집1",
      img: "https://img.freepik.com/free-psd/flat-design-shop-building-illustration-isolated_23-2151544125.jpg",
    },
    {
      id: 2,
      address: "맛집2 주소",
      name: "맛집2",
      img: "https://img.freepik.com/free-psd/flat-design-shop-building-illustration-isolated_23-2151544127.jpg",
    },
    {
      id: 3,
      address: "맛집3 주소",
      name: "맛집3",
      img: "https://img.lovepik.com/photo/45015/7453.jpg_wh860.jpg",
    },
    { id: 4, address: "맛집4 주소", name: "맛집4", img: "https://img.lovepik.com/photo/45015/7456.jpg_wh300.jpg" },
    { id: 5, address: "맛집5 주소", name: "맛집5", img: "https://img.lovepik.com/photo/45015/7455.jpg_wh860.jpg" },
    {
      id: 6,
      address: "맛집6 주소",
      name: "맛집6",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXWBvEpq69DuvqYw6SmTowTaB76yxv-OT-GVPMU7fKgZH27MXjSgwe9TROnOPUSaCkPCo&usqp=CAU",
    },
    {
      id: 7,
      address: "맛집7 주소",
      name: "맛집7",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlD7b7ae0QXOxrxNqnx86KIUxbmnkW7oi9MYjWl-7_7haq6ltrWuUF6BU1ICtxDfeic0k&usqp=CAU",
    },
    // 더 많은 데이터 추가 가능
  ];

  // 장소 추가 핸들러 (추가 버튼 클릭 시)
  const handleAddPlace = (place: any) => {
    // 이미 선택된 장소 목록에 추가되었는지 확인
    if (!selectedPlaces.some((p) => p.id === place.id)) {
      setSelectedPlaces([...selectedPlaces, place]);
      alert("장소가 추가되었습니다.");
    }
  };

  // '다음' 버튼 클릭 시, 선택된 장소들을 CourseEdit 페이지로 넘기기
  const nextClick = () => {
    if (selectedPlaces.length > 0) {
      navigate("/CourseEdit", { state: { places: selectedPlaces } });
    } else {
      alert("장소를 추가해 주세요.");
    }
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.headerTop}>
          <div className={style.topLeft}>
            <IoChevronBackOutline className={style.icon} onClick={backClick} />
          </div>
          <div className={style.topRight}>장소를 선택해주세요</div>
          <p />
        </div>
        <div className={style.progressBar}>
          <div className={style.innerProgress} style={{ width: `${progressPercentage}%` }} />
        </div>
        <div className={style.headerBottom}>
          <p>맛집</p>
          <p>카페</p>
          <p>놀거리</p>
          <p>취미생활</p>
          <p>명소</p>
        </div>
      </div>

      <div className={style.main}>
        <div className={style.mainBody}>
          {/* 결과 출력 */}
          {results.map((result) => (
            <div key={result.id} className={style.result}>
              <div className={style.resultImg}>
                <img src={result.img} alt={result.name} width="100%" height="100%" />
              </div>
              <div className={style.resultAddress}>{result.address}</div>
              <div className={style.resultName}>{result.name}</div>
              <div
                className={style.resultAdd}
                onClick={() => handleAddPlace(result)} // 장소 추가
              >
                추가하기
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

export default CourseResult;

import { useLocation, useNavigate } from "react-router-dom";
import style from "../../less/캘린더/SelectDay.module.less";
import { MdOutlineAddBox } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";
import { FiHome } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import { BsCaretLeftFill } from "react-icons/bs";
import React from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const formatDate = (date: Date) => {
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" }).toUpperCase();
  const year = date.getFullYear();

  const suffix = ["th", "st", "nd", "rd"][
    day % 10 > 3 ? 0 : day % 100 === 11 || day % 100 === 12 || day % 100 === 13 ? 0 : day % 10
  ];

  return `${day}${suffix} ${month}, ${year}`;
};

function SelectDay() {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedDate } = location.state || {}; // 날짜 정보 받기

  const createClick = () => {
    navigate("/CreateCourse");
  };

  const homeClick = () => {
    navigate("/LoginHome");
  };

  const likeClick = () => {
    navigate("/Likes");
  };

  const myClick = () => {
    navigate("/MyPage");
  };

  const backClick = () => {
    navigate("/Calender");
  };

  const positions = [
    {
      title: "카카오",
      latlng: { lat: 33.450705, lng: 126.570677 },
    },
    {
      title: "생태연못",
      latlng: { lat: 33.450936, lng: 126.569477 },
    },
    {
      title: "텃밭",
      latlng: { lat: 33.450879, lng: 126.56994 },
    },
    {
      title: "근린공원",
      latlng: { lat: 33.451393, lng: 126.570738 },
    },
  ];
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.headerLeft}>
          <BsCaretLeftFill className={style.icon} onClick={backClick} />
        </div>
        <div className={style.headerCenter}>{selectedDate ? formatDate(selectedDate) : ""}</div>
        <div className={style.headerRight}></div>
      </div>
      <div className={style.main}>
        <div className={style.mainTop}>
          <Map center={{ lat: 33.450701, lng: 126.570667 }} style={{ width: "100%", height: "100%" }} level={4}>
            {positions.map((position, index) => (
              <MapMarker
                key={`${position.title}-${position.latlng}`}
                position={position.latlng} // 마커를 표시할 위치
                image={{
                  src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png", // 마커이미지의 주소입니다
                  size: {
                    width: 24,
                    height: 35,
                  }, // 마커이미지의 크기입니다
                }}
                title={position.title} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
              />
            ))}
          </Map>
        </div>
        <div className={style.mainBottom}></div>
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

export default SelectDay;

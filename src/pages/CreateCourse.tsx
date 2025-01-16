import style from "../less/CreateCourse.module.less";
import { MdOutlineAddBox } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";
import { FiHome } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cityData from "../data/cities.json";

interface CityData {
  [city: string]: string[];
}
// 이벤트 타입을 명시적으로 지정
function CreateCourse() {
  const [selectedDate, setSelectedDate] = useState("2025-01-01");
  const [peopleCount, setPeopleCount] = useState(1);
  const [selectedCity, setSelectedCity] = useState<keyof typeof cityData>("서울특별시");
  const [selectedDistrict, setSelectedDistrict] = useState("강남구");
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("10:00");
  const cityDataTyped: CityData = cityData; // cityData의 타입을 명시적으로 지정

  // 날짜 변경 처리 함수
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  // 사람 수 변경 처리 함수
  const handlePeopleCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPeopleCount(Number(event.target.value)); // value를 숫자로 변환
  };

  // 도시 변경 처리 함수
  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCity = event.target.value as "서울특별시" | "부산광역시" | "인천광역시" | "대구광역시"; // 여기서 selectedCity 타입을 명시적으로 지정
    setSelectedCity(selectedCity);
    // cityDataTyped를 사용하여 구 목록을 가져오기
    setSelectedDistrict(cityDataTyped[selectedCity][0]); // 첫 번째 구 선택
  };
  // 구 변경 처리 함수
  const handleDistrictChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDistrict(event.target.value);
  };

  // 시간 변경 처리 함수
  const handleStartTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartTime(event.target.value);
  };

  const handleEndTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndTime(event.target.value);
  };

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
    alert("이미 코스제작에 계십니다!");
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.headerTop}>누구와 만나시나요?</div>
        <div className={style.headerBottom}>해당 정보를 모두 선택해주세요.</div>
      </div>
      <div className={style.main}>
        <div className={style.mainTop}>
          {/* 날짜 선택 */}
          <div className={style.question}>
            <div className={style.title}>Q. 언제 만나시나요?</div>
            <input type="date" value={selectedDate} onChange={handleDateChange} />
          </div>

          {/* 사람 수 선택 */}
          <div className={style.question}>
            <div className={style.title}>Q. 몇 분과 만나시나요?</div>
            <input type="number" value={peopleCount} onChange={handlePeopleCountChange} min="1" max="100" />
          </div>

          {/* 지역 선택 (특별시/광역시) 및 구*/}
          <div className={style.question1}>
            <div className={style.title}>Q. 지역을 선택해주세요.</div>
            <select value={selectedCity} onChange={handleCityChange}>
              {Object.keys(cityData).map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <select value={selectedDistrict} onChange={handleDistrictChange}>
              {cityData[selectedCity].map((district: string) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </div>

          {/* 시간 선택 */}
          <div className={style.question}>
            <div className={style.title}>Q. 만나는 시간을 설정해주세요</div>
            <div>
              <input type="time" value={startTime} onChange={handleStartTimeChange} />
              ~
              <input type="time" value={endTime} onChange={handleEndTimeChange} />
            </div>
          </div>
        </div>
        <div className={style.mainBottom}>다음</div>
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

export default CreateCourse;

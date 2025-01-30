import style from "../../less/코스제작/CreateCourse.module.less";
import { MdOutlineAddBox } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";
import { FiHome } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cityData from "../../data/cities.json";

// 데이터 타입 정의: 도시, 구, 동, 위도, 경도
interface CityData {
  [city: string]: {
    [district: string]: {
      [dong: string]: {
        // 동마다 위도, 경도 정보
        latitude: number;
        longitude: number;
      };
    };
  };
}

function CreateCourse() {
  const cityDataTyped: CityData = cityData;

  // State 설정
  const [selectedDate, setSelectedDate] = useState("2025-01-01");
  const [peopleCount, setPeopleCount] = useState(1);
  const [selectedCity, setSelectedCity] = useState<keyof typeof cityData>("서울특별시");
  const [selectedDistrict, setSelectedDistrict] = useState("강남구");
  const [selectedDong, setSelectedDong] = useState("역삼동"); // Default 동

  const navigate = useNavigate();

  // 날짜 변경 처리 함수
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  // 사람 수 변경 처리 함수
  const handlePeopleCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPeopleCount(Number(event.target.value));
  };

  // 도시 변경 처리 함수
  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newCity = event.target.value as keyof typeof cityData;
    setSelectedCity(newCity);

    // 첫 번째 구 선택
    const firstDistrict = Object.keys(cityDataTyped[newCity])[0];
    setSelectedDistrict(firstDistrict);

    // 첫 번째 동을 선택 (동이 있을 경우)
    const firstDong = Object.keys(cityDataTyped[newCity][firstDistrict])[0];
    setSelectedDong(firstDong);
  };

  // 구 변경 처리 함수
  const handleDistrictChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newDistrict = event.target.value;
    setSelectedDistrict(newDistrict);

    // 동을 선택 (동이 있을 경우)
    const firstDong = Object.keys(cityDataTyped[selectedCity][newDistrict])[0];
    setSelectedDong(firstDong);
  };

  // 동 변경 처리 함수
  const handleDongChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDong(event.target.value);
  };

  // 선택한 지역의 위도, 경도 및 추가 정보를 서버로 전송
  const sendLocationData = async () => {
    const selectedLocation = cityDataTyped[selectedCity][selectedDistrict][selectedDong];
    if (!selectedLocation) {
      alert("선택한 지역의 정보가 없습니다.");
      return;
    }

    const { latitude, longitude } = selectedLocation;

    // 서버로 전송할 데이터 준비
    const dataToSend = {
      latitude,
      longitude,
      date: selectedDate,
      peopleCount,
    };

    // 위도와 경도 값 콘솔에 출력 (즉시 확인 가능)
    console.log(`선택한 지역: ${selectedCity} > ${selectedDistrict} > ${selectedDong}`);
    console.log(`위도: ${latitude}, 경도: ${longitude}`);
    console.log(`날짜: ${selectedDate}, 사람 수: ${peopleCount}`);

    try {
      // axios 대신 fetch로 요청 보내기
      const response = await fetch("/api/send-location", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("서버 응답:", data);
      } else {
        console.error("서버 요청 실패");
      }
    } catch (error) {
      console.error("서버에 데이터 전송 실패:", error);
    }
  };

  // 홈 버튼 클릭
  const homeClick = () => {
    navigate("/LoginHome");
  };

  // 좋아요 버튼 클릭
  const likeClick = () => {
    navigate("/Likes");
  };

  // 마이페이지 버튼 클릭
  const myClick = () => {
    navigate("/MyPage");
  };

  // 코스 제작 버튼 클릭
  const createClick = () => {
    alert("이미 코스제작에 계십니다!");
  };

  // '다음' 버튼 클릭
  const nextClick = () => {
    sendLocationData(); // 위도와 경도를 서버에 전송
    navigate("/CourseResult");
  };

  const progressPercentage = 20; // 진행도를 항상 20%로 설정
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.headerTop}>누구와 만나시나요?</div>
        <div className={style.headerBottom}>해당 정보를 모두 선택해주세요.</div>
        <div className={style.progressBar}>
          {" "}
          <div className={style.innerProgress} style={{ width: `${progressPercentage}%` }} />
        </div>
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

          {/* 지역 선택 (특별시/광역시) -> 구 -> 동 */}
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
              {Object.keys(cityDataTyped[selectedCity]).map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
            <select value={selectedDong} onChange={handleDongChange}>
              {Object.keys(cityDataTyped[selectedCity][selectedDistrict]).map((dong) => (
                <option key={dong} value={dong}>
                  {dong}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* '다음' 버튼 대신 mainBottom div 클릭 시 위도, 경도 서버로 전송 */}
        <div className={style.mainBottom} onClick={nextClick}>
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

export default CreateCourse;

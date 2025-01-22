import style from "../../less/캘린더/Calender.module.less";
import { MdOutlineAddBox } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";
import { FiHome } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { BsCaretLeftFill } from "react-icons/bs";
import { BsCaretRightFill } from "react-icons/bs";
import { useState } from "react";

function Calender() {
  const [currentDate, setCurrentDate] = useState(new Date()); // 현재 날짜 상태

  const months = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // 현재 달의 첫 날을 가져오는 함수
  const getFirstDayOfMonth = () => {
    return new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  };

  // 해당 월의 날짜를 배열로 반환하는 함수
  const getDaysInMonth = () => {
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDay = getFirstDayOfMonth();

    // 이전 달의 마지막 날짜 가져오기
    const prevMonthLastDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();

    // 빈 칸을 채우기 위한 배열 생성
    const daysArray = [];
    for (let i = firstDay; i > 0; i--) {
      daysArray.push({ day: prevMonthLastDay - i + 1, isCurrentMonth: false }); // 이전 달의 날짜
    }
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push({ day: i, isCurrentMonth: true }); // 현재 달의 날짜
    }

    // 다음 달의 날짜 추가
    const nextMonthDaysToFill = 7 - (daysArray.length % 7);
    for (let i = 1; i <= nextMonthDaysToFill && daysArray.length < 42; i++) {
      daysArray.push({ day: i, isCurrentMonth: false }); // 다음 달의 날짜
    }

    // 6x7 배열로 만들기 위해 7개씩 끊어서 반환
    const rows = [];
    for (let i = 0; i < daysArray.length; i += 7) {
      rows.push(daysArray.slice(i, i + 7));
    }
    return rows;
  };

  // 월을 변경하는 함수
  const changeMonth = (direction: number) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const navigate = useNavigate();

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
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.headerLeft}>캘린더</div>
        <div className={style.headerRight}></div>
      </div>
      <div className={style.main}>
        <div className={style.mainTop}>
          <div className={style.topLeft} onClick={() => changeMonth(-1)}>
            <BsCaretLeftFill className={style.icon} />
          </div>
          <div className={style.topCenter}>
            {months[currentDate.getMonth()]} {currentDate.getFullYear()}
          </div>
          <div className={style.topRight} onClick={() => changeMonth(1)}>
            <BsCaretRightFill className={style.icon} />
          </div>
        </div>
        <div className={style.mainBottom}>
          <div className={style.calendarGrid}>
            <div className={style.weekdays}>
              {daysOfWeek.map((day, index) => (
                <div key={index} className={style.weekday}>
                  {day}
                </div>
              ))}
            </div>
            <div className={style.days}>
              {getDaysInMonth().map((week, weekIndex) => (
                <div key={weekIndex} className={style.week}>
                  {week.map((dayObj, dayIndex) => (
                    <div key={dayIndex} className={`${style.day} ${dayObj.isCurrentMonth ? "" : style.inactive}`}>
                      {dayObj.day || ""}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
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

export default Calender;

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import style from "../../less/회원가입/SignUp.module.less";
import { IoChevronBack } from "react-icons/io5";

function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthOfDate, setBirthOfDate] = useState("");
  const [identity, setIdentity] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [idAvailability, setIdAvailability] = useState(""); // 아이디 중복 확인 상태

  // 뒤로 가기 버튼 클릭 시
  const backClick = () => {
    navigate("/Login");
  };

  // 아이디 중복 체크 함수 (실시간)
  const checkIdAvailability = async (id) => {
    if (!id) {
      setIdAvailability(""); // 아이디가 없으면 상태 초기화
      return;
    }

    try {
      const response = await axios.get(`http://www.junwatson.site:8080/api/auth/check-id?loginId=${id}`);

      if (response.status === 200 && response.data.available) {
        setIdAvailability("아이디 사용 가능");
      } else {
        setIdAvailability("이미 사용 중인 아이디입니다.");
      }
    } catch (error) {
      console.error("아이디 중복 체크 실패", error);
      setIdAvailability("아이디 중복 체크 실패");
    }
  };

  // 회원가입 클릭 시
  const signUpClick = async () => {
    // 아이디 중복 체크
    if (idAvailability !== "아이디 사용 가능") {
      setErrorMessage("아이디 중복 확인을 해주세요.");
      return;
    }

    try {
      const response = await axios.post("http://www.junwatson.site:8080/api/auth/signup", {
        name,
        loginId,
        password,
        email,
        phoneNumber,
        birthOfDate,
        identity,
      });

      if (response.status === 200) {
        console.log("회원가입 성공", response.data);
        navigate("/Login");
      } else {
        console.error("회원가입 실패", response.status);
      }
    } catch (error) {
      console.error("회원가입 중 오류 발생", error);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.headLeft}>
          <IoChevronBack className={style.button} onClick={backClick} />
        </div>
        <div className={style.headRight}>회원가입</div>
      </div>
      <div className={style.main}>
        <div className={style.signUpList}>
          <div className={style.inputGroup}>
            <input
              type="text"
              placeholder="아이디"
              id="id"
              value={loginId}
              onChange={(e) => {
                setLoginId(e.target.value);
                checkIdAvailability(e.target.value); // 아이디 변경 시 실시간 체크
              }}
            />
            <div className={style.idCheckMessage}>
              {idAvailability && (
                <span className={idAvailability === "아이디 사용 가능" ? style.success : style.error}>
                  {idAvailability}
                </span>
              )}
            </div>
          </div>

          <input
            type="password"
            placeholder="비밀번호"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="text" placeholder="이름" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          <input
            type="text"
            placeholder="전화번호"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            type="date"
            placeholder="생년월일"
            id="birth"
            value={birthOfDate}
            onChange={(e) => setBirthOfDate(e.target.value)}
          />
          <input
            type="email"
            placeholder="이메일"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="신분"
            id="position"
            value={identity}
            onChange={(e) => setIdentity(e.target.value)}
          />
        </div>

        {/* 오류 메시지 표시 */}
        {errorMessage && <div className={style.errorMessage}>{errorMessage}</div>}

        <div className={style.signUp} onClick={signUpClick}>
          회원가입
        </div>
      </div>
    </div>
  );
}

export default SignUp;

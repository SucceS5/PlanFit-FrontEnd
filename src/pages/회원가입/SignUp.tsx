import style from "../../less/회원가입/SignUp.module.less";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthOfDate, setBirthOfDate] = useState("");
  const [identity, setIdentity] = useState("");

  // 뒤로 가기 버튼 클릭 시
  const backClick = () => {
    navigate("/Login");
  };

  // 회원가입 클릭 시
  const signUpClick = async () => {
    try {
      // API 호출
      const response = await axios.post(
        "http://www.junwatson.site:8080/api/auth/signup",
        {
          name, // 사용자명
          loginId, // 로그인 아이디
          password, // 비밀번호
          email, // 이메일
          phoneNumber, // 전화번호 (선택)
          birthOfDate, // 생년월일 (선택)
          identity, // 신분 (선택)
          // profilePhoto,  // 프로필 사진 (선택 사항)
          // photoType      // 프로필 사진의 타입 (선택 사항)
        },
        {
          headers: {
            "Content-Type": "application/json;charset=utf-8", // Content-Type 헤더 설정
            // "Authorization": `Bearer ${accessToken}`,  // 필요한 경우 Authorization 헤더 추가 (로그인 후 발급된 토큰)
          },
        }
      );

      if (response.status === 200) {
        console.log("회원가입 성공", response.data);
        navigate("/Login");
      } else {
        console.error("회원가입 실패", response.status);
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        // AxiosError 타입으로 안전하게 처리
        console.error("회원가입 중 오류 발생", error.response || error);
      } else {
        // AxiosError가 아닌 다른 타입의 에러인 경우 처리
        console.error("알 수 없는 오류 발생", error);
      }
    }
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.headLeft}>
          <IoChevronBack className={style.button} onClick={backClick} />
        </div>
        <div className={style.headRight}>로그인/회원가입</div>
      </div>
      <div className={style.main}>
        <div className={style.signUpList}>
          <input
            type="text"
            placeholder="아이디"
            id="id"
            value={loginId}
            onChange={(e) => setLoginId(e.target.value)}
          />
          <input
            type="password"
            placeholder="비밀번호"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="text" placeholder="회원명" id="name" value={name} onChange={(e) => setName(e.target.value)} />
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
        <div className={style.signUp} onClick={signUpClick}>
          회원가입
        </div>
      </div>
    </div>
  );
}

export default SignUp;

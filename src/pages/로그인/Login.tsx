import style from "../../less/로그인/Login.module.less";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { RiKakaoTalkFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");

  const backClick = () => {
    navigate("/Home");
  };

  const signUpClick = () => {
    navigate("/SignUp");
  };

  const loginClick = async () => {
    try {
      const response = await axios.post("http://www.junwatson.site:8080/api/auth/login", {
        loginId,
        password,
      });

      if (response.status === 200) {
        // 로그인 성공 시 토큰을 로컬 스토리지에 저장
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);

        // 로그인 성공 시 홈 화면으로 리다이렉트
        navigate("/LoginHome");
      }
    } catch (error) {
      console.error("로그인 실패", error);
    }
  };

  const kakaoLoginClick = () => {
    const kakaoLoginUrl = `https://kauth.kakao.com/oauth/authorize?client_id=0e3707b926e733cdc0fd2f4acfe48ed6&redirect_uri=http://localhost:5173/auth/kakao/callback&response_type=code`;
    window.location.href = kakaoLoginUrl;
  };

  const googleLoginClick = () => {
    const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=787800351821-mv8eaog9fn9pl0io49mr1q5e479hr53c.apps.googleusercontent.com&redirect_uri=http://localhost:5173/auth/google/callback&response_type=code&scope=profile email`;
    window.location.href = googleLoginUrl;
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
        <div className={style.joinbox}>
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
        </div>
        <p onClick={loginClick}>로그인</p>
        <div className={style.findInfo}>계정찾기</div>
        <div className={style.otherLogin}>
          <p className={style.kakao} onClick={kakaoLoginClick}>
            <RiKakaoTalkFill className={style.logo} />
            카카오 로그인
          </p>
          <p className={style.google} onClick={googleLoginClick}>
            <FcGoogle className={style.logo} />
            구글 로그인
          </p>
          <p className={style.signUp} onClick={signUpClick}>
            회원가입
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;

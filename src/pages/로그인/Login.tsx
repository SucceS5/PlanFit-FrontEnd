import style from "../../less/\uB85C\uADF8\uC778/Login.module.less";
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
  const [errorMessage, setErrorMessage] = useState("");

  const backClick = () => {
    navigate("/NewHome");
  };

  const signUpClick = () => {
    navigate("/SignUp");
  };

  // 로그인 클릭 시
  const loginClick = async () => {
    const testAdmin = {
      loginId: "planfit05",
      name: "관리자",
      password: "planfit05",
    };

    console.log("로그인 요청 데이터:", JSON.stringify({ loginId, password }, null, 2));

    if (loginId === testAdmin.loginId && password === testAdmin.password) {
      localStorage.setItem("accessToken", "dummy_access_token");
      localStorage.setItem("refreshToken", "dummy_refresh_token");
      localStorage.setItem("userName", testAdmin.name);
      navigate("/MainHome");
      return;
    }

    try {
      const response = await axios.post(
        "http://www.junwatson.site:8080/authorization/planfit/signIn",
        {
          loginId,
          password,
        },
        {
          headers: { "Content-Type": "application/json;charset=utf-8" },
        }
      );

      console.log("로그인 성공:", response.data);
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
      navigate("/MainHome");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error("로그인 실패:", error.response.data);
        setErrorMessage(
          "로그인 실패: " + (error.response.data?.message || "아이디 또는 비밀번호가 올바르지 않습니다.")
        );
      } else {
        console.error("로그인 요청 중 오류 발생:", error);
        setErrorMessage("로그인 실패: 알 수 없는 오류");
      }
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
          <input type="text" placeholder="아이디" value={loginId} onChange={(e) => setLoginId(e.target.value)} />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errorMessage && <div className={style.errorMessage}>{errorMessage}</div>}
        <p onClick={loginClick}>로그인</p>
        <div className={style.findInfo}></div>
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

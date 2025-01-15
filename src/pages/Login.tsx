import style from "../less/Login.module.less";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { RiKakaoTalkFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
function Login() {
  const navigate = useNavigate();

  const backClick = () => {
    navigate("/Home");
  };

  const signUpClick = () => {
    navigate("/SignUp");
  };

  const loginClick = () => {
    navigate("/LoginHome");
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
          <input type="text" placeholder="아이디" id="id" />
          <input type="text" placeholder="비밀번호" id="password" />
        </div>
        <p onClick={loginClick}>로그인</p>
        <div className={style.findInfo}>계정찾기</div>
        <div className={style.otherLogin}>
          <p className={style.kakao}>
            <RiKakaoTalkFill className={style.logo} />
            카카오 로그인
          </p>
          <p className={style.google}>
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

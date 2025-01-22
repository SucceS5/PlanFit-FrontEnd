import style from "../../less/회원가입/SignUp.module.less";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const backClick = () => {
    navigate("/Login");
  };

  const signUpClick = () => {
    navigate("/Home");
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
          <input type="text" placeholder="아이디" id="id" />
          <input type="text" placeholder="비밀번호" id="password" />
          <input type="text" placeholder="회원명" id="name" />
          <input type="text" placeholder="전화번호" id="phoneNumber" />
          <input type="text" placeholder="생년월일" id="birth" />
          <input type="text" placeholder="이메일" id="email" />
          <input type="text" placeholder="신분" id="position" />
        </div>
        <div className={style.signUp} onClick={signUpClick}>
          회원가입
        </div>
      </div>
    </div>
  );
}

export default SignUp;

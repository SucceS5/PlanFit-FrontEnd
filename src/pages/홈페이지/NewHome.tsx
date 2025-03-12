import style from "../../less/홈페이지/NewHome.module.less";
import { useNavigate } from "react-router-dom";
function NewHome() {
  const navigate = useNavigate();

  const loginClick = () => {
    navigate("/Login");
  };
  const signUpClick = () => {
    navigate("/Signup");
  };
  return (
    <div className={style.container}>
      <div className={style.header}>PlanFit</div>
      <div className={style.main}>
        <div className={style.sentence1}>혹시, 어디서 놀지 고민중이니?</div>
        <div className={style.sentence2}>센스 만점인 사람이 되고 싶니?</div>
        <div className={style.sentence3}>보기 쉽게 계획을 짜고 싶다고?</div>
      </div>
      <div className={style.footer}>
        <div className={style.planFit}>
          <div className={style.Plan}>플랜</div>
          <div className={style.Fit}>FIT</div>
        </div>
        <div className={style.login}>
          <div className={style.button} onClick={loginClick}>
            로그인
          </div>
          <div className={style.signUp} onClick={signUpClick}>
            아직, 회원이 아니신가요?
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewHome;

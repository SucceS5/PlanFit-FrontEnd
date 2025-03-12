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
  const [profilePhoto, setProfilePhoto] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [photoType, setPhotoType] = useState("ENCODED_BINARY");
  const [errorMessage, setErrorMessage] = useState("");
  const [idAvailability, setIdAvailability] = useState("");
  const [idCheckStatus, setIdCheckStatus] = useState(""); // 상태 추가 (success, error, default)

  const backClick = () => navigate("/Login");

  const checkIdAvailability = async (id: string) => {
    if (!id) {
      setIdAvailability("");
      setIdCheckStatus("");
      return;
    }
    try {
      const response = await axios.get(`http://www.junwatson.site:8080/authorization/duplication/${id}`);
      if (response.status === 200) {
        setIdAvailability("아이디 사용 가능");
        setIdCheckStatus("success"); // 파란색 표시
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 409) {
          // 중복일 경우
          setIdAvailability("아이디 사용 불가");
          setIdCheckStatus("error"); // 빨간색 표시
        } else {
          setIdAvailability("아이디 중복 체크 실패");
          setIdCheckStatus("default"); // 검은색 표시
        }
      } else {
        setIdAvailability("아이디 중복 체크 실패");
        setIdCheckStatus("default"); // 검은색 표시
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        setProfilePhoto(reader.result.split(",")[1]);
      }
    };
    reader.readAsDataURL(file);
  };

  const signUpClick = async () => {
    console.log(typeof birthOfDate, birthOfDate);
    console.log("회원가입 요청 데이터:", {
      name,
      loginId,
      password,
      email,
      phoneNumber,
      birthOfDate,
      identity,
      profilePhoto: profilePhoto || undefined,
      photoType: profilePhoto ? photoType : undefined,
    });
    try {
      const response = await axios.post(
        "http://www.junwatson.site:8080/authorization/planfit",
        {
          name,
          loginId,
          password,
          email,
          phoneNumber,
          birthOfDate,
          identity,
          profilePhoto: profilePhoto || undefined,
          photoType: profilePhoto ? photoType : undefined,
        },
        {
          headers: { "Content-Type": "application/json;charset=utf-8" },
        }
      );

      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
      navigate("/Login");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrorMessage("회원가입 실패: " + (error.response?.data?.message || "알 수 없는 오류"));
      } else {
        setErrorMessage("회원가입 실패: 알 수 없는 오류");
      }
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
          <input
            type="text"
            placeholder="아이디"
            value={loginId}
            onChange={(e) => {
              setLoginId(e.target.value);
              checkIdAvailability(e.target.value);
            }}
          />
          <div className={style.idCheckMessage}>
            {idAvailability && (
              <span
                className={
                  idCheckStatus === "success" ? style.success : idCheckStatus === "error" ? style.error : style.default
                }
              >
                {idAvailability}
              </span>
            )}
          </div>
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="text" placeholder="이름" value={name} onChange={(e) => setName(e.target.value)} />
          <input
            type="text"
            placeholder="전화번호"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input type="date" value={birthOfDate} onChange={(e) => setBirthOfDate(e.target.value)} />
          <input type="email" placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder="신분" value={identity} onChange={(e) => setIdentity(e.target.value)} />
          <input type="file" className={style.file} accept="image/*" onChange={handleFileChange} />
        </div>
        {errorMessage && <div className={style.errorMessage}>{errorMessage}</div>}
        <div className={style.signUp} onClick={signUpClick}>
          회원가입
        </div>
      </div>
    </div>
  );
}

export default SignUp;

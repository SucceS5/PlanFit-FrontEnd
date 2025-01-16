import style from "../less/EditPage.module.less";
import { useParams } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";
import { FiHome } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";

function EditPage() {
  const { field } = useParams(); // URL에서 field 파라미터를 가져옴

  const navigate = useNavigate();

  const backClick = () => {
    navigate("/MyPage");
  };

  const homeClick = () => {
    navigate("/LoginHome");
  };

  const myClick = () => {
    navigate("/MyPage");
  };

  const likeClick = () => {
    navigate("/Likes");
  };
  const renderEditForm = () => {
    switch (field) {
      case "id":
        return (
          <div className={style.editForm}>
            <div className={style.editHead}>
              <input type="text" placeholder="아이디" id="id" />
            </div>
            <div className={style.editBottom}>수정하기</div>
          </div>
        );
      case "password":
        return (
          <div className={style.editForm}>
            <div className={style.editHead}>
              <input type="text" placeholder="비밀번호" id="password" />
            </div>
            <div className={style.editBottom}>수정하기</div>
          </div>
        );
      case "profile":
        return (
          <div className={style.editForm}>
            <div className={style.editHead}>
              <input type="text" placeholder="프로필 사진" id="profile" />
            </div>
            <div className={style.editBottom}>수정하기</div>
          </div>
        );
      case "name":
        return (
          <div className={style.editForm}>
            <div className={style.editHead}>
              <input type="text" placeholder="이름" id="name" />
            </div>
            <div className={style.editBottom}>수정하기</div>
          </div>
        );
      case "birth":
        return (
          <div className={style.editForm}>
            <div className={style.editHead}>
              <input type="text" placeholder="생년월일" id="birth" />
            </div>
            <div className={style.editBottom}>수정하기</div>
          </div>
        );
      case "phone":
        return (
          <div className={style.editForm}>
            <div className={style.editHead}>
              <input type="text" placeholder="전화번호" id="phone" />
            </div>
            <div className={style.editBottom}>수정하기</div>
          </div>
        );
      case "email":
        return (
          <div className={style.editForm}>
            <div className={style.editHead}>
              <input type="text" placeholder="아메일" id="email" />
            </div>
            <div className={style.editBottom}>수정하기</div>
          </div>
        );
      case "position":
        return (
          <div className={style.editForm}>
            <div className={style.editHead}>
              <input type="text" placeholder="신분" id="position" />
            </div>
            <div className={style.editBottom}>수정하기</div>
          </div>
        );
      default:
        return <div>잘못된 요청입니다.</div>;
    }
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.headLeft}>
          <IoChevronBack className={style.button} onClick={backClick} />
        </div>
        <div className={style.headRight}>내 계정관리</div>
      </div>
      <div className={style.main}>
        <div className={style.mainHead}>{field} 수정</div>
        <div className={style.mainBody}>{renderEditForm()}</div>
      </div>
      <div className={style.footer}>
        {" "}
        <div>
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

export default EditPage;

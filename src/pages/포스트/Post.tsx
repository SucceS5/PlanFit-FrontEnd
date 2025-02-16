import { useState } from "react";
import { useNavigate } from "react-router-dom";
import cities from "../../data/cities.json";
import styles from "../../less/포스트/Post.module.less";    
import { MdOutlineAddBox } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";
import { FiHome } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";

const regions = Object.keys(cities); // 시/도 선택 가능하도록 설정

const posts = [
  { id: 1, title: "친구들과 가기 너무 좋은 코스^^", location: "서울특별시 강남구", date: "2025-01-02" },
  { id: 2, title: "데이트하기 좋은 코스", location: "인천광역시 계양구", date: "2025-01-05" },
  { id: 3, title: "가족과 함께 즐길 수 있는 코스", location: "부산광역시 강서구", date: "2025-01-10" },
];

function PostList() {
  const [selectedRegion, setSelectedRegion] = useState("전체");
  const navigate = useNavigate();

  const filteredPosts =
    selectedRegion === "전체"
      ? posts
      : posts.filter((post) => post.location.startsWith(selectedRegion));

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>다른 사람들의 코스 보기</h2>

      <select
        className={styles.dropdown}
        value={selectedRegion}
        onChange={(e) => setSelectedRegion(e.target.value)}
      >
        <option value="전체">전체 지역</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>

      <ul className={styles.postList}>
        {filteredPosts.map((post) => (
          <li
            key={post.id}
            className={styles.postItem}
            onClick={() => navigate(`/posts/${post.id}`)}
          >
            <div>
              <p>{post.title}</p>
              <span>
                {post.date} / {post.location}
              </span>
            </div>
            <button className={styles.arrow}>➡️</button>
          </li>
        ))}
      </ul>

      <div className={styles.footer}>
        <div onClick={() => navigate("/CreateCourse")}>
          <MdOutlineAddBox className={styles.button} />
          코스 제작
        </div>
        <div>
          <RiBillLine className={styles.button} />
          포스트
        </div>
        <div onClick={() => navigate("/LoginHome")}>
          <FiHome className={styles.button} />
          홈
        </div>
        <div onClick={() => navigate("/Likes")}>
          <FaRegHeart className={styles.button} />
          좋아요
        </div>
        <div onClick={() => navigate("/Mypage")}>
          <RiAccountCircleLine className={styles.button} />
          마이페이지
        </div>
      </div>
    </div>
  );
}

export default PostList;

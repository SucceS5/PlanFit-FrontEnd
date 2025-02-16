import { useParams } from "react-router-dom";
import styles from "../../less/포스트/PostDetail.module.less"; 

const postDetails: Record<string, { time: string; place: string }[]> = {
  "1": [
    { time: "14:00 - 15:00", place: "롯데타워" },
    { time: "15:30 - 16:00", place: "샤넬 도산점" },
    { time: "16:30 - 18:00", place: "코엑스 아쿠아리움" },
    { time: "18:30 - 19:30", place: "목포항구 해물식당" },
  ],
};

function PostDetail() {
  const { id } = useParams();
  const details = postDetails[id ?? ""] || [];

  return (
    <div className="post-detail-container">
      <h2>상세 코스 보기</h2>
      <ul className="detail-list">
        {details.map((detail, index) => (
          <li key={index} className="detail-item">
            <span className="detail-time">{detail.time}</span>
            <span className="detail-place">{detail.place}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostDetail;
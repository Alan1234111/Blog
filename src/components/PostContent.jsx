import { StyledTag } from "./styles/Tag.styled";
import { StyledPostContent } from "./styles/PostContent.styled";
import dayjs from "dayjs";

export default function PostContent(props) {
  const date = dayjs(props.createdAt);
  const formattedDate = date.format("DD/MM/YYYY");

  return (
    <StyledPostContent>
      <StyledTag className="tag">{props.postData.tag.name}</StyledTag>
      <h2>{props.postData.title}</h2>
      <div className="wrapper">
        <p className="date">{formattedDate}</p>
        <span>|</span>
        <p className="author">by {props.postData.author}</p>
      </div>
      <img
        src={`http://localhost:3000/${props.postData.photoUrl}`}
        alt=""
      />
      <article
        dangerouslySetInnerHTML={{ __html: props.postData.text }}
      />
    </StyledPostContent>
  );
}

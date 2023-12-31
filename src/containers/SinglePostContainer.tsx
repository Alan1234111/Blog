import { StyledTag } from "../styles/utils/Tag.styled";
import { StyledPostContent } from "../styles/singlePost/PostContent.styled";
import { getFormattedDate } from "../services/getFormattedDate";
import { Post } from "../types/index";

type PropsSinglePostComments = {
  postData: Post;
};

export default function SinglePostContainer(
  props: PropsSinglePostComments
) {
  const date = getFormattedDate(props.postData.createdAt);

  return (
    <StyledPostContent>
      <StyledTag className="tag">{props.postData.tag.name}</StyledTag>
      <h2>{props.postData.title}</h2>
      <div className="wrapper">
        <p className="date">{date}</p>
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

// Display Post Conttent on singele post

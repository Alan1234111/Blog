import { Link } from "react-router-dom";
import { StyledTag } from "../styles/utils/Tag.styled";
import { createMarkup } from "../services/createMarkup";
import { StyledHomeMainPostsContainer } from "../styles/homePage/HomeMainPostsContainer.styled";

export default function HomeMainPostsContainer(props) {
  return (
    <StyledHomeMainPostsContainer
      as={Link}
      to={`/posts/${props.id}`}
      className="post"
    >
      <div className="post-info">
        <h2>{props.title}</h2>
        <div dangerouslySetInnerHTML={createMarkup(props.text)} />
      </div>
      <div className="post-display">
        <StyledTag as={Link} to={`tags/${props.tagId}`}>
          {props.tagName}
        </StyledTag>
        <img src={`http://localhost:3000/${props.photoUrl}`} alt="" />
      </div>
    </StyledHomeMainPostsContainer>
  );
}

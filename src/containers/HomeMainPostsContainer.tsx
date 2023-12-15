import { Link } from "react-router-dom";
import { StyledTag } from "../styles/utils/Tag.styled";
import { createMarkup } from "../services/createMarkup";
import { StyledHomeMainPostsContainer } from "../styles/homePage/HomeMainPostsContainer.styled";
import { PropsAsidePost } from "../types";

//Other styling

export default function HomeMainPostsContainer(
  props: PropsAsidePost
) {
  return (
    <StyledHomeMainPostsContainer
      as={Link}
      to={`/posts/${props._id}`}
      className="post"
    >
      <div className="post-info">
        <h2>{props.title}</h2>
        <div dangerouslySetInnerHTML={createMarkup(props.text)} />
      </div>
      <div className="post-display">
        <StyledTag as={Link} to={`tags/${props.tag._id}`}>
          {props.tag.name}
        </StyledTag>
        <img src={`http://localhost:3000/${props.photoUrl}`} alt="" />
      </div>
    </StyledHomeMainPostsContainer>
  );
}

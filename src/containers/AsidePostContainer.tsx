import { Link } from "react-router-dom";
import { StyledTag } from "../styles/utils/Tag.styled";
import { createMarkup } from "../services/createMarkup";
import { PropsAsidePost } from "../types";
import { StyledAsidePostContainer } from "../styles/AsidePostContainer.styled";

export default function AsidePostContainer(props: PropsAsidePost) {
  return (
    <StyledAsidePostContainer
      as={Link}
      className="post"
      to={`/posts/${props._id}`}
      $bg={props.$bg}
    >
      <img src={`http://localhost:3000/${props.photoUrl}`} alt="" />
      <div className="post-information">
        <h3>{props.title}</h3>
        <p dangerouslySetInnerHTML={createMarkup(props.text)} />

        <StyledTag as={Link} to={`tags/${props.tag._id}`}>
          {props.tag.name}
        </StyledTag>
      </div>
    </StyledAsidePostContainer>
  );
}

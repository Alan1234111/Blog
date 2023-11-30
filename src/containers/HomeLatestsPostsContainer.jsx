import { HomeLatestsPosts } from "../styles/homePage/HomeLatestsPosts.styled.";
import { StyledTag } from "../styles/utils/Tag.styled";
import { createMarkup } from "../services/createMarkup";
import { Link } from "react-router-dom";

export default function HomeLatestsPostsContainer(props) {
  return (
    <HomeLatestsPosts as={Link} to={`posts/${props.id}`}>
      <img src={`http://localhost:3000/${props.photoUrl}`} alt="" />
      <div className="post-information">
        <h2>{props.title}</h2>
        <p dangerouslySetInnerHTML={createMarkup(props.text)} />
        <StyledTag as={Link} to={`tags/${props.tagId}`}>
          {props.tagName}
        </StyledTag>
      </div>
    </HomeLatestsPosts>
  );
}

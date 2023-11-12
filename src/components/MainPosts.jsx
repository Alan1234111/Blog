import {Link} from "react-router-dom";
import {StyledMainPosts} from "./styles/MainPosts.styled";
import {StyledTag} from "./styles/Tag.styled";
import {StyledMainPostContainer} from "./styles/MainPostContainer.styled";

export default function MainPosts(props) {
  return (
    <StyledMainPosts>
      {props.postData.slice(0, 5).map((post, i) => (
        <StyledMainPostContainer as={Link} to={`/posts/${post._id}`} key={i} className="post">
          <div className="post-info">
            <h2>{post.title}</h2>
            <p>{post.text}</p>
          </div>
          <div className="post-display">
            <StyledTag as={Link} to={`tags/${post.tag._id}`}>
              {post.tag.name}
            </StyledTag>
            <img src={`http://localhost:3000/${post.photoUrl}`} alt="" />
          </div>
        </StyledMainPostContainer>
      ))}
    </StyledMainPosts>
  );
}

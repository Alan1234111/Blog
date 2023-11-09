import { Link } from "react-router-dom";
import { StyledMainPosts } from "./styles/MainPosts.styled";
import { StyledTag } from "./styles/Tag.styled";
import { StyledMainPostContainer } from "./styles/MainPostContainer.styled";

export default function MainPosts(props) {
  return (
    <StyledMainPosts>
      {props.postData.posts.slice(0, 5).map((post, i) => (
        <StyledMainPostContainer
          as={Link}
          to={`/posts/${post._id}`}
          key={i}
          className="post"
        >
          <div className="post-info">
            <h2>{post.title}</h2>
            <p>{post.text}</p>
          </div>
          <div className="post-display">
            <StyledTag as={Link} to={post.tag}>
              {post.tag}
            </StyledTag>
            <img
              src={`http://localhost:3000/${post.photoUrl}`}
              alt=""
            />
          </div>
        </StyledMainPostContainer>
      ))}
    </StyledMainPosts>
  );
}

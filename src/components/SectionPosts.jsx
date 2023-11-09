import { StyledPostsContainer } from "./styles/SectionPostContainer.styled";
import { StyledTag } from "./styles/Tag.styled";
import { Link } from "react-router-dom";

export default function SectionPosts(props) {
  return (
    <section>
      {props.postData.posts.slice(0, 6).map((post, i) => {
        return (
          <StyledPostsContainer
            key={i}
            as={Link}
            to={`posts/${post._id}`}
          >
            <img
              src={`http://localhost:3000/${post.photoUrl}`}
              alt=""
            />
            <div className="post-information">
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <StyledTag as={Link}>{post.tag}</StyledTag>
            </div>
          </StyledPostsContainer>
        );
      })}
    </section>
  );
}

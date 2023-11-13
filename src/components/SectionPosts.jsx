import { StyledPostsContainer } from "./styles/SectionPostContainer.styled";
import { StyledTag } from "./styles/Tag.styled";
import { Link } from "react-router-dom";

export default function SectionPosts(props) {
  function createMarkup(content) {
    const plainText = content.replace(/<[^>]*>/g, "");
    const first35Words = plainText.split(" ").slice(0, 35).join(" ");

    return {
      __html: first35Words + "...",
    };
  }

  return (
    <section>
      {props.postData.slice(0, 6).map((post, i) => {
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
              <p dangerouslySetInnerHTML={createMarkup(post.text)} />
              {/* <div
                dangerouslySetInnerHTML={{
                  __html: post.content,
                }}
              ></div> */}
              <StyledTag as={Link} to={`tags/${post.tag._id}`}>
                {post.tag.name}
              </StyledTag>
            </div>
          </StyledPostsContainer>
        );
      })}
    </section>
  );
}

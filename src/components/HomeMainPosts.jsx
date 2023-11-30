import { StyledHomeMainPosts } from "../styles/homePage/HomeMainPosts.styled";
import HomeMainPostsContainer from "../containers/HomeMainPostsContainer";

export default function HomeMainPosts(props) {
  return (
    <StyledHomeMainPosts>
      {props.postsData.map((post, index) => (
        <HomeMainPostsContainer
          key={index}
          id={post._id}
          title={post.title}
          text={post.text}
          tagId={post.tag._id}
          tagName={post.tag.name}
          photoUrl={post.photoUrl}
        />
      ))}
    </StyledHomeMainPosts>
  );
}

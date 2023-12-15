import { StyledHomeMainPosts } from "../styles/homePage/HomeMainPosts.styled";
import HomeMainPostsContainer from "../containers/HomeMainPostsContainer";
import { Post } from "../types";

type PropsHomeMainPosts = {
  postsData: Post[];
};

export default function HomeMainPosts(props: PropsHomeMainPosts) {
  return (
    <StyledHomeMainPosts>
      {props.postsData.map((post, index) => (
        <HomeMainPostsContainer
          key={index}
          _id={post._id}
          title={post.title}
          text={post.text}
          photoUrl={post.photoUrl}
          tag={post.tag}
          $bg={false}
        />
      ))}
    </StyledHomeMainPosts>
  );
}

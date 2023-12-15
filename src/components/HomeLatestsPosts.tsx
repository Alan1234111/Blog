import AsidePostContainer from "../containers/AsidePostContainer";
import { Link } from "react-router-dom";
import { StyledHomeLatestsPosts } from "../styles/homePage/HomeLatestsPosts.styled";
import { StyledButton } from "../styles/utils/Button.styled";
import { Post } from "../types/index";

type PropsHomeLatestsPosts = {
  latestsPosts: Post[];
};

export default function HomeLatestsPosts(
  props: PropsHomeLatestsPosts
) {
  return (
    <StyledHomeLatestsPosts>
      {props.latestsPosts.map((post, index) => (
        <AsidePostContainer
          key={index}
          _id={post._id}
          photoUrl={post.photoUrl}
          title={post.title}
          text={post.text}
          tag={post.tag}
          $bg={true}
        />
      ))}
      <div className="more">
        <StyledButton as={Link} to={"/posts"}>
          See More
        </StyledButton>
      </div>
    </StyledHomeLatestsPosts>
  );
}

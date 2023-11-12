import {StyledTagSection} from "./styles/TagSection.styled";
import {StyledTag} from "./styles/Tag.styled";
import {Link} from "react-router-dom";

export default function TagsSection(props) {
  return (
    <StyledTagSection>
      <h2>FEATURED TAGS</h2>
      <div>
        {props.tagsData.slice(0, 5).map((tag, i) => (
          <StyledTag key={i} as={Link} to={`/tags/${tag._id}`} $bg>
            #{tag.name}
          </StyledTag>
        ))}
      </div>
    </StyledTagSection>
  );
}

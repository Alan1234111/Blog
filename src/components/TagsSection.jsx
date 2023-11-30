import { StyledTagSection } from "../styles/utils/TagSection.styled";
import TagsSectionContainer from "../containers/TagsSectionContainer";

export default function TagsSection(props) {
  return (
    <StyledTagSection>
      <h2>FEATURED TAGS</h2>
      <div>
        {props.randomTags.map((tag, index) => (
          <TagsSectionContainer
            key={index}
            id={tag._id}
            name={tag.name}
          />
        ))}
      </div>
    </StyledTagSection>
  );
}

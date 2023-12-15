import { StyledTagSection } from "../styles/utils/TagSection.styled";
import TagsSectionContainer from "../containers/TagsSectionContainer";
import { Tag } from "../types";

type PropsTagsSection = {
  randomTags: Tag[];
};

export default function TagsSection(props: PropsTagsSection) {
  return (
    <StyledTagSection>
      <h2>FEATURED TAGS</h2>
      <div>
        {props.randomTags.map((tag, index) => (
          <TagsSectionContainer
            key={index}
            _id={tag._id}
            name={tag.name}
          />
        ))}
      </div>
    </StyledTagSection>
  );
}

import { Link } from "react-router-dom";
import { StyledTag } from "../styles/utils/Tag.styled";
import { Tag } from "../types/index";

export default function TagsSectionContainer(props: Tag) {
  return (
    <StyledTag as={Link} to={`/tags/${props._id}`} $bg={true}>
      #{props.name}
    </StyledTag>
  );
}

import { Link } from "react-router-dom";
import { StyledTag } from "../styles/utils/Tag.styled";

export default function TagsSectionContainer(props) {
  return (
    <StyledTag as={Link} to={`/tags/${props.id}`} $bg>
      #{props.name}
    </StyledTag>
  );
}

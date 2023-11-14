import { StyledHeader } from "./styles/Header.styled";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <StyledHeader>
      <div className="wrapper">
        <Link to="/">blogly</Link>
        <Link to="/login">Log in</Link>
      </div>
    </StyledHeader>
  );
}

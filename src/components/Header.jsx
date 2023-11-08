import { StyledHeader } from "./styles/Header.styled";

export default function Header() {
  return (
    <StyledHeader>
      <div className="wrapper">
        <h1>blogly</h1>
        <a href="/login">Log in</a>
      </div>
    </StyledHeader>
  );
}

import { StyledHeader } from "./styles/Header.styled";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function Header() {
  const { authenticated, logout } = useAuth();

  return (
    <StyledHeader>
      <div className="wrapper">
        <Link to="/">blogly</Link>

        {authenticated ? (
          <Link onClick={logout}>Log out</Link>
        ) : (
          <Link to="/login">Log in</Link>
        )}
      </div>
    </StyledHeader>
  );
}

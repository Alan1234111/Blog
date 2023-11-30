import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { StyledHeader } from "../styles/layout/Header.styled";
import { StyledButton } from "../styles/utils/Button.styled";

export default function Header() {
  const { authenticated, logout } = useAuth();

  return (
    <StyledHeader>
      <div className="wrapper">
        <Link to="/">blogly</Link>

        {authenticated ? (
          <StyledButton as={Link} onClick={logout}>
            Log out
          </StyledButton>
        ) : (
          <StyledButton as={Link} to="/login">
            Log in
          </StyledButton>
        )}
      </div>
    </StyledHeader>
  );
}

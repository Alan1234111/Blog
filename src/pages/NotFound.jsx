import { StyledNotFound } from "../styles/NotFoundPage.styled";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <StyledNotFound>
      <h2>Page Not Found</h2>
      <button onClick={() => navigate(-1)}>Go back!</button>
    </StyledNotFound>
  );
}

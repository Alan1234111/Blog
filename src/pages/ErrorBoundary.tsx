import { useRouteError, useNavigate } from "react-router-dom";
import { StyledErrorPage } from "../styles/ErrorPage.styled";

export default function ErrorBoundary() {
  let error = useRouteError();
  const navigate = useNavigate();
  console.error(error);

  return (
    <StyledErrorPage>
      <h2>Something went wrong!</h2>
      <button onClick={() => navigate(-1)}>Go back!</button>
    </StyledErrorPage>
  );
}

import styled from "styled-components";

export const StyledSinglePostComment = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 2em 0;
  letter-spacing: 1.5px;
  font-size: 1.4rem;

  h3 {
    font-size: 1.5rem;
  }

  form {
    display: flex;
    flex-direction: column;

    & textarea {
      background: #f3f3f3;
      border: none;
      font-weight: bold;
      padding: 1em;
    }

    & button {
      padding: 0.4em 0;
      background-color: #808080;
      color: white;
      border: none;
      border-radius: 4px;
      width: 8%;
      font-weight: bold;
      font-size: 0.9rem;
      margin-top: 0.3em;
    }
  }
`;

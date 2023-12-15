import styled from "styled-components";

export const StyledAsidePostContainer = styled.div<{
  $bg?: boolean;
}>`
  display: flex;
  margin: ${(props) => (props.$bg ? "0 auto 1em" : "1em 0")};
  width: ${(props) => (props.$bg ? "65%" : "80%")};
  text-decoration: none;
  color: black;

  img {
    width: 30%;
    height: 200px;
    object-fit: cover;
  }

  .post-information {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2em;
    width: 60%;

    & a {
      order: 1;
      font-size: 0.7rem;
      margin-bottom: 2em;
      width: fit-content;
    }

    & h3 {
      order: 2;
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
    }

    & p {
      order: 3;
      font-size: 0.9rem;
      opacity: 0.9;
    }
  }
`;

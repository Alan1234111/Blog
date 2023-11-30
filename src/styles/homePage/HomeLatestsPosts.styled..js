import styled from "styled-components";

export const HomeLatestsPosts = styled.section`
  display: flex;
  width: 60%;
  margin: 0 auto 1em;
  text-decoration: none;
  color: black;

  img {
    width: 30%;
    height: 200px;
    object-fit: cover;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2em 1em 2em 2em;
    width: 60%;
  }

  div a {
    order: 1;
    margin-bottom: 2em;
    width: fit-content;
  }

  div h2 {
    order: 2;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  div p {
    order: 3;
    font-size: 0.9rem;
    opacity: 0.9;
  }
`;

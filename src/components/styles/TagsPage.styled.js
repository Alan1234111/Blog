import styled from "styled-components";

export const StyledTagsPage = styled.section`
  max-width: 1200px;
  margin: 0 auto;

  h2 {
    font-size: 1.5rem;
    margin-top: 0.5em;
  }

  .post {
    display: flex;
    margin: 2em 0;
    text-decoration: none;
    color: black;
  }

  .post img {
    width: 30%;
    object-fit: cover;
  }

  .post-information {
    display: flex;
    flex-direction: column;
    padding: 2em;
    width: 50%;
  }

  .post-information button {
    font-size: 0.7rem;
    order: 1;
    margin-bottom: 2em;
    width: fit-content;
  }

  .post-information h3 {
    order: 2;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  .post-information div {
    font-size: 1.2rem;
    order: 3;
    font-size: 0.9rem;
    opacity: 0.9;
  }
`;

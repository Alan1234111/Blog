import styled from "styled-components";

export const StyledHomeMainPosts = styled.main`
  display: grid;
  grid-template-columns: 1.3fr 2fr 1.3fr;
  grid-template-rows: repeat(2, 375px);
  max-width: 1200px;
  margin: 0 auto;

  .post:nth-child(1) {
    grid-column: 1/2;
    grid-row: 1/2;
  }

  .post:nth-child(2) {
    grid-column: 1/2;
    grid-row: 2/3;
  }

  .post:nth-child(3) {
    grid-column: 2/3;
    grid-row: 1/3;
    padding: 0 1.5em;

    & .post-display {
      height: 80%;
    }

    & img {
      height: 100%;
    }
  }

  .post:nth-child(4) {
    grid-column: 3/4;
    grid-row: 1/2;
  }

  .post:nth-child(5) {
    grid-column: 3/4;
    grid-row: 2/3;
  }
`;

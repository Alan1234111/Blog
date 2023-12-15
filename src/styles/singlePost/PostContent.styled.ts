import styled from "styled-components";

export const StyledPostContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  .tag {
    margin: 2em 0;
    padding: 0.6em 1em;
    font-size: 0.7rem;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.3em;
  }

  .wrapper {
    display: flex;
    margin-bottom: 1em;

    & span {
      margin: 0 0.3em;
    }
  }

  img {
    width: 100%;
    height: 75vh;
    object-fit: cover;
  }

  article {
    margin-top: 2em;
    max-width: 550px;
    font-size: 0.9rem;
    letter-spacing: 0.7px;
    line-height: 1.5rem;
  }
`;

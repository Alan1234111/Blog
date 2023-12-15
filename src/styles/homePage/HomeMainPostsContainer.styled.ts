import styled from "styled-components";

export const StyledHomeMainPostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: #000;

  .post-info {
    order: 2;

    & h2 {
      font-size: 1rem;
      padding: 0.5em 0.2em 0;
      text-align: center;
    }

    & div {
      font-size: 0.7rem;
      font-weight: normal;
      opacity: 0.8;
      letter-spacing: 0.5px;
      padding: 0.3em 0.2em 0.5em;
      text-align: center;
      word-wrap: break-word;
      line-height: 0.8rem;
    }
  }

  .post-display {
    order: 1;
    position: relative;
    margin-bottom: 0.7em;
    height: 70%;

    & img {
      order: 1;
      width: 100%;
      object-fit: cover;
      height: 100%;
    }

    & a {
      position: absolute;
      bottom: -2%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

import styled from "styled-components";

export const StyledComment = styled.section`
  padding: 0 0.5em 0 0.8em;
  border-left: 1px solid #7c3aed;
  max-width: 1000px;
  width: 100%;
  margin-top: 2em;

  .comment-information {
    margin-bottom: 0.6em;
    font-size: 1rem;

    & .author {
      font-weight: bold;
    }

    & .date {
      font-size: 0.8rem;
      opacity: 0.7;
    }
  }

  .content {
    font-size: 1rem;
    margin: 1.3rem 0;
  }

  .action-section {
    display: flex;
    margin-bottom: 0.7rem;

    & button {
      display: flex;
      width: 5%;
      border: none;
      background-color: transparent;
      cursor: pointer;
      line-height: 18px;
      margin-bottom: 0.4rem;
    }

    & button img {
      width: 18px;
      height: 18px;
      margin-right: 0.2rem;
      filter: invert(36%) sepia(97%) saturate(5935%)
        hue-rotate(256deg) brightness(96%) contrast(94%);
    }
  }

  hr {
    width: 100%;
    opacity: 0.5;
    margin: 0;
    margin-top: 0.5em;
  }
`;

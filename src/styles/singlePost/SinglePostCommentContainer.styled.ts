import styled from "styled-components";

export const StyledSinglePostCommentContainer = styled.section`
  max-width: 1000px;
  width: 100%;
  padding: 0.2em 0.5em 0 0.8em;
  margin-top: 1.5em;
  border-left: 2px solid #7c3aed;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  .comment-information-container {
    margin: 0.2em 0 0.6em;
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

  .comment-action-container {
    display: flex;
    margin-bottom: 0.7rem;

    & button {
      display: flex;
      width: 5%;
      margin-bottom: 0.4rem;
      border: none;
      background-color: transparent;
      cursor: pointer;
      line-height: 18px;

      & img {
        width: 18px;
        height: 18px;
        margin-right: 0.2rem;
        filter: invert(36%) sepia(97%) saturate(5935%)
          hue-rotate(256deg) brightness(96%) contrast(94%);
      }
    }
  }
`;

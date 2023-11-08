import styled from "styled-components";

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  padding: 1.5em 4em;
  background-color: #fff;
  z-index: 10;

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }

  h1 {
    font-size: 1.5rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-weight: 400;
  }

  a {
    text-decoration: none;
    background-color: #9443e0;
    color: white;
    padding: 0.3em 0.7em;
    border-radius: 2px;
  }
`;

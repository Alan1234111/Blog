import styled from "styled-components";

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  padding: 1.5em 4em;
  background-color: #fff;
  z-index: 10;

  .wrapper {
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }

  a:nth-child(1) {
    font-size: 1.5rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-weight: 400;
    text-decoration: none;
    color: black;
  }
`;

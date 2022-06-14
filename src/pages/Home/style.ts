import styled from "styled-components";

export const Container = styled.div`
  max-width: 1099px;
  margin: 0 auto;
  padding-inline: 1rem;
  position: relative;

  @media (max-width: 920px) {
    padding-inline: 2rem;
  }
`;

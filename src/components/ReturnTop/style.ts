import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 1.5vw;
  right: 2vw;

  .buttonTop {
    transform: translateY(2rem);
    opacity: 0;
    transition: all 1s;
  }

  .returnTop--active {
    opacity: 1;
    transform: translateY(0rem);
    transition: all 1s;
  }

  svg {
    color: var(--button-top);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  border-radius: 5rem;
  padding: 0.5rem;
  height: 2.6rem;
  width: 5rem;
  position: fixed;
  bottom: 3rem;
  left: 3vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transform: scale(1.5);

  svg:first-of-type {
    color: orange;
  }

  svg:last-child {
    color: hsla(210, 50%, 30%, 1);
  }

  div {
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 3rem;
    background-color: black;

    position: absolute;
    top: 0.2rem;
    left: 0.2rem;
    transition: all 0.5s;
    transform: translateX(7%);
    z-index: 2;
  }

  .active {
    transform: translateX(100%);
  }

  @media (max-width: 700px) {
    position: absolute;
    top: 8rem;
    left: 3rem;
  }
`;

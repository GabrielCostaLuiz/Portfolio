import styled from "styled-components";

export const Container = styled.section`
  padding-top: 2rem;
  h2 {
    color: var(--text);
    font-weight: 600;
    font-size: 2.4rem;
    margin-bottom: 3.2rem;
  }

  .allRepositorios {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
  }

  .contentButton {
    text-align: center;
    button {
      background: var(--gradient);
      background-image: var(--gradient);
      border: 0;
      height: 5rem;
      width: 30rem;
      border-radius: 1rem;
      color: var(--text-button);

      font-size: 1.6rem;
      font-weight: 500;

      margin-top: 3.2rem;

      text-transform: uppercase;

      transition: all 0.7s;

      &:hover {
        transform: scale(110%);
      }
    }
  }

  @media (max-width: 768px) {
    text-align: center;
  }

  @media (max-width: 700px) {
    .allRepositorios {
      grid-template-columns: 1fr;
      row-gap: 3rem;

      article {
        text-align: left;
        width: 100%;
        margin: 0 auto;
      }
    }
  }
`;

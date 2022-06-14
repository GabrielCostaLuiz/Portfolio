import styled from "styled-components";

export const Container = styled.section`
  margin-top: 11.3rem;
  margin-bottom: 18rem;
  padding-top: 2rem;

  h2 {
    color: var(--text);
    font-weight: 600;
    font-size: 2.4rem;
    margin-bottom: 3.2rem;
  }

  ul {
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    list-style: none;

    flex-wrap: wrap;

    li:last-of-type {
      img {
        width: 84%;
      }
    }

    figure {
      text-align: center;

      img {
        width: 100%;
      }
    }

    figcaption {
      color: var(--text);
      font-size: 1.6rem;
      text-transform: uppercase;
      letter-spacing: 0.13538em;
      margin-top: 2rem;
    }
  }

  @media (max-width: 768px) {
    text-align: center;
    ul {
      justify-content: space-around;
    }
  }
`;

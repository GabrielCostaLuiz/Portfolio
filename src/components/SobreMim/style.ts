import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 27vw 1fr;
  grid-gap: 5vw;
  margin-bottom: 12.4rem;
  padding-top: 2rem;

  .Contimg {
    line-height: 0;
    height: fit-content;
    border-left: 4px solid;
    border-image: var(--gradient), 1;
    border-color: var(--gradient);
    img {
      width: 100%;
    }
  }

  .sobremim {
    display: flex;
    justify-content: center;
    flex-direction: column;
    h2 {
      font-weight: 600;
      font-size: 2.4rem;
      margin-bottom: 2rem;
    }

    p:first-of-type {
      font-size: 2rem;
      margin-bottom: 2rem;
      color: var(--text);
    }

    p:first-of-type + p {
      margin-bottom: 2rem;
      font-size: 1.8rem;
      font-weight: 300;
      color: var(--text);
    }
  }

  .social {
    a {
      width: fit-content;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      border-radius: 6px;
      border: 1px solid var(--text-span);
      padding: 1.2rem 2rem;
      color: var(--text);
      font-size: 1.6rem;
      font-weight: 500;

      text-decoration: none;

      transition: all 0.5s;

      &:hover {
        transform: scale(110%);
        border: 1px solid transparent;
        border-image: var(--gradient) 1;
      }
    }
  }

  @media (max-width: 810px) {
    grid-template-columns: 30vw 1fr;
    grid-gap: 5vw;

    .sobremim {
      h2 {
        font-size: min(2.4rem, 3vw);
      }
      p:first-of-type {
        font-size: min(2rem, 2.6vw);
      }

      p:first-of-type + p {
        font-size: min(1.6rem, 2vw);
      }
    }
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    text-align: center;

    .Contimg {
      display: none;
    }

    .sobremim {
      h2 {
        font-weight: 600;
        font-size: 2.4rem;
        margin-bottom: 2rem;
      }

      p:first-of-type {
        font-size: 2rem;
        margin-bottom: 2rem;
        color: var(--text);
      }

      p:first-of-type + p {
        margin-bottom: 2rem;
        font-size: 1.8rem;
        font-weight: 300;
        color: var(--text);
      }
    }

    .social {
      margin: auto;
    }
  }
`;

import styled from "styled-components";

export const Container = styled.article`
  background-color: var(--background-card);
  border-radius: 1rem;
  box-shadow: 0px 0px 2px rgba(40, 38, 44, 0.15);

  img {
    width: 100%;
    height: 35rem;
    border-radius: 1rem 1rem 0 0;
  }

  .imgHeig {
    height: 35rem;
  }

  .backImgLoaded {
    opacity: 0;
  }

  & + article + article {
    margin-top: 4.3rem;
  }

  h3 {
    color: var(--text-title-h3);
    font-weight: 600;
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .infoProject {
    padding: 2rem;
    display: grid;
    row-gap: 1rem;
    grid-template-rows: auto 6rem 10rem;
  }

  h3 + p {
    color: var(--text);
    font-size: 1.6rem;
  }

  .contentLanguagens {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 1rem 0 1.9rem 0;

    .languagens {
      display: flex;
      gap: 1rem;

      p {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        padding: 0.8rem 1.6rem;
        color: var(--text-languagens);
        background-color: var(--gradient);
        background-image: var(--gradient);
        font-size: 1.1rem;
        font-weight: 400;
        flex: 1;
      }
    }
  }

  .description {
    font-size: 1.6rem;
    color: var(--text);
  }

  .github {
    padding: 1.2rem 2rem;
    justify-content: space-around;

    a {
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
        transform: scale(103%);
        border: 1px solid transparent;
        border-image: var(--gradient) 1;
      }
    }
  }

  .githubdual {
    padding: 1.2rem 2rem;
    justify-content: space-around;
    display: flex;
    gap: 1rem;

    a {
      display: flex;
      flex: 1;
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
        transform: scale(103%);
        border: 1px solid transparent;
        border-image: var(--gradient) 1;
      }
    }
  }
`;

export const ContainerReposPadrao = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
`;

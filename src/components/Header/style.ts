import styled from "styled-components";

export const Container = styled.header`
  padding-top: 2.7rem;
  margin-bottom: 26.3rem;

  .contLinks {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 9.6rem;

    a {
      font-weight: 500;
      font-size: 1.6rem;
      color: var(--text);

      text-decoration: none;
    }

    .toggleHome {
      display: flex;
    }

    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 6.5vw;
      list-style: none;
    }
  }

  #home {
    display: flex;
    gap: 8.5rem;

    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1rem;

      flex: 1;

      h1 {
        font-size: min(7.2rem, 6vw);
        font-weight: 600;
        background-image: var(--gradient);
        color: black;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      p:first-child {
        font-weight: 400;
        font-size: 2rem;
        color: var(--text-span);
        font-family: "Tinos", sans-serif;
      }

      p {
        font-size: 1.6rem;
        color: var(--text);
        line-height: 2.4rem;
      }

      .social {
        display: flex;
        gap: 2.4rem;

        a {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          border-radius: 6px;
          border: 1px solid var(--text-span);
          padding: 1.2rem 2rem;
          margin-top: 1rem;
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
    }

    .contentImg {
      flex: 1;
    }
    img {
      width: 100%;
      height: fit-content;
    }
  }

  @media (max-width: 920px) {
    margin-bottom: 15rem;

    #home {
      .text {
        text-align: center;
        h1 {
          font-size: min(7rem, 13vw);
        }
      }

      .social {
        margin: auto;
      }
    }

    .contentImg {
      display: none;
    }
  }
`;

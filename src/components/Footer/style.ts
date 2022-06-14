import styled from "styled-components";

export const Container = styled.footer`
  text-align: center;
  padding-bottom: 3rem;

  div {
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8rem;

      list-style: none;

      li {
        figure {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 1rem;
          div {
            width: fit-content;
            display: flex;
            align-items: center;
            justify-content: center;
            background-image: var(--gradient);
            background-color: var(--gradient);
            border-radius: 50px;
            padding: 0.6rem;

            a {
              width: 100%;
              height: 100%;
            }
            svg {
              fill: var(--text-languages);
              stroke: var(--text-languages);
            }
          }
        }
      }
    }
  }
`;

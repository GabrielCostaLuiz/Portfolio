import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/* RESET PADRÃO */
  :root{
    --hue: 204;

    --background:hsla(var(--hue), 84%, 10%, 1);

    --gradient: linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);

    --text: hsla(calc(var(--hue) - 25), 53%, 83%, 1);
    --text-span: hsla(200, 35%, 88%, 1);
    --text-button: hsla(200, 4%, 15%, 1);
    --text-languagens: hsla(181, 10%, 14%, 1);
    --text-title-h3:hsla(179, 50%, 90%, 1);


    --background-card: hsla(180, 5%, 14%, 1);

    --button-top: white;
  }

  .white:root{
    --background: white;

    --gradient: #5222D0;

    --text: #1F2626;
    --text-span: #151717;
    --text-button: white;
    --text-languagens: white;
    --text-title-h3:#151717;

    
    --background-card: rgba(245, 242, 253, 1);

    --button-top: black;

    #home{
      .text {
      h1 {
        font-weight: 600;
        color: var(--gradient);
        -webkit-text-fill-color: initial;
      }

      .social{
        a{
          color: var(--text-button);
        border: 0;
        background-color: var(--gradient);

          &:hover{
            background: #7842FF;
        }
      }
      }
    }
    }

     .social, .github, .githubdual{
      a{
        color: var(--text-button);
        border: 0;
        background-color: var(--gradient);

        &:hover{
            background: #7842FF;
        }
      }
    }

    .toggleDarkOrLight {
      background-color: black;

      div{
        background-color: white;
      }
    }

    footer{
      ul {
    li {
      svg {
        fill: #DBFFFF
      }
    }
  }
    }
  
  }
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
  width: 100%;
  height: 100%;
  }

  html{
    font-size: 62.5%;
    @media (max-width: 920px) {
    font-size:50%
  }

  scroll-behavior: smooth;
  }

  body{
    -webkit-font-smoothing: antialiased;
    background-color: var(--background);
    color: var(--text);
    font-family: 'Montserrat', sans-serif;

  }

  button{
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }

/* RESET PADRÃO */
`;

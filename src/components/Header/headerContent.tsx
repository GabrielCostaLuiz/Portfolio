import { BsGithub, BsLinkedin } from "react-icons/bs";

import image from "../../assets/image.svg";

export function Content() {
  return (
    <div id="home">
      <div className="text">
        <p>FRONT-END DEVELOPER</p>
        <h1>Gabriel Costa</h1>
        <p>
          Bem-vindo ao meu portfólio. Meu nome é Gabriel Costa Luiz, estou
          estudando e me aprimorando para entrar no mercado de programação,
          atualmente estou estudando conteúdo de FrontEnd, porém, almejo ser
          FullStack e estar sempre me aprimorando para ser um programador
          melhor.
        </p>
        <div className="social">
          <a
            href="https://www.linkedin.com/in/gabrielcostaluiz/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
            Linkedin
          </a>
          <a
            href="https://github.com/GabrielCostaLuiz"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub size={17} />
            GitHub
          </a>
        </div>
      </div>

      <div className="contentImg">
        <img src={image} alt="Homem mexendo no notebook" />
      </div>
    </div>
  );
}

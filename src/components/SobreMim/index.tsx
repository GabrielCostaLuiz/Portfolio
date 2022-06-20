import { RiMailDownloadLine } from "react-icons/ri";

import Curriculo_Gabriel_Costa_Luiz from "../../assets/CurriculoGabrielCostaLuiz.pdf";
import eu from "../../assets/foto.png";
import { Container } from "./style";

export function SobreMim() {
  return (
    <Container id="sobre">
      <div className="Contimg">
        <img src={eu} alt="Foto do Gabriel" />
      </div>

      <div className="sobremim">
        <h2>Sobre Mim</h2>
        <p>São Paulo, Brasil</p>
        <p>
          Sou Desenvolvedor Front-End, atualmente estudando e construindo
          aplicações em ReactJS com TypeScript e buscando promover mais
          conhecimento através de projetos e estudos sobre outras linguagens,
          frameworks, metodologias e entre outros assuntos que agreguem para
          minha evolução.
        </p>

        <div className="social">
          <a
            href={Curriculo_Gabriel_Costa_Luiz}
            target="_blank"
            rel="noreferrer"
          >
            <RiMailDownloadLine />
            Curriculo
          </a>
        </div>
      </div>
    </Container>
  );
}

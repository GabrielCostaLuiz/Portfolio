/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import { useEffect, useState } from "react";

import { Repositorios } from "../Repositorios";
import { Container } from "./style";

export interface IGetRepositorios {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage?: string;
}

export function Projetos() {
  const [repositorios, setRepositorios] = useState([]) as any;
  const [allProjectsTrueOrFalse, setAllProjectsTrueOrFalse] = useState(false);

  const reposPadrao = [
    {
      id: 1,
      name: "baseReact",
      description:
        "Projeto para aprender o básico do react e typescript, como useState, components, imutabilidade, props, interface, tipagem, e muito mais",
      html_url: "https://github.com/GabrielCostaLuiz/baseReact",
      homepage: "https://gabrielcostaluiz.github.io/baseReact/",
    },
    {
      id: 2,
      name: "ToDo_List",
      description:
        "Essa será uma aplicação onde o seu principal objetivo é uma pequena aplicação de atividades a fazer, para treinar um pouco mais sobre manipulação do estado no React. - Adicionar uma nova tarefa - Remover uma tarefa - Marcar e desmarcar uma tarefa como concluída.",
      html_url: "https://github.com/GabrielCostaLuiz/ToDo_List",
      homepage: "https://gabrielcostaluiz.github.io/ToDo_List/",
    },
  ];

  function getRepositorios() {
    fetch("https://api.github.com/users/GabrielCostaLuiz/repos")
      .then((response) => response.json())
      .then((data) => setRepositorios(data));
  }

  function ShowOrNotAllProjects() {
    setAllProjectsTrueOrFalse(!allProjectsTrueOrFalse);
    const button = document.querySelector(".contentButton button");

    if (allProjectsTrueOrFalse) {
      button!.textContent = "Mostrar todos os projetos";
    } else {
      button!.textContent = "Esconder todos os projetos";
    }
  }

  useEffect(() => {
    getRepositorios();
  }, []);
  return (
    <Container id="projetos">
      <h2>Projetos</h2>

      <div className="allRepositorios">
        {allProjectsTrueOrFalse
          ? repositorios.map((repositorio: IGetRepositorios) => {
              if (
                repositorio.name !== "GabrielCostaLuiz" &&
                repositorio.name !== "Portfolio"
              ) {
                return (
                  <Repositorios
                    description={repositorio.description}
                    name={repositorio.name}
                    html_url={repositorio.html_url}
                    homepage={repositorio.homepage}
                    key={repositorio.id}
                    dualButton={repositorio.homepage !== ""}
                  />
                );
              }
            })
          : reposPadrao.map((repositorio: IGetRepositorios) => (
              <Repositorios
                description={repositorio.description}
                name={repositorio.name}
                html_url={repositorio.html_url}
                homepage={repositorio.homepage}
                key={repositorio.id}
                dualButton={repositorio.homepage !== ""}
              />
            ))}
      </div>
      <div className="contentButton">
        <button type="button" onClick={ShowOrNotAllProjects}>
          VER TODOS OS PROJETOS
        </button>
      </div>
    </Container>
  );
}

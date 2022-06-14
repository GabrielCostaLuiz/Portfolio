import React, { useEffect } from "react";

import backProject from "../../assets/backProjects.png";
import { Linguagem } from "../Linguagens";
import { Container } from "./style";

export interface IRepositorio {
  name: string;
  description: string;
  html_url: string;
  homepage?: string;
  dualButton?: boolean | undefined;
}

export function Repositorios({
  name,
  description,
  html_url,
  homepage,
  dualButton = true,
}: IRepositorio) {
  function swapImg() {
    const imgs = document.querySelectorAll(".backImg");
    imgs.forEach((img) => {
      if (
        img.getAttribute("title") !== "baseReact" ||
        img.getAttribute("title") !== "Bollpi" ||
        img.getAttribute("title") !== "DoctorCare" ||
        img.getAttribute("title") !== "ToDo_List" 
      ) {
        img.setAttribute("src", backProject);
      }
    });
  }

  useEffect(() => {
    swapImg();
  }, []);

  return (
    <Container>
      <img
        src={`https://raw.githubusercontent.com/GabrielCostaLuiz/${name}/main/src/assets/${name}.png`}
        alt=""
        title={name}
        className="backImg"
      />
      <div className="infoProject">
        <h3>{name}</h3>
        <div className="contentLanguagens">
          <Linguagem name={name} />
        </div>
        <p className="description">{description}</p>
      </div>
      <div className={dualButton ? "githubdual" : "github"}>
        <a href={html_url} target="_blank" rel="noreferrer">
          Ver no Github
        </a>
        {homepage && (
          <a href={homepage} target="_blank" rel="noreferrer">
            Ver no Site
          </a>
        )}
      </div>
    </Container>
  );
}

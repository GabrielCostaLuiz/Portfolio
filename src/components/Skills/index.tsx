import React from "react";

import git from "../../assets/git.svg";
import js from "../../assets/js.svg";
import react from "../../assets/react.svg";
import styled from "../../assets/styled.svg";
import ts from "../../assets/ts.svg";
import { Container } from "./styled";

export function Skills() {
  return (
    <Container id="skills">
      <h2>Skills</h2>
      <ul>
        <li>
          <figure>
            <img src={js} alt="JavaScript" title="JavaScript" />
            <figcaption>JavaScript</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src={ts} alt="TypeScript" title="TypeScript" />
            <figcaption>TypeScript</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src={react} alt="React" title="React" />
            <figcaption>React</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src={git} alt="Git" title="Git" />
            <figcaption>Git</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img
              src={styled}
              alt="Styled Components"
              title="Styled Components"
            />
            <figcaption>
              Styled
              <br />
              Components
            </figcaption>
          </figure>
        </li>
      </ul>
    </Container>
  );
}

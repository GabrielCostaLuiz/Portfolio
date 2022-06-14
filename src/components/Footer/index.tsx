import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { TbBrandGithub } from "react-icons/tb";

import { Container } from "./style";

export function Footer() {
  return (
    <Container>
      <div>
        <ul>
          <li>
            <figure>
              <div>
                <a
                  href="mailto:gabrielbragacostaluiz@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  title="gabrielbragacostaluiz@gmail.com"
                >
                  <SiGmail size={25} title="gabrielbragacostaluiz@gmail.com" />
                </a>
              </div>

              <figcaption>GMAIL</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <div>
                <a
                  href="https://www.linkedin.com/in/gabrielcostaluiz/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn size={25} />
                </a>
              </div>
              <figcaption>LINKEDIN</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <div>
                <a
                  href="https://github.com/GabrielCostaLuiz"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TbBrandGithub size={25} />
                </a>
              </div>
              <figcaption>GITHUB</figcaption>
            </figure>
          </li>
        </ul>
      </div>
    </Container>
  );
}

/* eslint-disable no-restricted-globals */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-unused-expressions */
import { useState } from "react";

import { Toggle } from "../ToggleDarkLight";

export function Links() {
  const [button, setButton] = useState(false);

  function buttonTrueOrFalse(event: any) {
    const DarkOrLight = !button;
    setButton(DarkOrLight);

    const body = document.querySelector("html") as HTMLElement;
    body.classList.toggle("white");

    event?.target.classList.toggle("active");
  }

  return (
    <div className="contLinks">
      <div className="toggleHome">
        <Toggle buttonTrueOrFalse={buttonTrueOrFalse} />
        <a href="#home">Home</a>
      </div>

      <ul>
        <li>
          <a href="#sobre">Sobre</a>
        </li>
        <li>
          <a href="#projetos">Projetos</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
      </ul>
    </div>
  );
}

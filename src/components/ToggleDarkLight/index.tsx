/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FaSun, FaMoon } from "react-icons/fa";

import { Container } from "./style";

interface IProps {
  buttonTrueOrFalse: (event: any) => void;
}

export function Toggle({ buttonTrueOrFalse }: IProps) {
  function addClass(event: any) {
    buttonTrueOrFalse(event);
  }

  return (
    <Container className="toggleDarkOrLight">
      <div onClick={addClass} />
      <FaSun size={16} />
      <FaMoon size={16} />
    </Container>
  );
}

import React from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

import { Container } from "./style";

export function ReturnTop() {
  return (
    <Container className="returnTop">
      <div className="buttonTop">
        <a href="#header">
          <BsFillArrowUpCircleFill size={45} />
        </a>
      </div>
    </Container>
  );
}

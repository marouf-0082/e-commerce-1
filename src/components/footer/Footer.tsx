import React from "react";
import { Container } from "../container/Container";
import NewsLetter from "../newsLetter/NewsLetter";

function Footer() {
  return (
    <div>
      <NewsLetter />
      <Container>
        <div>footer</div>
      </Container>
    </div>
  );
}

export default Footer;

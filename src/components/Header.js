import React from "react";
import { Head, HeadTitle, HeadSubtitle, Container } from "../styles/main";

const Header = ({ optionLength }) => (
  <Head>
    <Container>
      <HeadTitle>To do & Indecision App</HeadTitle>
      <HeadSubtitle>Put your life in a hand of computer</HeadSubtitle>
      <p style={{ textAlign: "center" }}>
        {optionLength > 0
          ? `Here are your options ${optionLength}`
          : `No options`}
      </p>
    </Container>
  </Head>
);

export default Header;

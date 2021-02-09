import styled from "../styled-components/index.js";
import { component as Component } from "../react/index.js";

//Leonidas const
const TitleStyled = styled.h1`
  font-family: system-ui;
  color: orange;
  font-size: 50px;
  text-shadow: 2px 2px 0 black;
  line-height: 100vh;
`;

//Leonidas carga de props
const props = {
  message: "No Te Rindas",
};

//Leonidas carga del title
const Title = Component`<marquee> ${"message"} </marquee>`(props);

export default TitleStyled(Title)
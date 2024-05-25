import { createGlobalStyle, keyframes } from "styled-components";
import backgroundImage from "./images/background.jpg";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    transition: background-color 0.5s ease; 
  }

  body {
    font-family: 'Poppins', Sans-Serif;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center 10px; /* Desloca o background-image 10px para baixo */
    background-repeat: no-repeat;
    height: calc(100vh - 10px); /* Ajusta a altura para compensar o deslocamento */
    overflow: hidden;
    animation: ${fadeIn} 1s ease-in-out; /* Aplica a animação de fade-in */
  }
`;

export default Global;

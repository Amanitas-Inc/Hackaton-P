import styled, { keyframes } from "styled-components";
import BgBotao from "../../assets/img/bg-button.png";

export const Button = styled.button`
   color: white;
   background-color: rgba(76, 31, 112, 0.25);
   background-image: none;
   border: 1px solid rgba(195, 135, 255, 0.6);
   border-radius: 10px;
   padding: 16px 0;
   width: 200px;
   cursor: pointer;
   -webkit-transition: background-image 0.2s ease-in-out;
transition: background-image 0.2s ease-in-out;
   &:hover,
   &:focus {
      background-image: url(${BgBotao});
      background-color: rgba(76, 31, 112, 0.25);
      background-position: left top;
      background-repeat: repeat-x;
   }
`;


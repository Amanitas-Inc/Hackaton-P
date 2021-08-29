import styled from "styled-components";
import BgBotao from "../../assets/img/bg-upload-btn.png";
export const Container = styled.div``;

export const Input = styled.input`
   display: none;
`;

export const Button = styled.button`
   background: transparent;
   border: 0.7px dashed rgba(255, 255, 255, 0.6);
   padding: 12px;
   width: 200px;
   border-radius: 10px;
   color: #a5a2a7;
   cursor: pointer;

   display: flex;
   align-items: center;
   justify-content: center;
   &:hover,
   &:focus {
      background-image: url(${BgBotao});
      background-position: left top;
      background-repeat: repeat-x;
   }
`;

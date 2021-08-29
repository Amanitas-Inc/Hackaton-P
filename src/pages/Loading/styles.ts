import styled, { keyframes } from "styled-components";
import image from "../../assets/img/furufufu.png";
import Bg from "../../assets/img/stars-loading-bg.svg";
import { ReactComponent as ContainerBg } from "../../assets/img/background-loader.svg";
import { ReactComponent as comet } from "../../assets/icon/loader-comet.svg";

export const BgContainer = styled(ContainerBg)`
   height: 70vh;
   position: fixed;
   align-self: center;
`;


function blinkingEffect() {
   return keyframes`
     50% {
       opacity: 0.3;
     }
   `;
 }

export const BackgroundStars = styled.div`
   width: 100vw;
   height: 100vh;
   position: fixed;
   background: url(${Bg});
   background-position: center top;
   background-repeat: repeat;
   animation: ${blinkingEffect} 2s linear infinite;
`;

export const Page = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-color: ${(p) => p.theme.colors.black[1]};
   overflow: hidden;
`;

export const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`;

const rotate = keyframes`
  from {
     transform: rotate(0deg);
   }
   
   to {
      transform: rotate(360deg);
   }
`;

export const LoaderComet = styled(comet)`
   height: 25vh;
   width: 25vh;
   animation: ${rotate} 2s linear infinite;
`;

export const Text = styled.p`
   position: fixed;
   align-self: center;
   color: white;
   font-size: clamp(0.8rem, 2vh, 2rem);
   font-weight: normal;
   text-align: center;
`;

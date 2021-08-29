import styled, { keyframes } from "styled-components";
import image from "../../assets/img/furufufu.png";
import Bg from "../../assets/img/stars-loading-bg.svg";
import { ReactComponent as err } from "../../assets/img/error.svg";

export const StyledImage = styled(err)`
   height: 36vh;
   width: auto;
`;

export const BackgroundStars = styled.div`
   width: 100vw;
   height: 100vh;
   position: fixed;
   background: url(${Bg});
   background-position: center top;
   background-repeat: repeat;
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
   flex-direction: column;
   justify-content: center;
   align-items: center;
   z-index: 1;
`;

export const Text = styled.p`
   color: white;
   margin-top: 16px;
`;

export const Button = styled.button`
   color: white;
   background: rgba(76, 31, 112, 0.25);
   border: 1px solid rgba(195, 135, 255, 0.6);
   border-radius: 10px;
   padding: 16px 0;
   width: 200px;
   margin-top: 40px;
   cursor: pointer;
`;

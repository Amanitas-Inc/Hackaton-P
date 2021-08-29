import styled from "styled-components";
import image from "../../assets/img/furufufu.png";
import { ReactComponent as Logo } from "../../assets/icon/dotcog.svg";
import GlassButton from "../../components/glass-button";

export const StyledLogo = styled(Logo)`
   height: 30vh;
   width: 30vh;
`;

export const Page = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   flex-direction: column;
   background-color: ${(p) => p.theme.colors.black[1]};
   overflow: hidden;
`;

export const Container = styled.div`
   height: 100%;
   max-width: 1440px;
   margin: 0 auto;
   padding: clamp(30px, 10vw, 8vh);
   position: relative;
   z-index: 1;
   display: flex;
   flex-direction: column;

   @media (max-width: 600px) {
      align-items: center;
      justify-content: center;
   }
`;

export const FurufufuEnfeitado = styled.div`
   position: absolute;
   width: 100%;
   height: 100%;
   background: url(${image});
   background-size: cover;
   background-position: center;
`;

export const Img = styled.img`
   height: 80vh;
   position: absolute;
   top: 8vh;
   right: 8vh;
   z-index: 0;
   @media (max-width: 600px) {
      display: none;
      text-align: center;
   }
`;

export const WrapperText = styled.div`
   width: 50%;
   z-index: 2;
   @media (max-width: 600px) {
      width: 100%;
   }
`;

export const DotCogLogo = styled(Logo)``;

export const Title = styled.h1`
   color: white;
   margin-top: 32px;
   font-weight: bold;
   font-size: clamp(1.6rem, 4vw, 3rem);
   line-height: 125%;
   letter-spacing: 0.02em;
   text-align: left;
   @media (max-width: 600px) {
      text-align: center;
   }
`;
export const Description = styled.p`
   color: rgba(255, 255, 255, 0.95);
   font-style: normal;
   text-align: left;
   font-weight: normal;
   font-size: clamp(1rem, 2vw, 1.2rem);
   line-height: 160%;
   margin-top: 16px;
   @media (max-width: 600px) {
      text-align: center;
   }
`;

export const GlassButtonExtended = styled.button`
   margin-top: 30px;
`;

export const WrapperButton = styled.div`
margin-top: 30px;
   @media (max-width: 600px) {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
   }
`;

import styled from "styled-components";
import { ReactComponent as Image } from "../../assets/img/download-image.svg";
import { ReactComponent as CornerImage } from "../../assets/img/corner-download.svg";
import { ReactComponent as BgImg } from "../../assets/img/background-download.svg";

export const Page = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 100vw;
   height: 100vh;
   background-color: ${(p) => p.theme.colors.black[1]};
`;

export const BgImage = styled(BgImg)`
   position: fixed;
   height: 50vh;
   width: auto;
   bottom: 0;
   right: 0;
   left: 0;
   margin: 0 auto;
`;

export const CornerImageBg = styled(CornerImage)`
   position: fixed;
   height: 50vh;
   width: auto;
   bottom: 0;
   right: 0;
`;

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   z-index: 1;
`;

export const Box = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   position: relative;
   padding: 16px;
`;

export const StyledImage = styled(Image)`
   position: absolute;
   top: calc(-1 * 15vh);
   width: auto;
   height: 15vh;
`;

export const Title = styled.h1`
   color: #fff;
   min-height: 25px;
   font-size: clamp(1.2rem, 2vw, 2.25rem);
   line-height: 130%;
   font-weight: 500;
   text-align: center;
`;

export const ButtonWrapper = styled.div`
   display: flex;
   margin: 0 auto;
   align-items: center;
   flex-direction: column;
   gap: 30px;
   position: absolute;
   bottom: -160%;
`;

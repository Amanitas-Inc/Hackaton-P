import styled from "styled-components";
import image from "../../assets/img/furufufu.png";
import { ReactComponent as Logo } from "../../assets/img/logo-home.svg";
import { ReactComponent as UploadIco } from "../../assets/icon/icon-upload.svg";

export const StyledLogo = styled(Logo)`
   height: 30vh;
   width: 30vh;
`;

export const IconUpload = styled(UploadIco)`
   padding-right: 8px;
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

export const Content = styled.div`
   z-index: 1;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`;

export const FurufufuEnfeitado = styled.div`
   position: absolute;
   width: 100%;
   height: 100%;
   background: url(${image});
   background-size: cover;
`;

export const TextBox = styled.div`
   width: 100vw;
`;

export const Title = styled.h1`
   text-align: center;
   color: white;
   font-size: clamp(1.2rem, 2vw, 2.25rem);
   font-weight: 600;
   margin: -40px 0 15px;
   padding: 0 16px;
`;

export const SubTitle = styled.h3`
   text-align: center;
   color: #efefef;
   font-size: clamp(0.8rem, 1.5vw, 1.5rem);
   font-weight: 400;
   padding: 0 16px;
`;

export const UploadLimitIndicator = styled.p`
   text-align: center;
   color: #efefef;
   font-size: 11px;
   font-weight: normal;
   padding: 0 16px;
`;

export const ButtonsContainer = styled.div`
   width: 100vw;
   flex-wrap: wrap;
   margin: 30px 0 40px;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 15px;
`;

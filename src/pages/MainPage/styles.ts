import styled from "styled-components";
import image from "../../assets/img/furufufu.png";
import { ReactComponent as Logo } from "../../assets/img/logo-home.svg";

export const StyledLogo = styled(Logo)``;

export const Container = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-color: ${(p) => p.theme.colors.black[1]};
`;

export const FurufufuEnfeitado = styled.div`
   position: absolute;
   width: 100%;
   height: 100%;
   background: url(${image});
   background-size: cover;
`;

export const Title = styled.h1`
   text-align: center;
   color: white;
   font-size: 40px;
   font-weight: 600;
   margin: -40px 0 15px;
`;
export const SubTitle = styled.h3`
   text-align: center;
   color: #efefef;
   font-size: 14px;
   font-weight: 400;
`;
export const UploadLimitIndicator = styled.p`
   text-align: center;
   color: #efefef;
   font-size: 11px;
   font-weight: normal;
`;

export const UploadContainer = styled.div`
   padding: 1rem 2rem;
   box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
   border-radius: 10px;
   display: flex;
   justify-content: center;
   align-items: center;
`;

export const ButtonsContainer = styled.div`
   margin: 30px 0 40px;
   display: flex;
   gap: 15px;
`;
export const Submit = styled.button`
   color: white;
   border: none;
   width: 200px;
   padding: 16px 0;
   border-radius: 10px;
   background: ${(p) => p.theme.colors.purple[4]};
   background-size: cover;
   background-position: center;
`;

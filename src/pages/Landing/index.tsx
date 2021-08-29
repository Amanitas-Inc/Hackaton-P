import React from "react";
import { Link } from "react-router-dom";
import Atronaut from "../../assets/img/astronaut.png";
import GlassButton from "../../components/glass-button";
import {
   FurufufuEnfeitado,
   Page,
   Container,
   DotCogLogo,
   Title,
   Description,
   GlassButtonExtended,
   Img,
   WrapperButton,
   WrapperText,
} from "./styles";

export const LandingPage = () => {
   return (
      <Page>
         <FurufufuEnfeitado />
         <Img src={Atronaut} />
         <Container>
            <DotCogLogo />
            <WrapperText>
               <Title>Bem-vindo viajante! Comece a sua jornada</Title>
               <Description>
                  Utilize essa ferramenta para mesclar duas tabelas, unindo suas
                  informações gerando um arquivo de texto (.txt)
               </Description>
               <WrapperButton>
                  <Link to="/upload">
                     <GlassButtonExtended as={GlassButton}>Começar</GlassButtonExtended>
                  </Link>
               </WrapperButton>
            </WrapperText>
         </Container>
      </Page>
   );
};

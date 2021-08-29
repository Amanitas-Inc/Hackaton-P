import React from "react";
import { Link, useHistory } from "react-router-dom";
import GlassButton from "../../components/glass-button";
import {
   Container,
   Page,
   StyledImage,
   Title,
   Box,
   CornerImageBg,
   BgImage,
   ButtonWrapper,
} from "./styles";

export const DownloadPage = () => {
   const history = useHistory();
   const handleClick = () => {
      // history.push("/assets/arquivo-gerado.txt");
   };

   return (
      <Page>
         <BgImage />
         <CornerImageBg />
         <Container>
            <Box>
               <StyledImage />
               <Title>Seu arquivo já decolou na web!</Title>
               <Title>Agora é possível baixá-lo 🚀</Title>
               <ButtonWrapper>
                  <Link download to="src/assets/sms.txt" target="_blank" rel="noopener noreferrer">
                     <GlassButton customClickEvent={handleClick}>
                        Fazer Download
                     </GlassButton>
                  </Link>
                  <Link to="/">
                     <GlassButton>
                        Voltar
                     </GlassButton>
                  </Link>
               </ButtonWrapper>
            </Box>
         </Container>
      </Page>
   );
};

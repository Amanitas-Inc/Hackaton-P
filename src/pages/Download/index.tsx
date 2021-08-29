import React from "react";
import GlassButton from "../../components/glass-button";
import {
   Container,
   Page,
   StyledImage,
   Title,
   Box,
   CornerImageBg,
   BgImage,
   ButtonWrapper
} from "./styles";

export const DownloadPage = () => {
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
                  <GlassButton >Fazer Download</GlassButton>
               </ButtonWrapper>
            </Box>
         </Container>
      </Page>
   );
};

import React, { useState } from "react";
import { Link } from "react-router-dom";
import UploadButton from "../../components/upload-button";
import { Page, BackgroundStars, Container, StyledImage,Text, Button } from "./styles";

export const NotFoundPage = () => {
   return (
      <Page>
         <BackgroundStars />
         <Container>
            <StyledImage />
            <Text>Ocorreu algum erro na decolagem...</Text>
            <Link to="/upload">
               <Button>Voltar para o Início</Button>
            </Link>
         </Container>
      </Page>
   );
};

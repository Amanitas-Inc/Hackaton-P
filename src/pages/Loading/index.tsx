import React, { useState } from "react";
import UploadButton from "../../components/upload-button";
import { Page, BackgroundStars, Container, BgContainer, LoaderComet, Text } from "./styles";

export const LoadingPage = () => {
   return (
      <Page>
         <BackgroundStars />
         <Container>
            <BgContainer />
            <LoaderComet/>
            <Text>Processando...</Text>
         </Container>
      </Page>
   );
};

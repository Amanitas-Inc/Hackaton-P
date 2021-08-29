import React from "react";
import { Button, Container, Page, StyledImage, Title, Box } from "./styles";

export const DownloadPage = () => {
  return (
    <Page>
      <Container>
        <Box>
          <StyledImage />
          <Title>Seu arquivo já decolou na web!</Title>
          <Title>Agora é possível baixá-lo 🚀</Title>
        </Box>
        <Box>
          <Button>Fazer Download</Button>
        </Box>
      </Container>
    </Page>
  );
};

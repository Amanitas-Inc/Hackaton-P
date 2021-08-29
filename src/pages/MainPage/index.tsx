import React, { useState } from "react";
import UploadButton from "../../components/upload-button";
import {
  FurufufuEnfeitado,
  Submit,
  UploadLimitIndicator,
  SubTitle,
  Title,
  Container,
  ButtonsContainer,
  StyledLogo,
} from "./styles";

export const MainPage = () => {
  const [filesToUpload, setFilesToUpload] = useState<File[]>([]);

  return (
    <Container>
      <StyledLogo />
      <Title>Faça upload de suas tabelas</Title>
      <SubTitle>Anexe ou arraste seus arquivos nos espaços abaixo</SubTitle>
      <UploadLimitIndicator>Max 800Mb</UploadLimitIndicator>
      <ButtonsContainer>
        <UploadButton>Tabela da empresa</UploadButton>
        <UploadButton>Tabela do banco</UploadButton>
      </ButtonsContainer>
      <Submit>Enviar arquivos</Submit>
      <FurufufuEnfeitado></FurufufuEnfeitado>
    </Container>
  );
};

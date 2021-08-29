import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import GlassButton from "../../components/glass-button";
import UploadButton from "../../components/upload-button";
import { LoadingPage } from "../Loading";
import {
   FurufufuEnfeitado,
   UploadLimitIndicator,
   SubTitle,
   Title,
   Page,
   ButtonsContainer,
   StyledLogo,
   Content,
   IconUpload,
   TextBox,
} from "./styles";

export const UploadPage = () => {
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const history = useHistory();
   const [companyFile, setCompanyFile] = useState<File | null>(null);
   const [bankFile, setBankFile] = useState<File | null>(null);

   const changeHandlerFile1 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setCompanyFile(event.target.files ? event.target.files[0] : null);
      console.log("company");
   };
   const changeHandlerFile2 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setBankFile(event.target.files ? event.target.files[0] : null);
      console.log("bank");
   };

   const handleSubmit = () => {
      setIsLoading(true);
      const requestOptions = {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            "access-control-allow-origin": "*",
         },
         body: JSON.stringify({
            file: bankFile,
            file2: companyFile,
         }),
      };

      fetch("http://127.0.0.1:5000/arquivo", requestOptions)
         .then((response) => response.json())
         .then((data) => {
            setIsLoading(false);
            history.push("/download");
         });
   };

   return !isLoading ? (
      <Page>
         <FurufufuEnfeitado></FurufufuEnfeitado>
         <Content>
            <StyledLogo />
            <TextBox>
               <Title>Faça upload de suas tabelas</Title>
               <SubTitle>
                  Anexe ou arraste seus arquivos nos espaços abaixo
               </SubTitle>
               <UploadLimitIndicator>Max 800Mb</UploadLimitIndicator>
            </TextBox>
            <ButtonsContainer>
               <UploadButton customOnChange={changeHandlerFile1}>
                  <IconUpload /> Tabela da empresa
               </UploadButton>
               <UploadButton customOnChange={changeHandlerFile2}>
                  <IconUpload />
                  Tabela do banco
               </UploadButton>
            </ButtonsContainer>
            <GlassButton customClickEvent={handleSubmit}>
               Enviar arquivos
            </GlassButton>
         </Content>
      </Page>
   ) : (
      <Page>
         <LoadingPage />
      </Page>
   );
};

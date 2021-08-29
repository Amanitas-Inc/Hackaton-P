import React, { useState, useRef } from "react";
import { Container, Input, Button } from "./styles";

interface UploadButtonProps {
   children: string;
}
export const UploadButton = ({ children }: UploadButtonProps) => {
   const [selectedFile, setSelectedFile] = useState();
   const hiddenFileInput = useRef(document.createElement("input"));

   const handleClick = (event: any) => {
        if (hiddenFileInput)
        hiddenFileInput.current.click();
   };
   
   const changeHandler = (event: any) => {
      if (!event) return;
      
      setSelectedFile(event.target.files[0]);
      console.log(event.target.files[0]);
   };

   return (
      <Container>
         <Button onClick={handleClick}>{children}</Button>
         <Input
            ref={hiddenFileInput}
            type="file"
            accept=".csv"
            onChange={changeHandler}
         />
      </Container>
   );
};

import React, { useState, forwardRef } from "react";
import { Container, Input, Button } from "./styles";

interface UploadButtonProps {
   children: React.ReactNode;
   customOnChange?: any;
}

const UploadButton = ({ children, customOnChange,...others }: UploadButtonProps) => {
   const hiddenInputRef = React.useRef<HTMLInputElement>(null);

   const handleClick = () => {
      hiddenInputRef.current?.click();
   };

   return (
      <Container>
         <Button onClick={handleClick}>{children}</Button>
         <Input
            ref={hiddenInputRef}
            {...others}
            type="file"
            accept=".csv, .txt"
            onChange={customOnChange}
         />
      </Container>
   );
};

export default UploadButton;

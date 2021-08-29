import React, { useState, forwardRef } from "react";
import { Container, Input, Button } from "./styles";

interface UploadButtonProps {
  children: string;
}

const UploadButton = ({ children, ...others }: UploadButtonProps) => {
  const hiddenInputRef = React.useRef<HTMLInputElement>(null);

  const handleClick = () => {
    hiddenInputRef.current?.click();
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.files);
  };

  return (
    <Container>
      <Button onClick={handleClick}>{children}</Button>
      <Input
        ref={hiddenInputRef}
        {...others}
        type="file"
        onChange={changeHandler}
      />
    </Container>
  );
};

export default UploadButton;

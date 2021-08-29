import React, { useState, forwardRef } from "react";
import { Button } from "./styles";

interface UploadButtonProps {
   children: React.ReactNode;
   customClickEvent?: any;
}

const GlassButton = ({ children, customClickEvent, ...others }: UploadButtonProps) => {

   return (
      <Button onClick={customClickEvent}>{children}</Button>
   );
};

export default GlassButton;

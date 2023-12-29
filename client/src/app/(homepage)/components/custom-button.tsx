"use client";

import { useIsMobile } from "@/app/lib/helpers";
import { Button, SxProps, Theme, styled } from "@mui/material";

const BaseButtonStyles = {
  // width: "300px",
  fontWeight: "bold",
  color: "white",
  backgroundColor: "#ed4b82",
  letterSpacing: "1.5px",
  "&:hover": {
    backgroundColor: "white",
    color: "#a4727e",
    border: "1px solid #ed4b82",
  },
};

const CustomButtonStyled = styled(Button)(BaseButtonStyles);

type CustomButtonProps = {
  title?: string;
  customStyles?: React.CSSProperties;
  sx?: SxProps<Theme>; // Updated type for sx
};

const CustomButton = (props: CustomButtonProps) => {
   const { title, customStyles, sx } = props;
   console.log("🚀 ~ file: custom-button.tsx:28 ~ CustomButton ~ sx:", sx)

  return (
    <CustomButtonStyled
      variant="contained"
      size={!useIsMobile() ? "large" : "small"}
       sx={{ ...BaseButtonStyles, ...customStyles, ...sx }}
    >
      {title ? title : "Book Now"}
    </CustomButtonStyled>
  );
};

export default CustomButton;

"use client";

import { useIsMobile } from "@/app/lib/helpers";
import { Button, styled } from "@mui/material";

const BaseButtonStyles = {
  width: "300px",
  padding: "15px 0",
  fontWeight: "bold",
  color: "white",
  backgroundColor: "#ed4b82",
  letterSpacing: "1.5px",
  "&:hover": {
    backgroundColor: "white",
    color: "black",
  },
};

const CustomButtonStyled = styled(Button)(BaseButtonStyles);

type CustomButtonProps = {
  title?: string;
  customStyles?: React.CSSProperties; // Allow custom styles as a prop
};

const CustomButton = (props: CustomButtonProps) => {
  const { title, customStyles } = props;

  return (
    <CustomButtonStyled
      variant="contained"
      size={!useIsMobile() ? "large" : "small"}
      sx={{ ...BaseButtonStyles, ...customStyles }} // Merge styles
    >
      {title ? title : "Book Now"}
    </CustomButtonStyled>
  );
};

export default CustomButton;

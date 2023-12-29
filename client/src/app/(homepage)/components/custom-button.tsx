"use client";

import { useIsMobile } from "@/app/lib/helpers";
import { Button, SxProps, Theme, Typography, styled } from "@mui/material";
import Link from "next/link";

const BaseButtonStyles = {
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
  sx?: SxProps<Theme>;
  link?: string;
};

const CustomButton = (props: CustomButtonProps) => {
  const { title, customStyles, sx, link } = props;
  const isMobile = useIsMobile();

  return (
    <CustomButtonStyled
      variant="contained"
      size={!useIsMobile() ? "large" : "small"}
      sx={{ ...BaseButtonStyles, ...customStyles, ...sx }}
    >
      <Link
        href={link ? link : ""}
        style={{ textDecoration: "none", color: "#fff" }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            color: "white",
            letterSpacing: "1.5px",
            fontSize: !isMobile ? "1.5rem" : ".7rem",
            "&:hover": {
              backgroundColor: "white",
              color: "#a4727e",
            },
          }}
        >
          {title ? title : "Book Now"}
        </Typography>
      </Link>
    </CustomButtonStyled>
  );
};

export default CustomButton;

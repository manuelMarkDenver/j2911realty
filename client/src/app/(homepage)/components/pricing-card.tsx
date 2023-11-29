"use client";

import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import CustomButton from "./custom-button";

type PricingCardProps = {
  title: string;
  price: string;
  priceSubheader?: string;
  description?: string;
  buttonText?: string;
};

const spacingStyle = {
  mb: 5,
};

const PricingCard = (props: PricingCardProps) => {
  const { title, price, priceSubheader, description, buttonText } = props;

  return (
    <Card
      raised={true}
      sx={{ borderRadius: "20px", textAlign: "center", py: 5 }}
    >
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h3" sx={{ color: "#d66a7f" }}>
          {price}
        </Typography>
        <Typography variant="body1" sx={{ ...spacingStyle }}>
          {priceSubheader}
        </Typography>
        <Typography variant="body1" sx={{ ...spacingStyle }}>
          {description}
        </Typography>
        <CardActionArea sx={{ display: "flex", justifyContent: "center" }}>
          <CustomButton
            title={buttonText}
            customStyles={{ fontSize: ".8rem", width: "250px" }}
          />
        </CardActionArea>
      </CardContent>
    </Card>
  );
};

export default PricingCard;

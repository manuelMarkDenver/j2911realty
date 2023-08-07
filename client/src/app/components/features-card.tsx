import Link from "next/link";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

type CardProps = {
  img: string;
  title: string;
  description: string;
  link?: string | any;
};

const FeaturesCard = (props: CardProps) => {
  return (
    <Link href={props.link} style={{ width: "100%", textDecoration: "none" }}>
      <Card
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: { xs: "100%", md: "90%" },
          height: "100%",
          transition: "transform 0.3s",
          "&:hover": {
            transform: "scale(1.02)",
          },
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={props?.img}
            alt="Kitchen Designs"
          />
          <CardContent
            className="text-center"
            sx={{ py: "50px", color: "black" }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {props?.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props?.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default FeaturesCard;

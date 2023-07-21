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
};

const FeaturesCard = (props: CardProps) => {
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: { xs: "100%", md: "90%" },
        height: "100%",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={props?.img}
          alt="green iguana"
        />
        <CardContent className="text-center" sx={{ py: "50px" }}>
          <Typography gutterBottom variant="h5" component="div">
            {props?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props?.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default FeaturesCard;

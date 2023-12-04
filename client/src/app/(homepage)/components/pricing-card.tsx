"use client";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import CustomButton from "./custom-button";

import CheckBoxIcon from "@mui/icons-material/CheckBox";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

const spacingStyle = {
  mb: 5,
};

type ProcessProps = {
  title: string;
  steps: string[];
  icon: JSX.Element;
};

type PricingCardProps = {
  process: ProcessProps;
};

const PricingCard = (props: PricingCardProps) => {
  const { process } = props;
  return (
    <Card
      raised={true}
      sx={{ borderRadius: "20px", textAlign: "center", py: 5, height: "100%" }}
    >
      <CardHeader
        component={() => (
          <Stack>
            <Box
              sx={{
                borderRadius: "50%",
                width: "150px",
                height: "150px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "auto",
                mb: 2,
                bgcolor: "#f7d2cc",
              }}
            >
              <AssignmentTurnedInIcon
                sx={{
                  color: "#a4727e",
                  fontSize: "5rem",
                }}
              />
            </Box>
            <Typography
              variant="h4"
              sx={{
                color: "#a4727e",
              }}
            >
              {process?.title === "Step 1: Explore Your Vision"
                ? `${process?.title}\*`
                : process?.title}
            </Typography>
          </Stack>
        )}
        sx={{ bgcolor: "#f7d2cc" }}
      />
      <CardContent sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}>
        <List>
          {process?.steps?.map((step, index) => (
            <ListItem
              key={index}
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
              }}
            >
              <ListItemIcon>
                <CheckBoxIcon
                  sx={{
                    color: "#EF9A9A",
                  }}
                  fontSize="large"
                />
              </ListItemIcon>
              <ListItemText
                primary={step}
                primaryTypographyProps={{
                  sx: {
                    color: "#a4727e",
                    fontWeight: "bold",
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
        {process?.title === "Step 1: Explore Your Vision" && (
          <Box>
            <Typography
              variant="body2"
              sx={{ color: "gray", fontStyle: "italic" }}
            >
              *There is a $250 in person consultant fee
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "gray", fontStyle: "italic" }}
            >
              *A $250 credit is applied to balance when you book our services
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default PricingCard;

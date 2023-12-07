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
import { useIsMobile } from "@/app/lib/helpers";

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
  const isMobile = useIsMobile();

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
                width: !isMobile ? "150px" : "60px",
                height: !isMobile ? "150px" : "60px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "auto",
                mb: 2,
                bgcolor: "#f7d2cc",
              }}
            >
              {process?.icon}
            </Box>
            <Typography
              fontSize={!isMobile ? "1.8rem" : "1.2rem"}
              variant="h4"
              sx={{
                color: "#a4727e",
              }}
            >
              {process?.title}
            </Typography>
          </Stack>
        )}
        sx={{ bgcolor: "#f7d2cc" }}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
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
              <ListItemIcon sx={{ minWidth: !isMobile ? "50px" : "30px" }}>
                <CheckBoxIcon
                  sx={{
                    color: "#EF9A9A",
                  }}
                  fontSize={!isMobile ? "large" : "small"}
                />
              </ListItemIcon>
              <ListItemText
                primary={step}
                primaryTypographyProps={{
                  sx: {
                    color: "#a4727e",
                    fontWeight: "lightbold",
                    fontSize: !isMobile ? "1.2rem" : "0.7rem",
                  },
                }}
                sx={{
                  marginY: 0,
                }}
              />
            </ListItem>
          ))}
          <ListItem sx={{ display: "flex", justifyContent: "center" }}>
            {process?.title === "Step 1: Explore Your Vision" && (
              <Box textAlign="center">
                <Typography
                  variant="body2"
                  sx={{
                    color: "gray",
                    fontStyle: "italic",
                    fontSize: !isMobile ? "0.9rem" : "0.6rem",
                  }}
                >
                  There is a $250 in person consultant fee. A $250 credit is
                  applied to balance when you book our services
                </Typography>
              </Box>
            )}
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

export default PricingCard;

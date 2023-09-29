import Link from "next/link";
import { Box, Container } from "@mui/material";

export default function NotFound() {
  return (
    <Container
      sx={{
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
      }}
    >
      <Box>
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/">Return Home</Link>
      </Box>
    </Container>
  );
}

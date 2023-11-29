import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQs = () => {
  return (
    <Container maxWidth="xl" sx={{ my: 20 }}>
      <Typography variant="h3" sx={{ textAlign: "center", mb: 5 }}>
        Frequently Ask Questions
      </Typography>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{ backgroundColor: "#ed4b82", color: "#fff" }}
        >
          <Typography variant="h6">
            When to hire an Interior Designer?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6">
            Your home is the one place to relax and reset, so making sure
            it&lsquo;s a space you feel good spending time in! <br />
            <br />
            Your interior designer can give your home a new life by curating a
            style that offers style but fits your personality and the character
            of your home perfectly. They&lsquo;ll consider materials, color
            schemes, and furniture, bringing them all together to create an
            updated look.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <br />

      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{ backgroundColor: "#ed4b82", color: "#fff" }}
        >
          <Typography variant="h6">
            How much should I expect to pay for an interior designer?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6">
            If you&lsquo;re not sure how much an interior designer charges for
            their services, you&lsquo;re not alone! Prices are variable based on
            several factors, but a rough estimate are given below:
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default FAQs;

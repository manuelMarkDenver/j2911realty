import { Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

type ProjectsProps = {
  itemData: any;
};

const Projects = (props: ProjectsProps) => {
  const { itemData } = props;

  return (
    <Container maxWidth="xl" sx={{ py: 20 }}>
      <Typography variant="h2" mb={10}>
        Our Projects
      </Typography>
      <Grid container gap={10} rowSpacing={25}>
        <Grid container item xs={5} gap={1}>
          <Grid
            item
            xs={12}
            sx={{
              position: "relative",
              height: "60vh",
            }}
          >
            <Image src={itemData[0]} alt={itemData} fill={true} />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "40vh",
            }}
          >
            <Typography
              variant="h5"
              textAlign="center"
              sx={{ wordSpacing: "5px" }}
            >
              We thrive in taking homes and accenting their natural beauty while
              bringing together modern design and timeless beauty.
            </Typography>
          </Grid>
        </Grid>

        <Grid container item xs={6} gap={10}>
          <Grid
            item
            xs={12}
            sx={{
              position: "relative",
              height: "40vh",
            }}
          >
            <Image src={itemData[1]} alt={itemData} fill={true} />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              position: "relative",
              height: "60vh",
            }}
          >
            <Image src={itemData[2]} alt={itemData} width={1200} height={600} />
          </Grid>
        </Grid>

        <Grid container item xs={12} spacing={2}>
          <Grid
            item
            xs={8}
            sx={{
              position: "relative",
              height: "60vh",
            }}
          >
            <Image src={itemData[3]} alt={itemData} fill={true} />
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              textAlign="center"
              sx={{ wordSpacing: "5px" }}
            >
              We are designing homes that hold your personality and embark each
              project with new eyes.
            </Typography>
          </Grid>
        </Grid>

        <Grid container item xs={12} spacing={5} direction="row-reverse">
          <Grid container item xs={8} spacing={4}>
            <Grid container item xs={6} gap={2}>
              <Grid
                item
                xs={12}
                sx={{
                  position: "relative",
                  height: "20vh",
                }}
              >
                <Image src={itemData[7]} alt={itemData} fill={true} />
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  position: "relative",
                  height: "20vh",
                }}
              >
                <Image src={itemData[5]} alt={itemData} fill={true} />
              </Grid>
            </Grid>
            <Grid container item xs={6} gap={4}>
              <Grid
                item
                xs={12}
                sx={{
                  position: "relative",
                  height: "20vh",
                }}
              >
                <Image src={itemData[6]} alt={itemData} fill={true} />
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  position: "relative",
                  height: "20vh",
                }}
              >
                <Image src={itemData[4]} alt={itemData} fill={true} />
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            xs={4}
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              textAlign="center"
              sx={{ wordSpacing: "5px" }}
            >
              We are committed to giving you an elevated experience while
              adhering to your budget.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Projects;

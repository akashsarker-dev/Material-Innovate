import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ServicesImg from "../../assets/serviceLogo.png";

const defaultTheme = createTheme();
const cards = [
  {
    id: 1,
    title: "MARKETING STRATEGY",
    paragraph:
      "Social Media has changed the way we interact & do business while creating",
    imageUrl: ServicesImg ,
  },
  {
    id: 2,
    title: "Social Marketing",
    paragraph:
      "Social Media has changed the way we interact & do business while creating a new avenue.",
    imageUrl: ServicesImg,
  },
  {
    id: 3,
    title: "Content Marketing",
    paragraph:
      "Content Marketing is the other fold of online advertisement. If you are looking to build",
    imageUrl: ServicesImg ,
  },
];

export default function Services() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Typography
        textAlign="center"
        variant="h2"
        sx={{ fontSize: "48px", fontWeight: "700", color: "#192239" }} >
        Our Services
      </Typography>
      <Typography align="center" color="#6C7D93" width="330px" margin="0 auto">
        We have been providing great flooring solutions service.
      </Typography>
      <CssBaseline />
      <main>
        <Container sx={{ py: 13 }} maxWidth="lg">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item  key={card.id} xs={12} sm={6} md={4}>
                <Card component="div" sx={{ padding: "48px", height: "100%",  display: "flex",flexDirection: "column",}}>
                  <CardMedia
                    component="div"
                    sx={{ display: "flex", justifyContent: "center" }}>
                    <img src={card.imageUrl} alt="" />
                  </CardMedia>
                  <Typography align="center" gutterBottom variant="h5" component="h2">
                    {card.title}
                  </Typography>
                  <Typography align="center">{card.paragraph}</Typography>
                  <Button align="center" size="small">
                    Read more
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}

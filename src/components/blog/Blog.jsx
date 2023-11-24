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

const cards = [1, 2, 3];
const defaultTheme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Typography textAlign='center' variant="h2" sx={{fontSize:'48px', fontWeight:'700', color:'#413F45'}} >Our Latest Blog</Typography>
      <Typography align="center" color="#6C7D93" width="412px" margin="0 auto">We provide digital experience services to startups and small businesses.
        </Typography>
      <CssBaseline />
      <main>
        <Container sx={{ py: 13, }} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: "100%",  display: "flex",flexDirection: "column",}}>
                  <CardMedia component="div" sx={{ pt: "56.25%" }}
                    image="https://source.unsplash.com/random?wallpapers"/>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      How to Be Ahead of Stock Changes
                    </Typography>
                    <Typography>By John - 5 Comments</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Read more</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}

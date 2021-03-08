import React from "react";
import Navbar from "./Navbar";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import project1 from "../images/discover-serenity-header.png";
import project2 from "../images/breakaway-0.png";
import project3 from "../images/5-sherpas-banner.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 370,
    margin: "5rem auto",
  },
});

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center">
        {/* Project1 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                height="140"
                image={project1}
                size="small"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" align="center">
                  JQUERY, SEMANTIC UI, COVID-19 API, HIKING API, GOOGLE MAPS API
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  DISCOVER Serenity is a web application that provides its users
                  with the best hiking trail options in the United States,
                  avoiding crowds and therefore easier to find serenity
                  outdoors. This new app provides updated and reliable
                  information on hiking trails with fewer people and fewer
                  health risks.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://github.com/calebkirkish/discover-serenity"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://calebkirkish.github.io/discover-serenity/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project2 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 2"
                height="140"
                image={project2}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" align="center">
                  EXPRESS, HANDLEBARS, MySQL, MULTER, CLOUDINARY, NODEMAILER
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Breakaway is an app that increases productivity by helping
                  create a culture and community of taking breaks. Track
                  employee PTO and share employee experiences across your
                  company with this fun and seamless user experience.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://github.com/MVC-5/breakaway"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://breakaway-vacay.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project3 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 3"
                height="200"
                image={project3}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" align="center">
                  MERN, SEMANTIC UI REACT COMPONENTS, D3, PASSPORTJS, MONGODB
                  ATLAS
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  The 5 Sherpas app generate great suggestions on constructive
                  activities based on your goals for personal improvement. At
                  the end of the each week you will be able to see your level of
                  contentment in different aspects of life, such as wellness,
                  career, and relationships among others.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://github.com/MVC-5/5sherpas"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://www.5sherpas.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;

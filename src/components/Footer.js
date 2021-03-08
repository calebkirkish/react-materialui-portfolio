import React from "react";
import { makeStyles } from "@material-ui/core";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import DescriptionIcon from "@material-ui/icons/Description";
import Resume from "../images/ck-resume.pdf";

const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <BottomNavigation width="auto" style={{ background: "#222" }}>
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<LinkedInIcon />}
        href="https://www.linkedin.com/in/caleb-kirkish/"
        target="_blank"
        rel="noopener noreferrer"
      />
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<GitHubIcon />}
        href="https://github.com/calebkirkish"
        target="_blank"
        rel="noopener noreferrer"
      />
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<DescriptionIcon />}
        href={Resume}
        target="_blank"
        rel="noopener noreferrer"
      />
    </BottomNavigation>
  );
};

export default Footer;

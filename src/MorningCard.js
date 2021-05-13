import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import "./morningcard.css"
import { lightGreen } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height:150,
    margin:"10px",
    background:"rgb(48,48,48)",
    width:"fit-content",
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    height:"50px"
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 100,

   
   
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
   
  },
  playIcon: {
    height: 38,
    width: 38,
    '&:hover':{
        background:"green",
        bordeRadius:"50px"
    }
  },


}));

export default function MorningCard({image,title}) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
       
          <Typography component="h6" variant="h6">
            {title}
          </Typography>
      
        </CardContent>
        <div className={classes.controls}>
          <IconButton className="color" color='blue' aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image={image}
        title="Live from space album cover"
      />
    </Card>
  );
}
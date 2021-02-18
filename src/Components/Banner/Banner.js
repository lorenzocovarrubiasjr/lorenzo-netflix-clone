import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import YouTube from "react-youtube";
import MuiDialogContent from "@material-ui/core/DialogContent";
import "./Banner.scss";
import { getBannerMovies } from "../../requests";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#111",
  },
});

function Banner() {
  const classes = useStyles();
  const [movie, setMovie] = useState([]);
  const [openPlay, setOpenPlay] = useState(false);

  useEffect(() => {
    setMovie(
      getBannerMovies[Math.floor(Math.random() * getBannerMovies.length)]
    );
  }, []);

  const handleClickPlay = () => setOpenPlay(true);
  const handleClose = () => setOpenPlay(false);

  //Found on StackOverflow
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const bannerOptions = {
    height: "390",
    width: "500",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${movie?.backdrop_path})`,
        backgroundPosition: "top right",
      }}
    >
      <div className="banner-top-fade"></div>
      <div className="banner-content">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-buttons">
          <button className="banner-btn" onClick={handleClickPlay}>
            Play
          </button>
          <button className="banner-btn">My List</button>
        </div>
        <Dialog onClose={handleClose} open={openPlay}>
          <MuiDialogContent className={classes.root}>
            <YouTube videoId={movie?.videoId} opts={bannerOptions} />
          </MuiDialogContent>
        </Dialog>

        <h1 className="banner-desc">{truncate(movie?.overview, 200)}</h1>
      </div>
      <div className="banner-bottom-fade"></div>
    </header>
  );
}

export default Banner;

/** @jsx jsx */
import { jsx } from "theme-ui";
import PlayIcon from "../assets/images/play-icon.svg";
import PropTypes from "prop-types";


const VideoOverlay = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      sx={{
        position: "absolute",
        img: {
          display: ["block", null, "none"],
          position: "absolute",
          textAlign: "center",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        },
        zIndex: "1",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        ":hover": {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          img: {
            display: "block"
          }
        }
      }}
    >
      <div>
        <img sx={{ width: "50px", height: "50px" }} src={PlayIcon} alt="play" />
      </div>
    </div>
  );
};

export default VideoOverlay;

VideoOverlay.propTypes = {
  onClick: PropTypes.func.isRequired
};

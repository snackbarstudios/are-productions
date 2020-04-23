/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment, useState } from "react";
import Img from "gatsby-background-image";
import FsLightbox from "fslightbox-react";
import VideoOverlay from "./videoOverlay";
import PropTypes from "prop-types";

const Lightbox = ({ videoUrls, videos, index }) => {
  const [toggler, setToggler] = useState(false);
  const [slideToShow, setSlideToShow] = useState(0);
  function openLightboxOnSlide(number) {
    setToggler(!toggler);
    setSlideToShow(number);
  }
  return (
    <Fragment>
      <div sx={{ flex: "1", position: "relative" }}>
        <VideoOverlay onClick={() => openLightboxOnSlide(index)} />
        <Img
          Tag="section"
          key={index}
          onClick={() => openLightboxOnSlide(index)}
          fluid={videos[0].placeholderImage.fluid}
          backgroundColor={`#000`}
          sx={{
            height: ["200px", "400px", "420px"],
            width: "100%"
          }}
        />
      </div>
      <FsLightbox
        toggler={toggler}
        key={index}
        slide={slideToShow}
        sourceIndex={slideToShow}
        onClose={() => setSlideToShow(0)}
        thumbs={[videos[0].placeholderImage.fluid.src]}
        customSources={videoUrls.map(url => {
          return (
            <iframe
              key={url}
              src={url}
              title={url}
              width="1920px"
              height="1080px"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          );
        })}
      />
    </Fragment>
  );
};

export default Lightbox;

Lightbox.propTypes = {
  videoUrls: PropTypes.array.isRequired,
  videos: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired
};

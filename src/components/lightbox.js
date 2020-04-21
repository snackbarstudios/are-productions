/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment, useState } from "react";
import Img from "gatsby-background-image";
import FsLightbox from "fslightbox-react";
import VideoOverlay from "./videoOverlay";

const Lightbox = ({ videoUrls, videos, index }) => {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1
  });
  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number
    });
  }
  return (
    <Fragment>
      <div sx={{ flex: "1", position: "relative" }}>
        <VideoOverlay onClick={() => openLightboxOnSlide(index)} />
        <Img
          Tag="section"
          key={index}
          onClick={() => openLightboxOnSlide(index)}
          fluid={videos[index].placeholderImage.fluid}
          backgroundColor={`#000`}
          sx={{
            minHeight: "420px",
            width: "100%"
          }}
        />
      </div>
      <FsLightbox
        toggler={lightboxController.toggler}
        key={index}
        thumbs={[videos[index].placeholderImage.fluid.src]}
        customSources={videoUrls.map(url => {
          return (
            <iframe
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

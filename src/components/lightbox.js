/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment, useState } from "react";
import Img from "gatsby-background-image";
import FsLightbox from "fslightbox-react";
import VideoOverlay from "./videoOverlay";

const Lightbox = ({ video }) => {
  const [toggler, setToggler] = useState(false);
  return (
    <Fragment>
      <div sx={{ flex: "1", position: "relative" }}>
        <VideoOverlay />
        <Img
          Tag="section"
          key={video.id}
          onClick={() => setToggler(!toggler)}
          fluid={video.placeholderImage.fluid}
          backgroundColor={`#000`}
          sx={{
            minHeight: "400px",
            width: "100%"
          }}
        />
      </div>
      <FsLightbox
        toggler={toggler}
        key={video.videoUrl}
        slide={0}
        thumbs={[video.placeholderImage.fluid.src]}
        customSources={[
          <iframe
            src={video.videoUrl}
            title={video.videoUrl}
            width="1920px"
            height="1080px"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        ]}
      />
    </Fragment>
  );
};

export default Lightbox;

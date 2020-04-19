/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment, useState } from "react";
import Img from "gatsby-background-image";
import FsLightbox from "fslightbox-react";

const Lightbox = ({ video }) => {
  const [toggler, setToggler] = useState(false);
  return (
    <Fragment>
      <div sx={{ flex: "1" }}>
        <Img
          Tag="section"
          key={video.id}
          onClick={() => setToggler(!toggler)}
          fluid={video.placeholderImage.fluid}
          backgroundColor={`#000`}
          sx={{
            minHeight: "400px",
            width: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
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

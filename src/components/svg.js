/** @jsx jsx */
import { jsx } from "theme-ui";
import { keyframes } from "@emotion/core";

const bounce = keyframes`
   100% { stroke-dashoffset: 100%; }
`;

const SVG = () => {
  const st0 = () => {
    return {
      fill: "none",
      stroke: "primary",
      strokeWidth: 2,
      strokeMiterlimit: 10,
      strokeDasharray: 1000,
      strokeDashoffset: 1000,
      animation: `${bounce} 6s linear forwards`
    };
  };

  return (
    <svg
      version="1.1"
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 425.2 141.7"
      xmlSpace="preserve"
      sx={{
        height: ["180px", "300px"]
      }}
    >
      <path
        sx={st0}
        d="M240.9,80.7L182,23l35,0.9c0,0,18.2,0,18.5,13.7c0.3,16.1-19.5,16.7-19.5,16.7l-34,0.2v26.2"
      />
      <polyline sx={st0} points="87.1,80.7 118.3,23 150.8,80.7 " />
      <line sx={st0} x1="327.2" y1="23" x2="271.6" y2="23" />
      <line sx={st0} x1="321" y1="51.9" x2="271.6" y2="51.9" />
      <line sx={st0} x1="327.2" y1="80.7" x2="271.6" y2="80.7" />
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
};

export default SVG;

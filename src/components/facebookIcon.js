/** @jsx jsx */
import { jsx } from "theme-ui";

const FacebookIcon = () => {
  return (
    <div
      sx={{
        position: "relative",
        height: "50px",
        width: "50px",
        backgroundColor: "primary",
        borderRadius: "50%"
      }}
    >
      <div
        sx={{
          width: "35px",
          height: "35px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          width="35px"
          height="35px"
          data-icon="facebook-f"
          class="svg-inline--fa fa-facebook-f fa-w-10"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="white"
            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default FacebookIcon;

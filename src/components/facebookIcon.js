/** @jsx jsx */
import { jsx } from "theme-ui";

const FacebookIcon = () => {
  return (
    <div
      sx={{
        backgroundColor: "primary",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        position: "relative"
      }}
    >
      <div
        sx={{
          width: "30px",
          height: "35px",
          borderRadius: "50%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}
      >
        <svg
          aria-hidden="true"
          width="30px"
          height="35px"
          focusable="false"
          data-prefix="fab"
          data-icon="facebook-f"
          class="svg-inline--fa fa-facebook-f fa-w-10"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="#fff"
            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default FacebookIcon;

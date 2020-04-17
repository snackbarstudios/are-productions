/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import Navmenu from "./navmenu";
import MobileNavigation from "./mobileNavigation";

const Navigation = () => {
  const { datoCmsNavigation } = useStaticQuery(
    graphql`
      query {
        datoCmsNavigation {
          navMenu {
            linkName
          }
        }
      }
    `
  );
  const { navMenu } = datoCmsNavigation;
  return (
    <nav
      sx={{
        position: "fixed",
        zIndex: 3,
        width: "100%",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        padding: 2
      }}
    >
      <MobileNavigation />
      <div sx={{ display: ["none", "block"], ml: "auto" }}>
        <Navmenu navitems={navMenu} />
      </div>
    </nav>
  );
};

export default Navigation;

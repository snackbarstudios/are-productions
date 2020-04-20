/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AnchorLink from "./anchorLink";

const NavMenuDesktop = ({ navitems }) => {
  const [anchorBold, setAnchorBold] = useState(null);
  let observer;

  const [options, setOptions] = useState();

  useEffect(() => {
    if (typeof document !== `undefined`) {
      setOptions({
        root: document.body.querySelector(null),
        rootMargin: "0px",
        threshold: 0.3
      });

      observer = new IntersectionObserver(callback, options);
    }
  }, []);

  const callback = entries => {
    let anchorId;

    entries.forEach(entry => {
      if (entry.isIntersecting) {
        anchorId = entry.target.id;
      }
    });

    if (anchorId) {
      setAnchorBold(anchorId);
    } else {
      setAnchorBold(null);
    }
  };

  useEffect(() => {
    if (navitems.length) {
      navitems.forEach(({ link }) => {
        const target = document.querySelector(`#${link.slug}`);
        if (target && typeof observer !== `undefined`) {
          observer.observe(target);
        }
      });
    }
  }, [navitems, observer]);

  return (
    <ul
      sx={{
        listStyle: "none",
        display: "flex",
        flexDirection: "row",
        fontSize: 3,
        m: 0,

        li: {
          margin: 3,
          color: "primary",
          fontFamily: "heading",
          fontWeight: "body",
          fontSize: 4
        }
      }}
    >
      {navitems.map(link => (
        <li key={link.id}>
          <AnchorLink
            href={`#${link.link.slug}`}
            isBold={anchorBold === link.link.slug}
          >
            {link.linkName}
          </AnchorLink>
        </li>
      ))}
    </ul>
  );
};

export default NavMenuDesktop;

NavMenuDesktop.propTypes = {
  navitems: PropTypes.array.isRequired
};

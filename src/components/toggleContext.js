import PropTypes from "prop-types";
import React from "react";

import useNavigationToggle from "../hooks/useNavigationToggle";

function getState(
  open,
  toggleNavigation = () => {},
  closeNavigation = () => {}
) {
  return {
    open,
    toggleNavigation,
    closeNavigation
  };
}

const ToggleContext = React.createContext(getState());

const ToggleContextProvider = ({ children }) => {
  const [open, toggleNavigation, closeNavigation] = useNavigationToggle();

  return (
    <ToggleContext.Provider
      value={getState(open, toggleNavigation, closeNavigation)}
    >
      {children}
    </ToggleContext.Provider>
  );
};

export { ToggleContext, ToggleContextProvider };

ToggleContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};

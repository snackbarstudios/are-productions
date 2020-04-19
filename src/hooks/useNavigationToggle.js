import { useState } from "react";

function useNavigationToggle() {
  const [open, setOpen] = useState(false);

  function toggleNavigation() {
    setOpen(!open);
  }

  function closeNavigation() {
    if (open) {
      setOpen(false);
    }
  }

  return [open, toggleNavigation, closeNavigation];
}

export default useNavigationToggle;

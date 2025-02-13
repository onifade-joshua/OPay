import { useEffect } from "react";

const Redirect = () => {
  useEffect(() => {
    window.location.replace("https://www.opayweb.com/");
  }, []);

  return null;
};

export default Redirect;
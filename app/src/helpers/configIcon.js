/**
 *
 * Helper function to wrap react-icons
 * Used here to increase size of icons
 *
 * @author Tom Shaw
 *
 */

import { IconContext } from "react-icons";

export default function ConfigIcon({ children }) {
  return (
    <>
      <IconContext.Provider value={{ size: "2em" }}>
        {children}
      </IconContext.Provider>
    </>
  );
}

/**
 *
 * Header component collates multiple duplicated components into one
 * Renders the Title (main heading of webpage), NavBar or MobileNavBar depending on screen size
 *
 * @author Tom Shaw
 *
 */

import Title from "../components/Title";
import NavBar from "../components/navigation/NavBar";
import MobileNavBar from "../components/navigation/MobileNavBar";

export default function Header() {
  return (
    <header className="flex justify-between bg-bgdark">
      <Title />
      <NavBar />
      <MobileNavBar />
    </header>
  );
}

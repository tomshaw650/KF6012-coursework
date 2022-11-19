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

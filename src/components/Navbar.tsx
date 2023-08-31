import { BsPlus, BsFillLightningFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

export interface Iicons {
  icon: React.ReactNode;
}

export default function Navbar() {
  const NavBarIcon = ({ icon }: Iicons, { text = "tooltip" }) => (
    <div className="navbar-icon group">
      {icon}
      <span className="navbar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );

  return (
    <div className="fixed top-0 left-0 w-screen h-16 flex flex-row bg-gray-900 text-white shadow-lg">
      <NavBarIcon icon={<FaFire size="28" />} />
      <NavBarIcon icon={<BsPlus size="32" />} />
      <NavBarIcon icon={<BsFillLightningFill size="20" />} />
      <NavBarIcon icon={<FaPoo size="20" />} />
    </div>
  );
}

import ComputerNav from "../ComputerNav/ComputerNav";
import MobileNav from "../MobileNav/MobileNav";

const MainNav = () => {
  return (
    <>
      <div className="hidden md:block">
        <ComputerNav />
      </div>
      <div className="md:hidden block">
        <MobileNav />
      </div>
    </>
  );
};

export default MainNav;

import { NavLink } from "react-router-dom";
import { FiCompass, FiHeart, FiPlus, FiBell, FiUser } from "react-icons/fi";

const Navigation = () => {
  return (
    <div className="fixed bottom-8 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-lg px-4 sm:px-6">
      <div
        className="relative flex items-center justify-between
        bg-gray-50/85 backdrop-blur-2xl
        rounded-full
        shadow-[0_20px_50px_rgba(0,0,0,0.12)]
        px-6 sm:px-8
        py-4 sm:py-4
        transition-all"
      >
        <NavItem to="/" icon={FiCompass} />
        <NavItem to="/liked" icon={FiHeart} />

        {/* CENTER ACTION */}
        <div className="relative -mt-12 sm:-mt-10">
          <NavLink
            to="/create"
            className="group w-16 h-16 sm:w-14 sm:h-14 rounded-full
            bg-yellow-400/98
            text-white
            flex items-center justify-center
            border-4 border-white
            shadow-[0_10px_25px_rgba(255,190,0,0.25)]
            transition-all duration-200
            active:scale-90
            hover:scale-105"
          >
            <FiPlus size={24} />
          </NavLink>
        </div>

        <NavItem to="/notifications" icon={FiBell} />
        <NavItem to="/profile" icon={FiUser} />
      </div>
    </div>
  );
};

const NavItem = ({ to, icon: Icon }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `relative flex items-center justify-center
        w-12 h-12 sm:w-11 sm:h-11
        rounded-full
        transition-all duration-200
        ${
          isActive
            ? "text-yellow-500 bg-yellow-50"
            : "text-gray-500 hover:text-yellow-500 hover:bg-gray-100"
        }
        active:scale-90`
      }
    >
      <Icon size={24} />
    </NavLink>
  );
};

export default Navigation;

import { NavLink } from "react-router-dom";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => (
  <>
    <ul className="hidden lg:flex items-center ms-auto">
      <li>
        <NavLink
          to="/youtube-downloader"
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-primary"
              : "font-semibold text-gray-500 hover:text-primary transition"
          }
        >
          Downloader
        </NavLink>
      </li>
      <li className="mx-3">
        <NavLink
          to="/youtube-converter"
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-primary"
              : "font-semibold text-gray-500 hover:text-primary transition"
          }
        >
          Converter
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/youtube-to-mp3"
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-primary"
              : "font-semibold text-gray-500 hover:text-primary transition"
          }
        >
          YouTube to MP3
        </NavLink>
      </li>
    </ul>
    <Button type="button" variant="none" className="block lg:hidden ms-auto">
      <FontAwesomeIcon icon={faBars} size="xl" />
    </Button>
  </>
);

export default Navbar;
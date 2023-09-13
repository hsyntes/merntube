import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => (
  <>
    <ul className="lg:flex items-center ms-auto">
      <li>
        <NavLink
          to="/youtube-downloader"
          className={({ isActive }) =>
            isActive
              ? "hidden lg:block font-semibold text-primary"
              : "hidden lg:block font-semibold text-gray-500 hover:text-primary transition"
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
              ? "hidden lg:block font-semibold text-primary"
              : "hidden lg:block font-semibold text-gray-500 hover:text-primary transition"
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
              ? "hidden lg:block font-semibold text-primary"
              : "hidden lg:block font-semibold text-gray-500 hover:text-primary transition"
          }
        >
          YouTube to MP3
        </NavLink>
      </li>
      <li>
        <Link
          to="https://github.com/hsyntes/merntube-api"
          target="_blank"
          className="text-gray-500 hover:text-dark hover:dark:text-white lg:ms-3"
        >
          <FontAwesomeIcon icon={faGithub} size="2xl" />
        </Link>
      </li>
    </ul>
  </>
);

export default Navbar;

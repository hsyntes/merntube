import { Link } from "react-router-dom";

const Brand = () => (
  // Brand
  <Link to="/" className="flex items-center">
    <img
      src="https://img.icons8.com/external-flat-icons-inmotus-design/96/external-Download-files-documents-operations-flat-icons-inmotus-design.png"
      alt="App"
      className="w-7 lg:w-8"
    />
    <h1 className="font-bold text-2xl lg:text-3xl ms-1">
      MERN<span className="text-primary">Tube</span>
    </h1>
  </Link>
);

export default Brand;

const Button = ({ type, variant, className, onClick, children }) => {
  let classes = `font-semibold text-sm rounded shadow py-2 px-4 transition ${className} `;

  if (variant === "primary")
    classes += "bg-primary text-white hover:bg-primary-darker";
  if (variant === "dark") classes += "bg-dark text-white hover:bg-dark-darker";
  if (variant === "light") classes += "bg-light text-dark hover:bg-white";
  if (variant === "white") classes += "bg-white text-dark";
  if (variant === "none")
    classes += "bg-none text-dark dark:text-white !shadow-none";
  if (variant === "link") classes += "!shadow-none text-primary !px-0 !py-0";
  if (variant === "blue") classes += "bg-blue-700 hover:bg-blue-900 text-white";
  if (variant === "pink") classes += "bg-pink-700 hover:bg-pink-900 text-white";

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

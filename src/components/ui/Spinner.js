import { motion } from "framer-motion";

const Spinner = ({ className, size }) => {
  const classes = `border-t-2 border-t-primary border-2 border-white ${className}`;

  let width, height;

  if (size === "sm") width = height = "16px";
  if (size === "lg") width = height = "32px";
  if (size === "xl") width = height = "48px";

  return (
    <motion.div
      className={classes}
      style={{
        borderRadius: "100%",
        width: width || "24px",
        height: height || "24px",
      }}
      animate={{ rotate: [0, 360] }}
      transition={{ ease: "easeOut", duration: 0.5, repeat: Infinity }}
    />
  );
};

export default Spinner;

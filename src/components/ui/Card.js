const Card = ({ className, children }) => {
  const classes = `card bg-white dark:bg-dark rounded shadow dark:shadow-xl px-10 py-12 ${className}`;

  return <div className={classes}>{children}</div>;
};

const CardHeader = ({ className, children }) => {
  const classes = `card-header ${className}`;
  return <div className={classes}>{children}</div>;
};

const CardBody = ({ className, children }) => {
  const classes = `card-body ${className}`;
  return <div className={classes}>{children}</div>;
};

const CardFooter = ({ className, children }) => {
  const classes = `card-footer ${className}`;
  return <div className={classes}>{children}</div>;
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;

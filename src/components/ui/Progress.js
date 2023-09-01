import Spinner from "./Spinner";

const Progress = ({ percentage }) => {
  return (
    <div className="relative overflow-hidden">
      <div
        className="bg-white dark:bg-primary rounded py-5"
        style={{ width: isNaN(percentage) ? "0%" : `${percentage}%` }}
      >
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {isNaN(percentage) ? (
            <center className="flex items-center justify-center">
              <span className="me-2">Converting</span>
              <Spinner size="sm" />
            </center>
          ) : (
            `${percentage} %`
          )}
        </p>
      </div>
    </div>
  );
};

export default Progress;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../ui/Button";
import Card from "../ui/Card";
import { faMusic, faVideo } from "@fortawesome/free-solid-svg-icons";

const Tab = ({ tabs, activeTab, handleActiveTab, children }) => {
  return (
    <Card className="!p-0 dark:lg:!bg-black lg:!p-6">
      <Card.Header className="mb-6">
        {tabs?.map((tab) => (
          <Button
            key={tab}
            type="button"
            variant="none"
            className={
              activeTab === tab
                ? "border-b-2 border-b-primary !text-primary rounded-none"
                : undefined
            }
            onClick={() => handleActiveTab(tab)}
          >
            {tab === "Video" ? (
              <FontAwesomeIcon icon={faVideo} />
            ) : (
              <FontAwesomeIcon icon={faMusic} />
            )}
            <span className="ms-2">{tab}</span>
          </Button>
        ))}
      </Card.Header>
      <Card.Body className="mb-3">{children}</Card.Body>
    </Card>
  );
};

export default Tab;

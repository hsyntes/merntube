import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../ui/Button";
import Tab from "./Tab";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Modal from "../ui/Modal";
import Progress from "../ui/Progress";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useLocation } from "react-router-dom";

const Downloader = ({ videoURL, data }) => {
  const location = useLocation();
  const [progress, setProgress] = useState();
  const [sourceId, setsourceId] = useState();
  const [message, setMessage] = useState();
  const [modal, setModal] = useState();

  const TABS = ["Video", "Audio"];

  const [items] = data?.items;
  const { localized, thumbnails } = items?.snippet;

  const [activeTab, setActiveTab] = useState(TABS[0]);

  const handleActiveTab = (tab) => setActiveTab(tab);

  const handleDownload = () => {
    const webSocket = new WebSocket(
      "wss://merntube-e9de51d6cb98.herokuapp.com"
    );

    webSocket.onopen = () => {
      console.log("WebSocet connected.");
      webSocket.send(
        JSON.stringify({ type: activeTab, videoURL, title: localized.title })
      );
    };

    webSocket.onmessage = (e) => {
      const data = JSON.parse(e.data);

      setProgress(data.progress);

      if (data.status === "success") {
        setsourceId(data.id);
        setMessage(data.message);
      }
    };

    return () => webSocket.close();
  };

  useEffect(() => {
    if (location)
      if (location.pathname === "/youtube-to-mp3") setActiveTab("Audio");
  }, [location]);

  return (
    <>
      <section className="lg:grid lg:grid-cols-12 lg:gap-3 lg:items-start">
        <section className="col-span-6">
          <a
            href={videoURL}
            target="_blank"
            rel="noreferrer"
            className="group w-full overflow-hidden"
          >
            <img
              src={thumbnails.high.url}
              className="rounded group-hover:opacity-75 mb-2 transition object-cover"
              style={{ width: "100%", height: "100%" }}
              alt="Thumbnail"
              loading="lazy"
            />
            <h6 className="font-semibold">{localized.title}</h6>
          </a>
        </section>
        <section className="col-span-6 mt-8 lg:mt-0">
          <Tab
            tabs={TABS}
            activeTab={activeTab}
            handleActiveTab={handleActiveTab}
          >
            <ul>
              <li>
                <span className="text-xs bg-green-700 rounded py-0.5 px-2">
                  Highest Quality
                </span>
                <p className="mb-3">{localized.title}</p>
                <Button
                  type="button"
                  variant="primary"
                  className="ms-auto"
                  onClick={() => {
                    setModal(true);
                    handleDownload();
                  }}
                >
                  <FontAwesomeIcon icon={faDownload} />
                  <span className="ms-2">Download {activeTab}</span>
                </Button>
              </li>
            </ul>
          </Tab>
        </section>
      </section>
      <Modal show={modal}>
        <Modal.Header>
          <h6 className="font-semibold text-xl text-center">
            {localized.title}
          </h6>
        </Modal.Header>
        <Modal.Body className="my-10">
          <Progress percentage={Number(progress).toFixed(0)} />
          <section className="flex flex-col items-center justify-center my-4">
            <p className="mb-2">{message}</p>
            {message && (
              <a
                href={`https://merntube-e9de51d6cb98.herokuapp.com/merntube/sources/download/${sourceId}`}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-primary hover:bg-primary-darker font-semibold text-sm rounded shadow px-4 py-2"
                download
                onClick={() => setModal(false)}
              >
                <FontAwesomeIcon icon={faDownload} />
                <span className="ms-2">Download</span>
              </a>
            )}
          </section>
        </Modal.Body>
        <Modal.Footer>
          <p className="text-justify mb-2">
            Thank you for using my service. If you could share my application
            with your friends, that would be a great help.&nbsp;
            <strong>Thank you</strong>.
          </p>
          <p className="text-justify">
            <h6 className="font-semibold mb-1">Contact me</h6>
            <section>
              <a
                href="https://linkedin.com/in/hsyntes"
                rel="noreferrer"
                target="_blank"
                className=""
              >
                <FontAwesomeIcon icon={faLinkedin} />
                <span className="ms-1">LinkedIn</span>
              </a>
              <a
                href="https://github.com/hsyntes"
                rel="noreferrer"
                target="_blank"
                className="ms-2"
              >
                <FontAwesomeIcon icon={faGithub} />
                <span className="ms-1">GitHub</span>
              </a>
            </section>
          </p>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Downloader;

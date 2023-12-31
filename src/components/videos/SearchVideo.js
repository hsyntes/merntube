import { useState } from "react";
import { useQuery } from "react-query";
import getVideo from "../../utils/getVideo";
import Card from "../ui/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Spinner from "../ui/Spinner";
import Downloader from "../downloader/Downloader";

const SearchVideo = () => {
  // Video URL based on the input
  const [videoURL, setvideoURL] = useState();
  // Video id based on the YouTube
  const [videoId, setVideoId] = useState();

  // URL input when changed
  const handleOnChange = (e) => {
    const { value } = e.target;
    setvideoURL(value);

    if (value.includes("youtu.be"))
      setVideoId(value.split("https://youtu.be/").at(1).slice(0, 11));
    else setVideoId(value.split("v=").at(1));
  };

  // Fetch the video based on video URL
  const { data, isLoading } = useQuery(["getVideo", videoURL], {
    queryFn: async () => {
      if (videoURL && videoURL !== "" && videoURL?.length >= 40) {
        const data = await getVideo(videoId);
        return data;
      } else return;
    },
    refetchOnWindowFocus: false,
  });

  return (
    <section>
      <Card>
        <Card.Header>
          <h1 className="font-semibold text-2xl text-center">
            <span className="me-2">
              Download Video and Audio with the best quality from YouTube
            </span>
            <FontAwesomeIcon
              className="text-primary"
              icon={faYoutube}
              size="lg"
            />
          </h1>
        </Card.Header>
        <Card.Body className="my-12">
          <Input
            type="text"
            value={videoURL}
            handleOnChange={handleOnChange}
            placeholder="Paste link here"
          >
            <Button
              type="button"
              variant="link"
              className="peer !text-dark dark:!text-white peer-focus:!text-primary absolute top-1/2 -translate-y-1/2 right-0 hover:!text-primary-darker !shadow-none pe-0"
            >
              <FontAwesomeIcon icon={faPaperPlane} size="lg" />
            </Button>
          </Input>
        </Card.Body>
        <Card.Footer>
          {videoURL && isLoading && (
            <center>
              <Spinner size="lg" />
            </center>
          )}
          {videoURL && data?.items?.length === 0 && (
            <p className="text-gray-500 text-center">No results found.</p>
          )}
          {data && videoURL && data?.items?.length >= 1 && (
            <Downloader data={data} videoURL={videoURL} />
          )}
        </Card.Footer>
      </Card>
    </section>
  );
};

export default SearchVideo;

const { default: Jumbotron } = require("../components/jumbotron/Jumbotron");

const HomePage = () => (
  <Jumbotron
    title="YouTube Video Downloader"
    text="MERNTube allows you to convert & download video from YouTube to Mp3, Mp4 in the best quality. MERNTube supports downloading all video formats such as: MP4, M4V, 3GP, WMV, FLV, MO, MP3, WEBM, etc. You can easily download for free thousands of videos from YouTube."
  />
);

export default HomePage;

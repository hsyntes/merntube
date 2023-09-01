const getVideo = async (videoId) => {
  const response = await fetch(
    `${process.env.REACT_APP_YOUTUBE_API}/videos?part=snippet&id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
  );

  const data = await response.json();

  if (!data) return;

  return data;
};

export default getVideo;

import { useEffect } from "react";

const AdsenseAd = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1989223301932981";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
  }, []);

  return (
    <div className="ad-container my-24">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-1989223301932981"
        data-ad-slot="9684006297"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdsenseAd;

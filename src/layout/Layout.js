import { Outlet } from "react-router-dom";
import Brand from "../components/brand/Brand";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/footer/Footer";
import SearchVideo from "../components/videos/SearchVideo";
import AdsenseAd from "../components/adsense-ad/AdsenseAd";

const Layout = () => {
  return (
    <div className="App container mx-auto lg:w-3/4 px-4">
      <header className="flex items-center my-6 lg:my-12 ">
        <Brand />
        <Navbar />
      </header>
      <AdsenseAd />
      <main className="my-24">
        <SearchVideo />
        <AdsenseAd />
        <Outlet />
        <section className="lg:flex lg:items-center lg:justify-evenly my-24">
          <section className="text-center">
            <img
              src="https://img.icons8.com/arcade/96/packaging.png"
              className="mx-auto"
              alt="Gift"
            />
            <h6 className="font-semibold text-xl text-primary">
              Free Download
            </h6>
            <p className="text-lg">Unlimited conversion and free download.</p>
          </section>
          <section className="text-center my-8 lg:my-0">
            <img
              src="https://img.icons8.com/arcade/96/video.png"
              className="mx-auto"
              alt="Video & Audio"
            />
            <h6 className="font-semibold text-xl text-purple-700">
              Video & Audio
            </h6>
            <p className="text-lg">Directly Download Video & Music.</p>
          </section>
          <section className="text-center">
            <img
              src="https://img.icons8.com/nolan/96/realtime-protection.png"
              className="mx-auto"
              alt="Easy Download"
            />
            <h6 className="font-semibold text-xl text-blue-700">
              Easy Download
            </h6>
            <p className="text-lg">Fully compatible with all browsers.</p>
          </section>
        </section>
        <section className="lg:grid lg:grid-cols-12 lg:gap-3 my-24">
          <section className="lg:col-span-8">
            <h6 className="font-semibold text-xl">Instructions</h6>
            <ol className=" lg:list-decimal">
              <li>Directly paster the link of video you want to convert.</li>
              <li>Click "Start" button to begin converting process.</li>
              <li>
                Selec the video/audio format you want to download, then click
                "Download" button.
              </li>
            </ol>
          </section>
          <section className="lg:col-span-4 mt-6 lg:mt-0">
            <h6 className="font-semibold text-xl">Features</h6>
            <ul className="lg:list-disc">
              <li>Unlimited downloads and always free</li>
              <li>High-speed video converter</li>
              <li>No registration required</li>
              <li>Support downloading with all formats</li>
            </ul>
          </section>
        </section>
      </main>
      <AdsenseAd />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;

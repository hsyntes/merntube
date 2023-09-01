import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { themeSliceActions } from "./store/theme/theme-slice";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/Home";
import DownloaderPage from "./pages/Downloader";
import ConverterPage from "./pages/Converter";
import YoutubeMp3Page from "./pages/YoutubeMp3";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "youtube-downloader", element: <DownloaderPage /> },
      { path: "youtube-converter", element: <ConverterPage /> },
      { path: "youtube-to-mp3", element: <YoutubeMp3Page /> },
    ],
  },
]);

function App() {
  const themeState = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const { theme } = themeState;

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) =>
      dispatch(themeSliceActions.switchTheme(e.matches ? "dark" : "light"))
    );

  useEffect(() => {
    const [html, body] = [
      document.querySelector("html"),
      document.querySelector("body"),
    ];

    if (theme === "dark") html.className = "dark";
    else html.className = "";

    body.className = "bg-light text-dark dark:bg-black dark:text-white";
  }, [theme]);

  return <RouterProvider router={router} />;
}

export default App;

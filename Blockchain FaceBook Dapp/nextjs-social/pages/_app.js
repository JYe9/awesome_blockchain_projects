import "../styles/globals.css";
import Head from "next/head";
import { SOCAIL_MEDIA_Provider } from "../context/context";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="images/favicon.png"
        />
        <title>@theblockchaincoders Social</title>
      </Head>
      <SOCAIL_MEDIA_Provider>
        <Component {...pageProps} />
      </SOCAIL_MEDIA_Provider>

      <script src="js/plugin.js"></script>
      <script src="js/lightbox.js"></script>
      <script src="js/scripts.js"></script>
    </>
  );
}

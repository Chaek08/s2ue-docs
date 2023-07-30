import styles from "./index.module.scss"

import { downText, firstTitle, goBtn, goTitle } from "./text";
import useLocalesMap from "utils/use-locales-map";
import { Discord } from "../components/discord";
import { Boosty } from "../components/boosty";
import { EndBlock } from "../components/endBlock";
import Hero from "./Hero";
import Screenshots from "./Screenshots";
import Features from "./Features";
import OriginalStory from "./OriginalStory";
import { DownloadModal } from "./DownloadModal";
import { Inter } from 'next/font/google'
import classnames from "classnames";
import Head from "next/head";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function Home() {
  const title = useLocalesMap(firstTitle);
  const subtitle = useLocalesMap(downText);
  const buttonText = useLocalesMap(goBtn);

  return (
    <>
      <Head>
        <style>
          {`
            footer {
              background-color: white !important;
            }
            .dark footer,
            .dark body {
              background-color: black !important;
              --tw-border-opacity: 1;
              border-top: 1px solid rgba(38,38,38,var(--tw-border-opacity));
            }

            .dark .nextra-nav-container .nextra-nav-container-blur  {
              background-color: rgba(0,0,0,.5) !important;
            }

            html:not([class~="dark"]) {
              .hero{
                border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.08) !important;
              }
            }
          `}
        </style>
      </Head>
      <main className={classnames(inter.className, inter.variable, styles.game) + " relative place-content-center"} id="game-index">
        <h1 className="hidden">{title}</h1>
        <Hero />
        <Screenshots />
        <Features />
        <OriginalStory />
        <Discord />
        <Boosty />
        <EndBlock title={useLocalesMap(goTitle)} subTitle={subtitle} button={<DownloadModal buttonText={buttonText} limit={false} />} />
      </main>
    </>
  );
}

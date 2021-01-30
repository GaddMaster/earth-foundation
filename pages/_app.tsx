
import { AppProps } from "next/app";
import { AppWrapper } from '../state/AppContext';

import { AnimatePresence } from "framer-motion";

import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;
library.add(
  faSearch
);

import "../styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </AppWrapper>
  );
};

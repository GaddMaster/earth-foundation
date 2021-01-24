
import { AppProps } from "next/app";
import { AppWrapper } from '../state/AppContext';

import { AnimatePresence } from "framer-motion";



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

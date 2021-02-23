
import { AnimatePresence } from "framer-motion";

import "../styles/global.css";

export default function App({ Component }) {
    return (
        <AnimatePresence exitBeforeEnter>
            <Component />
        </AnimatePresence>
    );
};

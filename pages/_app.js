import '../styles/globals.css';
import { AnimatePresence, motion } from 'framer-motion';

// This component wraps your entire application, enabling animations between pages.
function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={router.route}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.25 }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;



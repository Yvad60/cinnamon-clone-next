import '../styles/globals.css';
import Navbar from './components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar variant={''}/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

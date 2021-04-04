import { Nav } from './components/nav/Nav';
import { GlobalStyle } from "./styles/globalStyles";
import { useData } from './contexts/dataContext';
import { Accueil } from './views/Accueil';
import { Fabrication } from './views/Fabrication';
import { BestSellers } from './views/BestSellers';
import { QuiSommesNous } from './views/QuiSommesNous';
import { Contact } from './views/Contact';
import { SplashScreen } from './components/splashScreen/SplashScreen';
import { motion } from 'framer-motion';
function App() {
  const {
    isLoading,
    error
  } = useData();

  return (<>
    <GlobalStyle />
    {
      isLoading || error !== null ? (
        <SplashScreen error={error} />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: .5 }}
        >
          <Nav items={
            {
              'Accueil': 'accueil',
              'Fabrication': 'fabrication',
              'Best Sellers': 'bestSellers',
              'Qui sommes-nous ?': 'quiSommesNous',
              'Contact': 'contact'
            }
          }
          />
          <main>
            <Accueil />
            <Fabrication />
            <BestSellers />
            <QuiSommesNous />
            <Contact />
          </main>
        </motion.div>
      )
    } </>
  );
}

export default App;
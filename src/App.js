import { useEffect } from 'react';
import SkipLinks from './components/SkipLinks.tsx';
import Header from './components/Header.tsx';
import Main from './components/Main.tsx';
import Footer from './components/Footer.tsx';

const App = () => {
  useEffect(() => {
    // Inicializa o DS Gov quando o componente monta
    if (typeof window !== 'undefined') {
      import('@govbr-ds/core/dist/core-init').then(() => {
        if (window.BRCore) {
          window.BRCore.init();
        }
      });
    }
  }, []);

  return (
    <div className="template-base">
      <SkipLinks />
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
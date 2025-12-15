import { useEffect } from 'react';
import SkipLinks from './components/SkipLinks';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  useEffect(() => {
    // Inicializa o DS Gov apenas uma vez quando o componente monta
    const initDSGov = async () => {
      try {
        // Aguarda um pequeno delay para garantir que o DOM está pronto
        await new Promise(resolve => setTimeout(resolve, 100));
        
        if (window.BRCore) {
          window.BRCore();
        }
      } catch (error) {
        console.error('Erro ao inicializar DS Gov:', error);
      }
    };

    initDSGov();
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
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

import Beneficios from "./pages/Beneficios";
import Ferias from "./pages/Ferias";
import LicencaPremio from "./pages/LicencaPremio";
import Rendimentos from "./pages/Rendimentos";
import CadastroPessoal from "./pages/CadastroPessoal";
import CadastroFuncionario from "./pages/CadastroFuncionario";

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Header />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/beneficios" element={<Beneficios />} />
          <Route path="/ferias" element={<Ferias />} />
          <Route path="/licenca-premio" element={<LicencaPremio />} />
          <Route path="/irrf" element={<Rendimentos />} />
          <Route path="/cadastro-pessoal" element={<CadastroPessoal />} />
          <Route path="/cadastro-funcionario" element={<CadastroFuncionario />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

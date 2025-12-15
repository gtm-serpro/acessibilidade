import Breadcrumb from "../components/ui/Breadcrumb";
import { useFerias } from "../hooks/useFerias";

import FeriasCalendario from "../components/ferias/FeriasCalendario";
import FeriasPeriodos from "../components/ferias/FeriasPeriodos";
import FeriasHistorico from "../components/ferias/FeriasHistorico";

export default function Ferias() {
  const {
    periodos,
    rangeAtual,
    setRangeAtual,
    adicionarPeriodo,
    removerPeriodo,
  } = useFerias();

  return (
    <main className="container-lg mt-4" id="main-content">
      <Breadcrumb />
      <h1>Férias</h1>

      <FeriasCalendario
        range={rangeAtual}
        onSelect={setRangeAtual}
        onConfirm={() => adicionarPeriodo(rangeAtual)}
      />

      <FeriasPeriodos
        periodos={periodos}
        onRemove={removerPeriodo}
      />

      <FeriasHistorico />
    </main>
  );
}
